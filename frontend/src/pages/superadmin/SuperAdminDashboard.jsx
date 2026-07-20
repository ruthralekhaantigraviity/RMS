import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Store, Users, CreditCard, ShoppingBag, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

    const upcomingExpirations = restaurants.filter(r => {
        if (!r.subscription?.expiryDate) return false;
        const diffTime = new Date(r.subscription.expiryDate) - new Date();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 7 && r.subscription.status === 'Active';
    });

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Expiry Alerts */}
            {upcomingExpirations.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-3xl p-6 space-y-4">
                    <div className="flex items-center gap-3 text-red-700">
                        <AlertCircle size={24} className="shrink-0 animate-bounce" />
                        <div>
                            <h3 className="text-lg font-bold">Subscription Renewal Alerts</h3>
                            <p className="text-sm text-red-600">The following restaurants have subscriptions expiring soon or expired.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {upcomingExpirations.map(r => {
                            const diffTime = new Date(r.subscription.expiryDate) - new Date();
                            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                            return (
                                <div key={r._id} className="flex justify-between items-center bg-white border border-red-100/50 p-4 rounded-2xl shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-700 font-bold text-lg shrink-0">
                                            {r.name.charAt(0)}
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900 block">{r.name}</span>
                                            <span className="text-xs text-gray-500 font-medium">Plan: {r.subscription.plan}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className={`text-xs px-2.5 py-1 rounded-full font-bold inline-block ${
                                            diffDays < 0 
                                            ? 'bg-red-100 text-red-700 border border-red-200' 
                                            : 'bg-orange-100 text-orange-700 border border-orange-200'
                                        }`}>
                                            {diffDays < 0 
                                                ? `Expired ${Math.abs(diffDays)}d ago` 
                                                : diffDays === 0 
                                                    ? 'Expires today!' 
                                                    : `Expires in ${diffDays}d`
                                            }
                                        </span>
                                        <span className="text-[10px] text-gray-400 block mt-1">End: {new Date(r.subscription.expiryDate).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Total SaaS Revenue (MRR)', value: '₹12,450', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
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

            {/* Recent Onboarded Restaurants Table */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 font-sans tracking-tight">Recent Onboarded Restaurants</h2>
                        <p className="text-sm text-gray-500 mt-1">Restaurants that have recently joined the platform.</p>
                    </div>
                    <Link to="/super-admin/restaurants" className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl">
                        View All <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wider">
                                <th className="p-5 font-bold">Restaurant</th>
                                <th className="p-5 font-bold">Plan</th>
                                <th className="p-5 font-bold">Status</th>
                                <th className="p-5 font-bold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {restaurants.slice(0, 5).map(restaurant => (
                                <tr key={restaurant._id} className="hover:bg-gray-50/80 transition-colors">
                                    <td className="p-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                                                {restaurant.logo ? (
                                                    <img src={restaurant.logo} alt={restaurant.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold text-lg">
                                                        {restaurant.name.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <span className="font-bold text-gray-900 block text-base">{restaurant.name}</span>
                                                <span className="text-sm text-gray-500">{restaurant.ownerId?.email || 'No Owner'}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <span className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs font-bold rounded-lg border border-purple-100">
                                            {restaurant.subscription?.plan || 'N/A'}
                                        </span>
                                    </td>
                                    <td className="p-5">
                                        <span className={`px-3 py-1.5 text-xs font-bold rounded-lg border ${
                                            restaurant.subscription?.status === 'Active' 
                                            ? 'bg-green-50 text-green-700 border-green-100' 
                                            : 'bg-red-50 text-red-700 border-red-100'
                                        }`}>
                                            {restaurant.subscription?.status || 'Unknown'}
                                        </span>
                                    </td>
                                    <td className="p-5 text-right">
                                        <button 
                                            onClick={() => handleFreezeAccount(restaurant._id, restaurant.subscription?.status)}
                                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                                                restaurant.subscription?.status === 'Active' 
                                                ? 'text-red-600 bg-red-50 hover:bg-red-100'
                                                : 'text-green-600 bg-green-50 hover:bg-green-100'
                                            }`}
                                        >
                                            {restaurant.subscription?.status === 'Active' ? 'Freeze' : 'Unfreeze'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {restaurants.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="p-10 text-center">
                                        <Store className="mx-auto text-gray-300 mb-3" size={40} />
                                        <p className="text-gray-500 font-medium text-lg">No restaurants registered yet.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SuperAdminDashboard;
