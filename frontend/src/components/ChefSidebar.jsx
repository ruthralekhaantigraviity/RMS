import { NavLink } from 'react-router-dom';
import { 
    MonitorDot, ClipboardList, BookOpen, AlertTriangle, LogOut, ChefHat
} from 'lucide-react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ChefSidebar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navGroups = [
        {
            title: 'Kitchen Ops',
            items: [
                { name: 'Active KDS', path: '/chef', icon: MonitorDot },
            ]
        },
        {
            title: 'Resources',
            items: [
                { name: 'Wastage & Restock', path: '/chef/inventory', icon: AlertTriangle },
            ]
        }
    ];

    return (
        <aside className="w-64 bg-[#1e2330] shadow-xl h-screen sticky top-0 flex flex-col transition-all duration-300 z-20 overflow-hidden border-r border-[#2a3040]">
            {/* Header */}
            <div className="p-6 border-b border-[#2a3040] flex items-center gap-3 shrink-0">
                <div className="bg-orange-500 text-white p-2 rounded-lg">
                    <ChefHat size={24} />
                </div>
                <div>
                    <h1 className="text-xl font-bold text-white leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        RestoSys
                    </h1>
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">Kitchen</span>
                </div>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 overflow-y-auto custom-scrollbar">
                {navGroups.map((group, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="px-3 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {group.title}
                        </h3>
                        <div className="space-y-1">
                            {group.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        end={item.path === '/chef'}
                                        className={({ isActive }) => clsx(
                                            "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group text-sm",
                                            isActive 
                                            ? "bg-orange-500/10 text-orange-400 font-bold" 
                                            : "text-gray-400 hover:bg-[#2a3040] hover:text-white font-medium"
                                        )}
                                    >
                                        <Icon size={18} className={clsx("transition-transform group-hover:scale-110", "shrink-0")} />
                                        <span>{item.name}</span>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Footer Logout */}
            <div className="p-4 border-t border-[#2a3040] shrink-0 bg-[#1a1e2a]">
                <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-2.5 w-full rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors text-sm font-bold">
                    <LogOut size={18} />
                    <span>Exit Kitchen</span>
                </button>
            </div>
        </aside>
    );
};

export default ChefSidebar;
