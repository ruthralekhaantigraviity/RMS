import { Search, Filter, Download, Activity, User, Key, ShoppingBag, Settings, Trash2, Edit2, LogIn } from 'lucide-react';

const mockLogs = [
    { id: 1, action: 'User Login', module: 'Auth', user: 'Admin User', role: 'Admin', time: '10:45 AM', date: 'Oct 24, 2026', ip: '192.168.1.1', desc: 'Successful login', type: 'info' },
    { id: 2, action: 'Deleted Menu Item', module: 'Catalog', user: 'Marcus Wong', role: 'Head Chef', time: '10:12 AM', date: 'Oct 24, 2026', ip: '192.168.1.5', desc: 'Deleted "Spicy Tacos" (ID: 104)', type: 'danger' },
    { id: 3, action: 'Updated Tax Rule', module: 'Settings', user: 'Admin User', role: 'Admin', time: '09:30 AM', date: 'Oct 24, 2026', ip: '192.168.1.1', desc: 'Changed GST rate from 4.5% to 5.0%', type: 'warning' },
    { id: 4, action: 'Processed Refund', module: 'Finance', user: 'Sarah Jenkins', role: 'Manager', time: '08:15 AM', date: 'Oct 24, 2026', ip: '192.168.1.2', desc: 'Refunded ₹120.00 for Order #ORD-081', type: 'warning' },
    { id: 5, action: 'Created New Order', module: 'Orders', user: 'David Smith', role: 'Cashier', time: '08:05 AM', date: 'Oct 24, 2026', ip: '192.168.1.4', desc: 'Created Dine-in Order #ORD-092 for Table T-04', type: 'info' },
    { id: 6, action: 'Added Employee', module: 'Staff', user: 'Admin User', role: 'Admin', time: 'Yesterday', date: 'Oct 23, 2026', ip: '192.168.1.1', desc: 'Created profile for Jessica Lee (Line Cook)', type: 'success' },
];

const getLogIcon = (module) => {
    switch (module) {
        case 'Auth': return <LogIn size={16} />;
        case 'Catalog': return <Trash2 size={16} />;
        case 'Settings': return <Settings size={16} />;
        case 'Finance': return <Edit2 size={16} />;
        case 'Orders': return <ShoppingBag size={16} />;
        case 'Staff': return <User size={16} />;
        default: return <Activity size={16} />;
    }
};

const getLogColor = (type) => {
    switch(type) {
        case 'info': return 'bg-blue-100 text-blue-600';
        case 'danger': return 'bg-red-100 text-red-600';
        case 'warning': return 'bg-orange-100 text-orange-600';
        case 'success': return 'bg-green-100 text-green-600';
        default: return 'bg-gray-100 text-gray-600';
    }
};
import { useState } from 'react';

const ActivityLogs = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredLogs = mockLogs.filter(log => 
        log.user.toLowerCase().includes(searchQuery.toLowerCase()) || 
        log.action.toLowerCase().includes(searchQuery.toLowerCase()) || 
        log.module.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Activity Audit Logs</h2>
                    <p className="text-gray-500 text-sm mt-1">Audit trail of all actions performed by users in the system.</p>
                </div>
                <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-xl font-medium transition-colors text-sm shadow-sm flex items-center gap-2">
                    <Download size={16} /> Export Logs
                </button>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap gap-4 justify-between items-center">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Search by user, action, or module..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all" />
                </div>
                <div className="flex gap-2">
                    <select className="bg-gray-50 border border-gray-200 text-gray-600 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-green-500">
                        <option>All Modules</option>
                        <option>Auth</option>
                        <option>Orders</option>
                        <option>Settings</option>
                        <option>Catalog</option>
                        <option>Finance</option>
                    </select>
                    <select className="bg-gray-50 border border-gray-200 text-gray-600 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-green-500">
                        <option>All Dates</option>
                        <option>Today</option>
                        <option>Yesterday</option>
                        <option>Last 7 Days</option>
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Action / Module</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">User</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Time</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">IP Address</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredLogs.map((log) => (
                                <tr key={log.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg ${getLogColor(log.type)}`}>
                                                {getLogIcon(log.module)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-sm">{log.action}</p>
                                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">{log.module}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900 text-sm">{log.user}</p>
                                        <p className="text-xs text-gray-500">{log.role}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 truncate max-w-[300px]">
                                        {log.desc}
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-medium text-gray-900">{log.time}</p>
                                        <p className="text-xs text-gray-500">{log.date}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                                        {log.ip}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ActivityLogs;
