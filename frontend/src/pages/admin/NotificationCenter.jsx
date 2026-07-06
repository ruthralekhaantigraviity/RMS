import { useState, useEffect } from 'react';
import { Search, Plus, Bell, Megaphone, AlertCircle, Info, MailOpen, MoreHorizontal, X, Clock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const getIcon = (type) => {
    switch(type) {
        case 'Alert': return <AlertCircle size={20} className="text-red-500" />;
        case 'Info': return <Info size={20} className="text-blue-500" />;
        case 'Broadcast': return <Megaphone size={20} className="text-purple-500" />;
        case 'System': return <Info size={20} className="text-gray-500" />;
        default: return <Bell size={20} className="text-gray-500" />;
    }
};

const getBg = (type) => {
    switch(type) {
        case 'Alert': return 'bg-red-100';
        case 'Info': return 'bg-blue-100';
        case 'Broadcast': return 'bg-purple-100';
        default: return 'bg-gray-100';
    }
};

const formatTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} mins ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const NotificationCenter = () => {
    const { api } = useAuth();
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All'); // All, Unread, Alerts
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ title: '', desc: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchNotifications = async () => {
        try {
            const res = await api.get('/notifications');
            setNotifications(res.data);
        } catch (error) {
            console.error('Failed to fetch notifications', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    const handleMarkAsRead = async (id) => {
        try {
            await api.put(`/notifications/${id}/read`);
            setNotifications(notifications.map(n => n._id === id ? { ...n, read: true } : n));
        } catch (error) {
            console.error('Failed to mark as read', error);
        }
    };

    const handleMarkAllAsRead = async () => {
        try {
            await api.put('/notifications/read-all');
            setNotifications(notifications.map(n => ({ ...n, read: true })));
        } catch (error) {
            console.error('Failed to mark all as read', error);
        }
    };

    const handleBroadcastSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await api.post('/notifications/broadcast', formData);
            fetchNotifications();
            setIsModalOpen(false);
            setFormData({ title: '', desc: '' });
        } catch (error) {
            console.error('Failed to create broadcast', error);
            alert('Failed to send broadcast');
        } finally {
            setIsSubmitting(false);
        }
    };

    const filteredNotifications = notifications.filter(n => {
        if (filter === 'Unread') return !n.read;
        if (filter === 'Alerts') return n.type === 'Alert';
        return true;
    });

    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <div className="p-8 max-w-5xl mx-auto space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Notification Center</h2>
                    <p className="text-gray-500 text-sm mt-1">View system alerts, messages, and broadcast announcements.</p>
                </div>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-bold transition-colors flex items-center gap-2 text-sm shadow-md shadow-green-900/10" 
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                    <Plus size={18} /> New Broadcast
                </button>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap gap-4 justify-between items-center">
                <div className="flex gap-2 p-1 bg-gray-50 rounded-lg border border-gray-200">
                    <button 
                        onClick={() => setFilter('All')}
                        className={`px-4 py-1.5 font-bold rounded-md text-sm transition-colors ${filter === 'All' ? 'bg-white text-green-700 shadow-sm' : 'hover:bg-white text-gray-600'}`}
                    >
                        All
                    </button>
                    <button 
                        onClick={() => setFilter('Unread')}
                        className={`px-4 py-1.5 font-medium rounded-md text-sm transition-colors flex items-center gap-1.5 ${filter === 'Unread' ? 'bg-white text-green-700 shadow-sm' : 'hover:bg-white text-gray-600'}`}
                    >
                        Unread 
                        {unreadCount > 0 && <span className="bg-green-500 text-white px-1.5 py-0.5 rounded-full text-[10px]">{unreadCount}</span>}
                    </button>
                    <button 
                        onClick={() => setFilter('Alerts')}
                        className={`px-4 py-1.5 font-medium rounded-md text-sm transition-colors ${filter === 'Alerts' ? 'bg-white text-green-700 shadow-sm' : 'hover:bg-white text-gray-600'}`}
                    >
                        Alerts
                    </button>
                </div>
                {unreadCount > 0 && (
                    <button 
                        onClick={handleMarkAllAsRead}
                        className="text-sm text-gray-500 flex items-center gap-2 font-medium hover:text-green-600 transition-colors"
                    >
                        <MailOpen size={16} /> Mark all as read
                    </button>
                )}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                    </div>
                ) : filteredNotifications.length === 0 ? (
                    <div className="py-20 text-center text-gray-500">
                        <Bell className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                        <p>No notifications found in this view.</p>
                    </div>
                ) : filteredNotifications.map(note => (
                    <div key={note._id} className={`p-6 flex gap-4 transition-colors group ${note.read ? 'bg-white hover:bg-gray-50' : 'bg-green-50/20 hover:bg-green-50/40'}`}>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${getBg(note.type)}`}>
                            {getIcon(note.type)}
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className={`text-base font-bold ${note.read ? 'text-gray-700' : 'text-gray-900'}`}>{note.title}</h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-medium text-gray-400 flex items-center gap-1">
                                        <Clock size={12} /> {formatTime(note.createdAt)}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">{note.desc}</p>
                            
                            {!note.read && (
                                <div className="mt-3">
                                    <button 
                                        onClick={() => handleMarkAsRead(note._id)}
                                        className="text-xs font-bold text-green-600 hover:text-green-800 transition-colors"
                                    >
                                        Mark as Read
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg relative z-10 overflow-hidden flex flex-col">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <h3 className="font-bold text-gray-900 text-lg">Send New Broadcast</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        
                        <div className="p-6">
                            <form onSubmit={handleBroadcastSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Broadcast Title *</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all font-medium"
                                        placeholder="e.g. System Maintenance Tonight"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Message Content *</label>
                                    <textarea 
                                        required
                                        rows="4"
                                        value={formData.desc}
                                        onChange={(e) => setFormData({...formData, desc: e.target.value})}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all font-medium resize-none"
                                        placeholder="Type your message here..."
                                    ></textarea>
                                    <p className="text-xs text-gray-500 mt-1">This will be sent to all staff members immediately.</p>
                                </div>

                                <div className="flex gap-3 mt-8">
                                    <button 
                                        type="button" 
                                        onClick={() => setIsModalOpen(false)}
                                        className="flex-1 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold rounded-xl transition-colors text-sm shadow-sm"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-sm shadow-green-600/20 transition-colors text-sm disabled:opacity-70"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Broadcast'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationCenter;
