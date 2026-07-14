import { PackageSearch, AlertTriangle, ArrowDown, ArrowUp, RefreshCw, ShoppingCart, CheckCircle2 } from 'lucide-react';

const mockInventory = [
    { item: 'Premium Ground Beef', category: 'Meat', stock: '12 lbs', min: '20 lbs', status: 'Low Stock', lastOrder: '2 days ago' },
    { item: 'Avocado (Haas)', category: 'Produce', stock: '8 lbs', min: '15 lbs', status: 'Low Stock', lastOrder: 'Yesterday' },
    { item: 'Brioche Buns', category: 'Bakery', stock: '140 units', min: '50 units', status: 'In Stock', lastOrder: 'Today' },
    { item: 'Cheddar Cheese', category: 'Dairy', stock: '4 lbs', min: '10 lbs', status: 'Critical', lastOrder: '3 days ago' },
    { item: 'Truffle Oil', category: 'Pantry', stock: '2 bottles', min: '2 bottles', status: 'Reorder', lastOrder: '1 week ago' },
];

const ManagerInventory = () => {
    return (
        <div className="p-8 max-w-[1600px] mx-auto space-y-6 font-sans">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Branch Inventory Monitor</h2>
                    <p className="text-gray-500 text-sm mt-1">Track local branch stock levels and manage reorder requests.</p>
                </div>
                <div className="flex gap-3">
                    <button onClick={() => alert('Syncing stock with central database...')} className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-xl font-medium transition-colors text-sm shadow-sm flex items-center gap-2">
                        <RefreshCw size={16} /> Sync Stock
                    </button>
                    <button onClick={() => alert('Opening new reorder form...')} className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-bold transition-colors flex items-center gap-2 text-sm shadow-md">
                        <ShoppingCart size={18} /> New Reorder
                    </button>
                </div>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50/50 border border-red-200 p-5 rounded-2xl flex items-center gap-4 shadow-sm">
                    <div className="p-3 bg-red-100 text-red-600 rounded-xl"><AlertTriangle size={24} /></div>
                    <div>
                        <p className="text-xs text-red-600 font-bold uppercase tracking-wider">Critical / Low Stock</p>
                        <h3 className="text-2xl font-extrabold text-red-900">3 Items</h3>
                    </div>
                </div>
                <div className="bg-green-50/50 border border-green-200 p-5 rounded-2xl flex items-center gap-4 shadow-sm">
                    <div className="p-3 bg-green-100 text-green-600 rounded-xl"><CheckCircle2 size={24} /></div>
                    <div>
                        <p className="text-xs text-green-700 font-bold uppercase tracking-wider">Healthy Stock</p>
                        <h3 className="text-2xl font-extrabold text-green-900">142 Items</h3>
                    </div>
                </div>
                <div className="bg-blue-50/50 border border-blue-200 p-5 rounded-2xl flex items-center gap-4 shadow-sm">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><ArrowDown size={24} /></div>
                    <div>
                        <p className="text-xs text-blue-700 font-bold uppercase tracking-wider">Pending Deliveries</p>
                        <h3 className="text-2xl font-extrabold text-blue-900">2 Orders</h3>
                    </div>
                </div>
            </div>

            {/* Inventory List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Stock Alerts & Status</h3>
                    <select className="bg-white border border-gray-200 text-sm font-medium rounded-lg px-3 py-1.5 focus:outline-none focus:border-green-500">
                        <option>All Categories</option>
                        <option>Meat</option>
                        <option>Produce</option>
                        <option>Dairy</option>
                    </select>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap">
                        <thead className="bg-gray-50/50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Item Name</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Current Stock</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Min Required</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockInventory.map((item, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-gray-900 text-sm">{item.item}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{item.category}</td>
                                    <td className={`px-6 py-4 font-extrabold text-sm ${item.status === 'Critical' ? 'text-red-600' : item.status === 'Low Stock' ? 'text-orange-600' : 'text-gray-900'}`}>
                                        {item.stock}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{item.min}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                                            item.status === 'In Stock' ? 'bg-green-100 text-green-700' :
                                            item.status === 'Critical' ? 'bg-red-100 text-red-700' :
                                            'bg-orange-100 text-orange-700'
                                        }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        {item.status !== 'In Stock' ? (
                                            <button onClick={() => alert(`Reordering ${item.item}...`)} className="text-sm font-bold text-white bg-green-600 px-4 py-1.5 rounded-lg hover:bg-green-700 transition-colors shadow-sm">
                                                Reorder
                                            </button>
                                        ) : (
                                            <button onClick={() => alert(`Adjusting stock for ${item.item}...`)} className="text-sm font-bold text-gray-500 bg-gray-100 px-4 py-1.5 rounded-lg hover:bg-gray-200 transition-colors">
                                                Adjust
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManagerInventory;
