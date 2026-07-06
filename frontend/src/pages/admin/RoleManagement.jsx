import { useState, useEffect } from 'react';
import { Search, Plus, Key, Shield, Info } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

// Hardcoded permission matrix for the locked system roles
const rolePermissions = {
    'SuperAdmin': {
        'Dashboard & Analytics': [true, true, true, true],
        'Order Management': [true, true, true, true],
        'Menu & Catalog': [true, true, true, true],
        'Staff Management': [true, true, true, true],
    },
    'RestaurantAdmin': {
        'Dashboard & Analytics': [true, true, true, true],
        'Order Management': [true, true, true, true],
        'Menu & Catalog': [true, true, true, true],
        'Staff Management': [true, true, true, true],
    },
    'BranchManager': {
        'Dashboard & Analytics': [true, false, false, false],
        'Order Management': [true, true, true, true],
        'Menu & Catalog': [true, false, false, false],
        'Staff Management': [true, true, true, false],
    },
    'Chef': {
        'Dashboard & Analytics': [false, false, false, false],
        'Order Management': [true, false, true, false],
        'Menu & Catalog': [true, false, false, false],
        'Staff Management': [false, false, false, false],
    },
    'Waiter': {
        'Dashboard & Analytics': [false, false, false, false],
        'Order Management': [true, true, true, false],
        'Menu & Catalog': [true, false, false, false],
        'Staff Management': [false, false, false, false],
    },
    'Cashier': {
        'Dashboard & Analytics': [true, false, false, false],
        'Order Management': [true, true, true, false],
        'Menu & Catalog': [true, false, false, false],
        'Staff Management': [false, false, false, false],
    }
};

const RoleManagement = () => {
    const { api } = useAuth();
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRoleIndex, setSelectedRoleIndex] = useState(1); // Default to RestaurantAdmin

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const { data } = await api.get('/roles');
                setRoles(data);
            } catch (error) {
                console.error('Failed to fetch roles', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRoles();
    }, []);

    const selectedRole = roles[selectedRoleIndex] || null;
    const permissions = selectedRole ? rolePermissions[selectedRole.enumKey] : null;

    const handleActionClick = () => {
        alert("This action is disabled. Core system roles and their permissions are hardcoded into the backend engine to ensure maximum security and stability for your restaurant's data.");
    };

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Role Management</h2>
                    <p className="text-gray-500 text-sm mt-1">View active roles and their system permissions.</p>
                </div>
                <button 
                    onClick={handleActionClick}
                    className="bg-gray-300 cursor-not-allowed text-gray-500 px-5 py-2.5 rounded-xl font-bold transition-colors flex items-center gap-2 text-sm shadow-sm" 
                    title="Core roles cannot be modified"
                >
                    <Plus size={18} /> Create Role
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Roles List */}
                <div className="lg:col-span-1 space-y-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center mb-2">
                        <Search className="text-gray-400 ml-2 mr-3" size={18} />
                        <input type="text" placeholder="Search roles..." className="w-full bg-transparent text-sm focus:outline-none" />
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50 min-h-[400px]">
                        {loading ? (
                             <div className="flex justify-center p-10">
                                 <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
                             </div>
                        ) : (
                            roles.map((role, idx) => (
                                <div 
                                    key={role.id} 
                                    onClick={() => setSelectedRoleIndex(idx)}
                                    className={`p-4 cursor-pointer transition-colors ${idx === selectedRoleIndex ? 'bg-green-50/50 border-l-4 border-green-500' : 'hover:bg-gray-50 border-l-4 border-transparent'}`}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className={`font-bold text-sm ${idx === selectedRoleIndex ? 'text-green-800' : 'text-gray-900'}`}>{role.name}</h3>
                                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{role.users} Users</span>
                                    </div>
                                    <p className="text-xs text-gray-500 line-clamp-2">{role.desc}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Permissions Matrix for Selected Role */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full min-h-[600px]">
                    {selectedRole && (
                        <>
                            <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-wrap gap-4 justify-between items-center">
                                <div>
                                    <div className="flex items-center gap-2 text-green-700 font-bold mb-1">
                                        <Shield size={18} /> Viewing Permissions
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>{selectedRole.name}</h3>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-orange-100">
                                        <Info size={14} /> Read Only
                                    </span>
                                    <button 
                                        onClick={handleActionClick}
                                        className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg text-sm font-bold shadow-sm cursor-not-allowed transition-colors"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                            
                            <div className="p-6 flex-1 overflow-y-auto">
                                {permissions && Object.entries(permissions).map(([module, permsArray], i) => (
                                    <div key={i} className="mb-6 last:mb-0">
                                        <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">{module}</h4>
                                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
                                            {['View Data', 'Create Records', 'Edit Records', 'Delete Records'].map((permName, j) => {
                                                const isChecked = permsArray[j];
                                                
                                                return (
                                                    <label key={j} className="flex items-center justify-between p-3 cursor-not-allowed">
                                                        <span className={`text-sm font-medium ${isChecked ? 'text-gray-900' : 'text-gray-400'}`}>{permName}</span>
                                                        <div className="relative flex items-center">
                                                            <input type="checkbox" className="sr-only peer" checked={isChecked} readOnly disabled />
                                                            <div className="w-10 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 peer-checked:bg-green-500 opacity-80"></div>
                                                        </div>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RoleManagement;
