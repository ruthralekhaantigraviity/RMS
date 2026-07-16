import { Bell, Search, User, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Topbar = () => {
    const { user } = useAuth();
    
    return (
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 md:px-8 sticky top-0 z-10">
            <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto flex-1">
                <button 
                    onClick={() => window.dispatchEvent(new Event('toggle-sidebar'))} 
                    className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
                >
                    <Menu size={24} />
                </button>
            </div>
            

            <div className="flex items-center gap-2 md:gap-6 ml-2 md:ml-0 shrink-0">
                <Link 
                    to={
                        user?.role?.toLowerCase().includes('admin') ? '/admin/notifications' :
                        user?.role?.toLowerCase().includes('manager') ? '/manager/notifications' :
                        user?.role?.toLowerCase().includes('superadmin') ? '/super-admin/notifications' :
                        '/admin/notifications'
                    } 
                    className="relative p-2 text-gray-500 hover:text-green-500 transition-colors"
                >
                    <Bell size={22} />
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white"></span>
                </Link>
                
                <div className="flex items-center gap-3 pl-6 border-l border-gray-200 cursor-pointer">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-semibold text-gray-800 capitalize">{user?.name || 'User'}</p>
                        <p className="text-xs text-gray-500 capitalize">{user?.role || 'Staff'}</p>
                    </div>
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold border border-green-200">
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
