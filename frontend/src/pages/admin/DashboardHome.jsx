import { useState, useEffect } from 'react';
import { TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react';
import StatCard from '../../components/StatCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useAuth } from '../../context/AuthContext';

const DashboardHome = () => {
    const { api } = useAuth();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const res = await api.get('/analytics/dashboard');
                setData(res.data);
            } catch (err) {
                console.error('Failed to fetch dashboard analytics', err);
            } finally {
                setLoading(false);
            }
        };
        fetchAnalytics();
    }, [api]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-500"></div>
            </div>
        );
    }

    const overview = data?.overview || {
        totalRevenue: 0,
        revenueChange: 0,
        totalOrders: 0,
        ordersChange: 0,
        activeCustomers: 0,
        customersChange: 0,
        avgOrderValue: 0,
        avgChange: 0
    };

    // Prepare weekly trend data: if empty, show zero values
    const chartData = data?.revenueTrend && data.revenueTrend.length > 0 
        ? data.revenueTrend.map(item => ({
            name: new Date(item._id).toLocaleDateString('en-US', { weekday: 'short' }),
            revenue: item.revenue || 0,
            orders: item.orders || 0
        }))
        : [
            { name: 'Mon', revenue: 0, orders: 0 },
            { name: 'Tue', revenue: 0, orders: 0 },
            { name: 'Wed', revenue: 0, orders: 0 },
            { name: 'Thu', revenue: 0, orders: 0 },
            { name: 'Fri', revenue: 0, orders: 0 },
            { name: 'Sat', revenue: 0, orders: 0 },
            { name: 'Sun', revenue: 0, orders: 0 }
        ];

    // Popular items for BarChart: if empty, display placeholders
    const popularItems = data?.popularItems && data.popularItems.length > 0
        ? data.popularItems.map(item => ({
            name: item.name || 'Unknown',
            sales: item.totalSold || 0
        }))
        : [];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Dashboard Overview</h2>
                <p className="text-gray-500 text-sm mt-1">Welcome back, here's what's happening today.</p>
            </div>

            {/* KPI Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Revenue"
                    value={<span style={{ fontFamily: 'Manrope, sans-serif' }}>₹{overview.totalRevenue.toLocaleString('en-IN')}</span>}
                    icon={DollarSign}
                    trend={overview.revenueChange}
                    trendUp={overview.revenueChange >= 0}
                    colorClass="bg-gradient-to-br from-green-400 to-green-600"
                />
                <StatCard
                    title="Total Orders"
                    value={<span style={{ fontFamily: 'Manrope, sans-serif' }}>{overview.totalOrders}</span>}
                    icon={ShoppingBag}
                    trend={overview.ordersChange}
                    trendUp={overview.ordersChange >= 0}
                    colorClass="bg-gradient-to-br from-orange-400 to-orange-600"
                />
                <StatCard
                    title="Active Customers"
                    value={<span style={{ fontFamily: 'Manrope, sans-serif' }}>{overview.activeCustomers}</span>}
                    icon={Users}
                    trend={overview.customersChange}
                    trendUp={overview.customersChange >= 0}
                    colorClass="bg-gradient-to-br from-blue-400 to-blue-600"
                />
                <StatCard
                    title="Avg Order Value"
                    value={<span style={{ fontFamily: 'Manrope, sans-serif' }}>₹{overview.avgOrderValue.toFixed(2)}</span>}
                    icon={TrendingUp}
                    trend={overview.avgChange}
                    trendUp={overview.avgChange >= 0}
                    colorClass="bg-gradient-to-br from-green-500 to-emerald-600"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Area Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Weekly Revenue</h3>
                    <div className="h-72">
                        {overview.totalOrders === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-gray-400">
                                <DollarSign size={40} className="mb-2 text-gray-300" />
                                <p className="text-sm font-semibold">No order data available yet</p>
                                <p className="text-xs text-gray-400">Total revenue will show here once orders are placed.</p>
                            </div>
                        ) : (
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#16A34A" stopOpacity={0.25} />
                                            <stop offset="95%" stopColor="#16A34A" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v}`} />
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', fontFamily: 'Inter, sans-serif' }}
                                        formatter={(val) => [`₹${val}`, 'Revenue']}
                                    />
                                    <Area type="monotone" dataKey="revenue" stroke="#16A34A" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" dot={false} activeDot={{ r: 5, fill: '#16A34A' }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>

                {/* Top Dishes Bar Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Top Dishes</h3>
                    <div className="h-72">
                        {popularItems.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-gray-400">
                                <ShoppingBag size={40} className="mb-2 text-gray-300" />
                                <p className="text-sm font-semibold">No sales data available</p>
                                <p className="text-xs text-gray-400">Popular dishes will be ranked here by sales.</p>
                            </div>
                        ) : (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={popularItems} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
                                    <XAxis type="number" hide />
                                    <YAxis type="category" dataKey="name" width={80} stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', fontFamily: 'Inter, sans-serif' }}
                                        formatter={(val) => [val, 'Sold']}
                                    />
                                    <Bar dataKey="sales" fill="#F97316" radius={[0, 8, 8, 0]} barSize={18} />
                                </BarChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
