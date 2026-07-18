import { TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCard from '../../components/StatCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const revenueData = [
    { name: 'Mon', revenue: 4000, orders: 240 },
    { name: 'Tue', revenue: 3000, orders: 139 },
    { name: 'Wed', revenue: 5200, orders: 380 },
    { name: 'Thu', revenue: 2780, orders: 290 },
    { name: 'Fri', revenue: 6890, orders: 480 },
    { name: 'Sat', revenue: 7390, orders: 530 },
    { name: 'Sun', revenue: 5490, orders: 430 },
];

const topDishes = [
    { name: 'Paneer Tikka', sales: 120 },
    { name: 'Avocado Bowl', sales: 98 },
    { name: 'Green Wrap', sales: 87 },
    { name: 'Lemon Tart', sales: 76 },
    { name: 'Mint Cooler', sales: 65 },
];



const DashboardHome = () => {
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
                    value={<span style={{ fontFamily: 'Manrope, sans-serif' }}>₹45,231</span>}
                    icon={DollarSign}
                    trend={12.5}
                    trendUp={true}
                    colorClass="bg-gradient-to-br from-green-400 to-green-600"
                />
                <StatCard
                    title="Total Orders"
                    value={<span style={{ fontFamily: 'Manrope, sans-serif' }}>1,245</span>}
                    icon={ShoppingBag}
                    trend={-2.4}
                    trendUp={false}
                    colorClass="bg-gradient-to-br from-orange-400 to-orange-600"
                />
                <StatCard
                    title="Active Customers"
                    value={<span style={{ fontFamily: 'Manrope, sans-serif' }}>892</span>}
                    icon={Users}
                    trend={5.2}
                    trendUp={true}
                    colorClass="bg-gradient-to-br from-blue-400 to-blue-600"
                />
                <StatCard
                    title="Growth"
                    value={<span style={{ fontFamily: 'Manrope, sans-serif' }}>+24%</span>}
                    icon={TrendingUp}
                    trend={8.1}
                    trendUp={true}
                    colorClass="bg-gradient-to-br from-green-500 to-emerald-600"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Area Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Weekly Revenue</h3>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
                    </div>
                </div>

                {/* Top Dishes Bar Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Top Dishes</h3>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={topDishes} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
                                <XAxis type="number" hide />
                                <YAxis type="category" dataKey="name" width={80} stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', fontFamily: 'Inter, sans-serif' }}
                                    formatter={(val) => [val, 'Sold']}
                                />
                                <Bar dataKey="sales" fill="#F97316" radius={[0, 8, 8, 0]} barSize={18} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DashboardHome;
