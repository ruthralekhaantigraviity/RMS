import { CheckSquare, Receipt } from 'lucide-react';

const WaiterCompleted = () => {
    // Mock data for completed orders
    const completed = [
        { id: '#1019', table: 'T-1', time: '45m ago', total: '$45.00', status: 'Paid' },
        { id: '#1015', table: 'T-4', time: '1h 12m ago', total: '$112.50', status: 'Paid' },
        { id: '#1012', table: 'T-7', time: '2h 5m ago', total: '$28.00', status: 'Paid' },
        { id: '#1008', table: 'T-2', time: '3h ago', total: '$65.00', status: 'Paid' },
    ];

    return (
        <div className="max-w-[1200px] mx-auto space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Completed Orders</h2>
                    <p className="text-sm text-gray-500 mt-1">Your successful service history for today.</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-xl border border-gray-200">
                    <span className="text-sm font-bold text-gray-600">Total: {completed.length}</span>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Order ID</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Table</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Total Amount</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Time Completed</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {completed.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-4 font-bold text-gray-900">{order.id}</td>
                                <td className="p-4">
                                    <span className="bg-gray-100 text-gray-800 font-bold px-3 py-1 rounded-lg text-sm">{order.table}</span>
                                </td>
                                <td className="p-4 font-bold text-gray-900">{order.total}</td>
                                <td className="p-4 text-sm font-medium text-gray-500">{order.time}</td>
                                <td className="p-4">
                                    <span className="flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full w-max border border-green-100">
                                        <CheckSquare size={14} /> {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WaiterCompleted;
