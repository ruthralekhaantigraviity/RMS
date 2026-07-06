import { NavLink } from 'react-router-dom';
import { Calculator, ReceiptText, LayoutGrid, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import clsx from 'clsx';

const CashierSidebar = () => {
    const { logout } = useAuth();

    const menuGroups = [
        {
            title: 'POINT OF SALE',
            items: [
                { name: 'POS Billing', icon: Calculator, path: '/cashier/billing' },
                { name: 'Payment History', icon: ReceiptText, path: '/cashier/history' },
            ]
        },
        {
            title: 'DASHBOARDS',
            items: [
                { name: 'Restaurant Overview', icon: LayoutGrid, path: '/cashier' },
            ]
        }
    ];

    return (
        <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-20">
            {/* Logo area */}
            <div className="h-20 flex items-center px-6 border-b border-gray-50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-600/20">
                        <Calculator className="text-white" size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            RestoSys
                        </h1>
                        <p className="text-[10px] font-bold text-purple-600 uppercase tracking-widest">Billing</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 custom-scrollbar">
                {menuGroups.map((group) => (
                    <div key={group.title}>
                        <h2 className="text-xs font-bold text-gray-400 mb-3 px-3 uppercase tracking-wider">
                            {group.title}
                        </h2>
                        <ul className="space-y-1">
                            {group.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.name}>
                                        <NavLink
                                            to={item.path}
                                            end={item.path === '/cashier' || item.path === '/'}
                                            className={({ isActive }) => clsx(
                                                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group text-sm",
                                                isActive 
                                                ? "bg-purple-50 text-purple-700 font-bold" 
                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium"
                                            )}
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    <Icon size={18} className={clsx("transition-transform group-hover:scale-110", "shrink-0", isActive ? "text-purple-600" : "text-gray-400")} />
                                                    <span>{item.name}</span>
                                                </>
                                            )}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Logout section */}
            <div className="p-4 border-t border-gray-50">
                <button 
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors group"
                >
                    <LogOut size={18} className="text-gray-400 group-hover:text-red-500 transition-colors" />
                    <span>Close Register</span>
                </button>
            </div>
        </aside>
    );
};

export default CashierSidebar;
