import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
    LayoutDashboard, Store, Users, CreditCard, 
    Settings, Bell, LogOut 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SuperAdminLayout = () => {
    const { logout } = useAuth();
    const location = useLocation();

    const navigation = [
        { name: 'Overview', href: '/super-admin', icon: LayoutDashboard },
        { name: 'Restaurants', href: '/super-admin/restaurants', icon: Store },
        { name: 'Plans', href: '/super-admin/plans', icon: CreditCard },
        { name: 'Support Tickets', href: '/super-admin/tickets', icon: Users },
        { name: 'Global Reports', href: '/super-admin/reports', icon: Settings },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-slate-900 text-white flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-slate-800">
                    <h1 className="text-xl font-bold font-sans tracking-tight">RestaurantHub<span className="text-blue-500">SaaS</span></h1>
                </div>
                
                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Super Admin</p>
                    {navigation.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all ${
                                    isActive 
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                <Icon size={18} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
                
                <div className="p-4 border-t border-slate-800">
                    <button onClick={logout} className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl font-medium text-slate-300 hover:bg-red-500/10 hover:text-red-400 transition-all">
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
                    <h2 className="text-lg font-bold text-gray-900 font-sans capitalize">
                        {location.pathname.split('/').pop().replace('-', ' ') || 'Overview'}
                    </h2>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all">
                            <Bell size={20} />
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                            <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                                SA
                            </div>
                        </div>
                    </div>
                </header>
                
                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default SuperAdminLayout;
