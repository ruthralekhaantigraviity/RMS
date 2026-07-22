import { useState, useEffect } from 'react';
import { Bell, User, Menu, Crown, Zap, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const PLAN_STYLES = {
    Starter:      { bg: 'bg-blue-100',   text: 'text-blue-700',   icon: Zap,   label: 'Starter' },
    Professional: { bg: 'bg-purple-100', text: 'text-purple-700', icon: Star,  label: 'Professional' },
    Enterprise:   { bg: 'bg-amber-100',  text: 'text-amber-700',  icon: Crown, label: 'Enterprise' },
};

const getPlanStyle = (planName) => {
    if (!planName) return null;
    // Try exact match first, then case-insensitive
    return PLAN_STYLES[planName] ||
        Object.values(PLAN_STYLES).find(s => s.label.toLowerCase() === planName.toLowerCase()) ||
        { bg: 'bg-gray-100', text: 'text-gray-600', icon: Star, label: planName };
};

const Topbar = () => {
    const { user, api } = useAuth();
    const [hasUnread, setHasUnread] = useState(false);
    const [subscriptionPlan, setSubscriptionPlan] = useState(null);

    // Fetch notifications
    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const res = await api.get('/notifications');
                setHasUnread(res.data.some(n => !n.read));
            } catch (error) {
                console.error('Failed to fetch notifications for topbar', error);
            }
        };
        fetchNotifications();
        const intervalId = setInterval(fetchNotifications, 60000);
        return () => clearInterval(intervalId);
    }, []);

    // Fetch subscription plan for RestaurantAdmin
    useEffect(() => {
        const fetchPlan = async () => {
            if (user?.role === 'RestaurantAdmin' || user?.role === 'Admin') {
                try {
                    const res = await api.get('/restaurants/mine');
                    const plan = res.data?.subscription?.plan;
                    if (plan) setSubscriptionPlan(plan);
                } catch (error) {
                    console.error('Failed to fetch restaurant plan', error);
                }
            }
        };
        fetchPlan();
    }, [user, api]);

    const planStyle = getPlanStyle(subscriptionPlan);
    const PlanIcon = planStyle?.icon;

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
                        user?.role === 'SuperAdmin' ? '/super-admin/notifications' :
                        (user?.role === 'RestaurantAdmin' || user?.role === 'Admin') ? '/admin/notifications' :
                        user?.role === 'BranchManager' ? '/manager/notifications' :
                        '/admin/notifications'
                    }
                    className="relative p-2 text-gray-500 hover:text-green-500 transition-colors"
                >
                    <Bell size={22} />
                    {hasUnread && (
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white"></span>
                    )}
                </Link>

                <div className="flex items-center gap-3 pl-6 border-l border-gray-200 cursor-pointer">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-semibold text-gray-800 capitalize">{user?.name || 'User'}</p>
                        <div className="flex items-center justify-end gap-1.5 mt-0.5">
                            <p className="text-xs text-gray-500 capitalize">{user?.role || 'Staff'}</p>
                            {planStyle && (
                                <>
                                    <span className="text-gray-300">·</span>
                                    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${planStyle.bg} ${planStyle.text}`}>
                                        <PlanIcon size={9} />
                                        {planStyle.label}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold border border-green-200">
                            <User size={20} />
                        </div>
                        {/* Plan icon badge on avatar */}
                        {planStyle && (
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center ${planStyle.bg} border border-white shadow-sm`}>
                                <PlanIcon size={9} className={planStyle.text} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
