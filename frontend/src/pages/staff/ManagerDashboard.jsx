import { Store, Users, ShoppingBag, Clock, AlertTriangle, CheckCircle2, MoreVertical, LogOut, Bell, TrendingUp, Calendar, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ManagerDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className="w-full max-w-[1600px] mx-auto space-y-6">
                
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-110 transition-transform"></div>
                        <div className="relative">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Store size={24}/></div>
                                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1"><TrendingUp size={14}/> +12%</span>
                            </div>
                            <p className="text-gray-500 text-sm font-medium mb-1">Today's Revenue</p>
                            <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>$4,250.00</h2>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-50 rounded-full group-hover:scale-110 transition-transform"></div>
                        <div className="relative">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-green-100 text-green-600 rounded-xl"><ShoppingBag size={24}/></div>
                                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md">12 pending</span>
                            </div>
                            <p className="text-gray-500 text-sm font-medium mb-1">Active Orders</p>
                            <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>48</h2>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-50 rounded-full group-hover:scale-110 transition-transform"></div>
                        <div className="relative">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-purple-100 text-purple-600 rounded-xl"><Calendar size={24}/></div>
                                <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">Next: 19:00</span>
                            </div>
                            <p className="text-gray-500 text-sm font-medium mb-1">Reservations (Today)</p>
                            <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>24</h2>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-50 rounded-full group-hover:scale-110 transition-transform"></div>
                        <div className="relative">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-orange-100 text-orange-600 rounded-xl"><Users size={24}/></div>
                                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-md">3 on break</span>
                            </div>
                            <p className="text-gray-500 text-sm font-medium mb-1">Staff on Shift</p>
                            <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>12</h2>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column (Orders & Stock) */}
                    <div className="lg:col-span-2 space-y-6">
                        
                        {/* Live Orders Mini Kanban */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Live Orders Attention</h3>
                                <button className="text-sm font-bold text-green-600 hover:text-green-700 flex items-center gap-1 transition-colors">
                                    View All <ChevronRight size={16} />
                                </button>
                            </div>
                            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Order Card 1 */}
                                <div className="border border-orange-200 bg-orange-50/30 p-4 rounded-xl">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-bold text-gray-900">#ORD-092</span>
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-700 border border-orange-200">Preparing</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">Dine-in • Table T-04 • 3 items</p>
                                    <div className="flex justify-between items-center pt-3 border-t border-orange-200/50">
                                        <span className="text-xs text-orange-600 font-bold flex items-center gap-1"><Clock size={12}/> 15 mins ago</span>
                                        <button className="text-xs bg-orange-500 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-orange-600 transition-colors">Mark Ready</button>
                                    </div>
                                </div>
                                {/* Order Card 2 */}
                                <div className="border border-purple-200 bg-purple-50/30 p-4 rounded-xl">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-bold text-gray-900">#ORD-096</span>
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-700 border border-purple-200">Delivery</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">456 Elm St • 4 items</p>
                                    <div className="flex justify-between items-center pt-3 border-t border-purple-200/50">
                                        <span className="text-xs text-purple-600 font-bold flex items-center gap-1"><Clock size={12}/> Waiting for Rider</span>
                                        <button className="text-xs bg-purple-600 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-purple-700 transition-colors">Dispatch</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Low Stock Warnings */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    <AlertTriangle size={20} className="text-red-500" /> Stock Alerts
                                </h3>
                                <span className="bg-red-100 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full">3 Items</span>
                            </div>
                            <div className="divide-y divide-gray-50">
                                <div className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">Avocado (Haas)</p>
                                        <p className="text-xs text-gray-500">Produce Category</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-red-600 font-bold text-sm">5 lbs left</p>
                                        <p className="text-xs text-gray-400">Min: 20 lbs</p>
                                    </div>
                                    <button className="text-sm font-bold text-green-600 hover:text-green-700 px-3 py-1.5 bg-green-50 rounded-lg transition-colors">Order</button>
                                </div>
                                <div className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">Premium Ground Beef</p>
                                        <p className="text-xs text-gray-500">Meat Category</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-orange-600 font-bold text-sm">45 lbs left</p>
                                        <p className="text-xs text-gray-400">Min: 50 lbs</p>
                                    </div>
                                    <button className="text-sm font-bold text-green-600 hover:text-green-700 px-3 py-1.5 bg-green-50 rounded-lg transition-colors">Order</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column (Staff & Daily Goal) */}
                    <div className="space-y-6">
                        
                        {/* Daily Goal Progress */}
                        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-md">
                            <h3 className="font-bold text-green-50 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Daily Revenue Goal</h3>
                            <p className="text-3xl font-extrabold mb-6 mt-2" style={{ fontFamily: 'Manrope, sans-serif' }}>$4,250 <span className="text-lg text-green-200 font-medium">/ $5,000</span></p>
                            
                            <div className="w-full bg-green-700/50 rounded-full h-3 mb-2">
                                <div className="bg-white rounded-full h-3 w-[85%] relative">
                                    <div className="absolute right-0 -top-2 w-7 h-7 bg-white rounded-full border-4 border-green-500 shadow-md"></div>
                                </div>
                            </div>
                            <div className="flex justify-between text-sm font-bold text-green-100">
                                <span>85% Completed</span>
                                <span>$750 to go</span>
                            </div>
                        </div>

                        {/* Staff on Shift */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Current Shift (Evening)</h3>
                                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={18}/></button>
                            </div>
                            <div className="p-4 space-y-4">
                                {[
                                    { name: 'Marcus Wong', role: 'Head Chef', status: 'Working' },
                                    { name: 'Elena Rodriguez', role: 'Senior Waiter', status: 'Working' },
                                    { name: 'Jessica Lee', role: 'Line Cook', status: 'On Break' },
                                    { name: 'David Smith', role: 'Cashier', status: 'Working' },
                                ].map((staff, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center font-bold text-gray-600">
                                            {staff.name.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-gray-900 text-sm">{staff.name}</p>
                                            <p className="text-xs text-gray-500">{staff.role}</p>
                                        </div>
                                        <div className={`w-2.5 h-2.5 rounded-full ${staff.status === 'Working' ? 'bg-green-500' : 'bg-orange-500'}`} title={staff.status}></div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 border-t border-gray-50">
                                <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-bold rounded-lg transition-colors">
                                    Manage Schedule
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default ManagerDashboard;
