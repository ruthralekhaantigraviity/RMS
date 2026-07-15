import { useState, useEffect } from 'react';
import { Search, Plus, Filter, Mail, Phone, Calendar, Clock, MoreVertical, ShieldCheck, MapPin, X, Trash2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const getStatusColor = (status) => {
    switch(status) {
        case 'Active': return 'bg-green-50 text-green-700 border-green-200';
        case 'On Leave': return 'bg-orange-50 text-orange-700 border-orange-200';
        case 'Terminated': return 'bg-red-50 text-red-700 border-red-200';
        default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
};

const StaffManagement = () => {
    const { api } = useAuth();
    const [staffList, setStaffList] = useState([]);
    const [branches, setBranches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        role: 'Waiter',
        branchId: ''
    });

    const fetchData = async () => {
        try {
            const [staffRes, branchesRes] = await Promise.all([
                api.get('/staff'),
                api.get('/branches')
            ]);
            setStaffList(staffRes.data);
            setBranches(branchesRes.data);
            if (branchesRes.data.length > 0 && !formData.branchId) {
                setFormData(prev => ({ ...prev, branchId: branchesRes.data[0]._id }));
            }
        } catch (error) {
            console.error('Failed to fetch data', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/staff', formData);
            fetchData();
            setIsModalOpen(false);
            setFormData({ name: '', email: '', phone: '', password: '', role: 'Waiter', branchId: branches[0]?._id || '' });
        } catch (error) {
            console.error('Failed to add employee', error);
            alert(error.response?.data?.message || 'Error creating employee');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to completely remove this employee?')) {
            try {
                await api.delete(`/staff/${id}`);
                fetchData();
            } catch (error) {
                console.error('Failed to delete staff', error);
                alert('Failed to delete staff');
            }
        }
    };

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-6 relative">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Staff Directory</h2>
                    <p className="text-gray-500 text-sm mt-1">Manage employee records, roles, and shift assignments.</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-xl font-medium transition-colors text-sm shadow-sm flex items-center gap-2">
                        <Calendar size={16} /> Manage Shifts
                    </button>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-bold transition-colors flex items-center gap-2 text-sm shadow-md shadow-green-900/10" 
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                        <Plus size={18} /> Add Employee
                    </button>
                </div>
            </div>

            {/* Controls */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap gap-4 justify-between items-center">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Search by name, email, or role..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all" />
                </div>
                <div className="flex gap-2 items-center">
                    <select className="bg-gray-50 border border-gray-200 text-gray-600 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-green-500">
                        <option>All Roles</option>
                        <option>BranchManager</option>
                        <option>Chef</option>
                        <option>Waiter</option>
                        <option>Cashier</option>
                    </select>
                    <select className="bg-gray-50 border border-gray-200 text-gray-600 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-green-500">
                        <option>All Branches</option>
                        {branches.map(b => (
                            <option key={b._id} value={b._id}>{b.name}</option>
                        ))}
                    </select>
                    <button className="p-2 border border-gray-200 text-gray-500 rounded-lg hover:bg-gray-50 transition-colors">
                        <Filter size={18} />
                    </button>
                </div>
            </div>

            {/* Grid View */}
            {loading ? (
                <div className="flex justify-center p-20">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                </div>
            ) : staffList.length === 0 ? (
                <div className="text-center p-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-gray-500">No staff members found. Hire your first employee!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {staffList.map((staff) => (
                        <div key={staff._id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden group">
                            
                            {/* Card Header Profile */}
                            <div className="p-5 border-b border-gray-50 relative">
                                <button 
                                    onClick={() => handleDelete(staff._id)}
                                    className="absolute top-4 right-4 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                    title="Remove Staff"
                                >
                                    <Trash2 size={18} />
                                </button>
                                
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-200 border-4 border-white shadow-sm flex items-center justify-center text-green-700 font-bold text-2xl mb-3 relative">
                                        {staff.name.charAt(0).toUpperCase()}
                                        <span className={`absolute bottom-0 right-1 w-4 h-4 rounded-full border-2 border-white bg-green-500`}></span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>{staff.name}</h3>
                                    <p className="text-sm font-medium text-green-600 mt-0.5">{staff.role.replace(/([A-Z])/g, ' $1').trim()}</p>
                                    <p className="text-xs text-gray-400 mt-1">EMP-{staff._id.substring(staff._id.length - 4).toUpperCase()}</p>
                                </div>
                            </div>

                            {/* Card Body Details */}
                            <div className="p-5 space-y-3 bg-gray-50/30">
                                <div className="flex items-start gap-3 text-sm">
                                    <MapPin size={16} className="text-gray-400 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-gray-800 font-medium">{staff.branchId?.name || 'No Branch Assigned'}</p>
                                        <p className="text-xs text-gray-500">Primary Location</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Phone size={16} className="text-gray-400 shrink-0" />
                                    <span>{staff.phone || 'N/A'}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Mail size={16} className="text-gray-400 shrink-0" />
                                    <span className="truncate" title={staff.email}>{staff.email}</span>
                                </div>
                            </div>
                            
                            {/* Card Footer Actions */}
                            <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
                                <button className="flex-1 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-bold rounded-lg transition-colors">
                                    Profile
                                </button>
                                <button className="flex-1 py-2 bg-green-50 hover:bg-green-100 text-green-700 text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5">
                                    <ShieldCheck size={16} /> Perms
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add Employee Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <h3 className="font-bold text-gray-900 text-lg">Add New Employee</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                                    placeholder="e.g. Elena Rodriguez"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address (Used for Login)</label>
                                <input 
                                    type="email" 
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                                    placeholder="elena@restosys.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Initial Password</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                                    placeholder="TempPass123!"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input 
                                    type="text" 
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                                    placeholder="+1 234 567 8900"
                                />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                    <select 
                                        value={formData.role}
                                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                                    >
                                        <option value="Waiter">Waiter</option>
                                        <option value="Chef">Chef</option>
                                        <option value="Cashier">Cashier</option>
                                        <option value="BranchManager">Branch Manager</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Assigned Branch</label>
                                    <select 
                                        value={formData.branchId}
                                        onChange={(e) => setFormData({...formData, branchId: e.target.value})}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                                    >
                                        {branches.length === 0 && <option value="">No Branches</option>}
                                        {branches.map(b => (
                                            <option key={b._id} value={b._id}>{b.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            
                            <div className="pt-4 flex gap-3">
                                <button 
                                    type="button" 
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors text-sm"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className="flex-1 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-sm shadow-green-600/20 transition-colors text-sm"
                                >
                                    Hire Employee
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StaffManagement;
