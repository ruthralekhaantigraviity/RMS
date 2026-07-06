import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Store, Users, CreditCard, ShoppingBag, TrendingUp, AlertCircle } from 'lucide-react';

const SuperAdminDashboard = () => {
    const { api } = useAuth();
    const [stats, setStats] = useState({
        totalRestaurants: 0,
        activeRestaurants: 0,
        frozenRestaurants: 0,
        totalUsers: 0,
        totalOrders: 0
    });
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [statsRes, restsRes] = await Promise.all([
                    api.get('/super-admin/stats'),
                    api.get('/super-admin/restaurants')
                ]);
                setStats(statsRes.data);
                setRestaurants(restsRes.data);
            } catch (error) {
                console.error("Failed to fetch super admin data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDashboardData();
    }, [api]);

    const handleFreezeAccount = async (id, currentStatus) => {
        const newStatus = currentStatus === 'Active' ? 'Frozen' : 'Active';
        try {
            await api.put(`/super-admin/restaurants/${id}/subscription`, { status: newStatus });
            setRestaurants(restaurants.map(r => 
                r._id === id ? { ...r, subscription: { ...r.subscription, status: newStatus } } : r
            ));
        } catch (error) {
            alert('Failed to update subscription');
        }
    };

    if (loading) return <div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Total SaaS Revenue (MRR)', value: '$12,450', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
                    { label: 'Active Restaurants', value: stats.activeRestaurants, icon: Store, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Frozen Accounts', value: stats.frozenRestaurants, icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
                    { label: 'Total Platform Users', value: stats.totalUsers, icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
                ].map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-5 transition-all hover:-translate-y-1 hover:shadow-md">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} shrink-0`}>
                                <Icon size={28} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
                                <h3 className="text-2xl font-black text-gray-900">{stat.value}</h3>
                            </div>
                        </div>
                    );
                })}
        </div>
        </div>
    );
};

export default SuperAdminDashboard;
