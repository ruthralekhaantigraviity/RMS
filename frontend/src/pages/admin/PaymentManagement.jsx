import { Search, Filter, Download, ArrowUpRight, ArrowDownRight, RefreshCcw, Eye } from 'lucide-react';

const mockTransactions = [
    { id: 'TXN-98231', orderId: '#ORD-092', date: 'Oct 24, 2026 - 14:30', method: 'Credit Card', amount: '₹45.00', status: 'Completed', customer: 'Walk-in' },
    { id: 'TXN-98232', orderId: '#ORD-093', date: 'Oct 24, 2026 - 14:45', method: 'PayPal', amount: '₹32.50', status: 'Completed', customer: 'John Doe' },
    { id: 'TXN-98233', orderId: '#ORD-094', date: 'Oct 24, 2026 - 15:10', method: 'Cash', amount: '₹14.99', status: 'Completed', customer: 'Sarah Smith' },
    { id: 'TXN-98234', orderId: '#ORD-081', date: 'Oct 24, 2026 - 11:20', method: 'Credit Card', amount: '₹120.00', status: 'Refunded', customer: 'Alice Johnson' },
    { id: 'TXN-98235', orderId: '#ORD-096', date: 'Oct 24, 2026 - 15:45', method: 'Apple Pay', amount: '₹65.00', status: 'Pending', customer: 'Mike Johnson' },
];

const getStatusStyle = (status) => {
    switch (status) {
        case 'Completed': return 'bg-green-100 text-green-700 border-green-200';
        case 'Pending': return 'bg-orange-100 text-orange-700 border-orange-200';
        case 'Refunded': return 'bg-gray-100 text-gray-700 border-gray-200';
        case 'Failed': return 'bg-red-100 text-red-700 border-red-200';
        default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
};
import { useState } from 'react';

const PaymentManagement = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTransactions = mockTransactions.filter(txn => 
        txn.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
        txn.orderId.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Payment Management</h2>
                    <p className="text-gray-500 text-sm mt-1">Track transactions, refunds, and payment gateways.</p>
                </div>
                <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-xl font-medium transition-colors text-sm shadow-sm flex items-center gap-2">
                    <Download size={16} /> Export CSV
                </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-500 mb-1">Total Revenue (Today)</p>
                    <div className="flex items-end gap-2">
                        <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>₹4,250.00</h3>
                        <span className="flex items-center text-xs font-bold text-green-600 mb-1"><ArrowUpRight size={14} /> 12%</span>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-500 mb-1">Transactions</p>
                    <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>142</h3>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-500 mb-1">Refunds Processed</p>
                    <div className="flex items-end gap-2">
                        <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>₹120.00</h3>
                        <span className="flex items-center text-xs font-bold text-red-600 mb-1"><ArrowDownRight size={14} /> 2%</span>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-500 mb-1">Pending Settlements</p>
                    <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>₹850.00</h3>
                </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap gap-4 justify-between items-center">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Search transaction ID or order..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all" />
                </div>
                <div className="flex gap-2">
                    <select className="bg-gray-50 border border-gray-200 text-gray-600 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-green-500">
                        <option>All Methods</option>
                        <option>Credit Card</option>
                        <option>Cash</option>
                        <option>PayPal</option>
                        <option>Apple Pay</option>
                    </select>
                    <select className="bg-gray-50 border border-gray-200 text-gray-600 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-green-500">
                        <option>All Statuses</option>
                        <option>Completed</option>
                        <option>Pending</option>
                        <option>Refunded</option>
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Transaction ID</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date & Time</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Order Info</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Method</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredTransactions.map((txn, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4 font-medium text-gray-900">{txn.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{txn.date}</td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-bold text-gray-900">{txn.orderId}</p>
                                        <p className="text-xs text-gray-500">{txn.customer}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{txn.method}</td>
                                    <td className="px-6 py-4 font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>{txn.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-block px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide border ${getStatusStyle(txn.status)}`}>
                                            {txn.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 transition-opacity">
                                            {txn.status === 'Completed' && (
                                                <button className="p-1.5 text-orange-500 hover:bg-orange-50 rounded transition-colors" title="Process Refund">
                                                    <RefreshCcw size={16} />
                                                </button>
                                            )}
                                            <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors" title="View Details">
                                                <Eye size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <span>Showing 5 of 142 transactions</span>
                    <div className="flex gap-1">
                        <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">Prev</button>
                        <button className="px-3 py-1 border border-green-500 bg-green-50 text-green-700 rounded font-medium">1</button>
                        <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentManagement;
