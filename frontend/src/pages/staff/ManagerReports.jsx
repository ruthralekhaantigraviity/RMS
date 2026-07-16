import { useState } from 'react';
import { FileText, Printer, FileDown, CheckCircle, Download, X } from 'lucide-react';
import toast from 'react-hot-toast';

const mockReports = [
    { name: 'End of Day Summary', desc: 'Cash drawer closing and net sales summary.', freq: 'Daily', time: '11:00 PM' },
    { name: 'Inventory Consumption', desc: 'Depletion of stock based on recipes sold.', freq: 'Daily', time: '11:30 PM' },
    { name: 'Staff Labor Cost', desc: 'Hours worked vs sales generated.', freq: 'Weekly', time: 'Sunday EOD' },
    { name: 'Tax Liability', desc: 'Total tax collected for local jurisdiction.', freq: 'Monthly', time: '1st of Month' },
];

const ManagerReports = () => {
    const [actionModal, setActionModal] = useState({ show: false, type: '', report: null });

    return (
        <div className="p-8 max-w-[1600px] mx-auto space-y-6 font-sans">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Branch Reports</h2>
                    <p className="text-gray-500 text-sm mt-1">Generate and print mandatory branch closing reports.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* EOD Action */}
                <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 opacity-10"><FileText size={120} /></div>
                        <h3 className="font-bold text-xl mb-2 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>End of Day (EOD)</h3>
                        <p className="text-sm text-gray-300 mb-6 relative z-10">Running EOD will close the cash drawer, lock today's sales, and generate the daily manifest.</p>
                        
                        <div className="space-y-3 relative z-10">
                            <div className="flex justify-between items-center text-sm border-b border-gray-700 pb-2">
                                <span className="text-gray-400">Drawer Status</span>
                                <span className="text-orange-400 font-bold">Open</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-b border-gray-700 pb-2">
                                <span className="text-gray-400">Cash Expected</span>
                                <span className="text-white font-bold">₹1,245.00</span>
                            </div>
                            <button onClick={() => setActionModal({ show: true, type: 'eod', report: { name: 'End of Day (EOD)' } })} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors shadow-md mt-4 flex items-center justify-center gap-2">
                                <FileText size={18} /> Generate Report
                            </button>
                        </div>
                    </div>
                </div>

                {/* Available Reports */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Available Reports</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mockReports.map((report, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-green-300 hover:shadow-md transition-all cursor-pointer group">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="p-2.5 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-500 group-hover:text-white transition-colors">
                                        <FileText size={20} />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                        {report.freq}
                                    </span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-1">{report.name}</h4>
                                <p className="text-sm text-gray-500 mb-4 h-10">{report.desc}</p>
                                
                                <div className="flex gap-2 mt-4">
                                    <button onClick={() => setActionModal({ show: true, type: 'view', report })} className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold py-2 rounded-lg transition-colors flex justify-center items-center gap-1 border border-gray-200">
                                        <FileText size={14} /> View
                                    </button>
                                    <button onClick={() => setActionModal({ show: true, type: 'download', report })} className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold py-2 rounded-lg transition-colors flex justify-center items-center gap-1 border border-gray-200">
                                        <Download size={14} /> Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Action Modals */}
            {actionModal.show && actionModal.report && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col">
                        
                        {/* Header */}
                        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                {actionModal.type === 'eod' && <><CheckCircle size={20} className="text-green-600"/> Run EOD Report</>}
                                {actionModal.type === 'view' && <><FileText size={20} className="text-blue-600"/> Viewing: {actionModal.report.name}</>}
                                {actionModal.type === 'download' && <><Download size={20} className="text-blue-600"/> Download {actionModal.report.name}</>}
                            </h3>
                            <button onClick={() => setActionModal({ show: false, type: '', report: null })} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            {actionModal.type === 'eod' && (
                                <div className="space-y-4">
                                    <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200 text-sm">
                                        <p className="font-bold mb-1">Warning: Irreversible Action</p>
                                        <p>Running the End of Day process will permanently lock today's sales, close out the active drawer, and send the final batch to the payment processor.</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-2">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Expected Drawer Cash</label>
                                            <input type="text" readOnly value="₹1,245.00" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 bg-gray-50 text-gray-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Actual Cash Counted</label>
                                            <input type="number" placeholder="Enter amount..." className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Manager PIN required to authorize</label>
                                        <input type="password" placeholder="••••" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                    </div>
                                </div>
                            )}

                            {actionModal.type === 'view' && (
                                <div className="space-y-4">
                                    <div className="h-64 bg-gray-50 border border-gray-200 rounded-xl p-4 overflow-y-auto font-mono text-sm text-gray-700">
                                        <div className="text-center font-bold mb-4 border-b border-gray-300 pb-2">
                                            RESTOSYS BRANCH REPORT<br/>
                                            {actionModal.report.name.toUpperCase()}
                                        </div>
                                        <p>Date: {new Date().toLocaleDateString()}</p>
                                        <p>Generated by: System</p>
                                        <br/>
                                        <p>----------------------------------------</p>
                                        <p>Report data successfully loaded.</p>
                                        <p>No anomalies detected in the current dataset.</p>
                                        <p>All metrics are within the acceptable threshold parameters set by corporate guidelines.</p>
                                        <p>----------------------------------------</p>
                                        <br/>
                                        <p className="text-center italic text-gray-400">-- End of Report --</p>
                                    </div>
                                </div>
                            )}

                            {actionModal.type === 'download' && (
                                <div className="space-y-5">
                                    <p className="text-sm text-gray-600">Select the format you would like to download this report in. For detailed analysis, Excel is recommended.</p>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Export Format</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            <button className="border-2 border-blue-600 bg-blue-50 text-blue-700 font-bold py-2 rounded-xl text-sm transition-colors">PDF (Print)</button>
                                            <button className="border border-gray-200 hover:border-gray-300 text-gray-600 font-medium py-2 rounded-xl text-sm transition-colors">Excel (.xlsx)</button>
                                            <button className="border border-gray-200 hover:border-gray-300 text-gray-600 font-medium py-2 rounded-xl text-sm transition-colors">CSV (Raw)</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-5 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 mt-auto">
                            <button onClick={() => setActionModal({ show: false, type: '', report: null })} className="px-5 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                                {actionModal.type === 'view' ? 'Close' : 'Cancel'}
                            </button>
                            {actionModal.type !== 'view' && (
                                <button 
                                    onClick={() => { 
                                        toast.success(actionModal.type === 'eod' ? 'EOD Process completed successfully!' : 'Download started!');
                                        setActionModal({ show: false, type: '', report: null }); 
                                    }} 
                                    className={`px-5 py-2.5 text-sm font-bold text-white rounded-xl transition-colors ${
                                        actionModal.type === 'eod' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
                                    }`}
                                >
                                    {actionModal.type === 'eod' ? 'Confirm & Run EOD' : 'Download File'}
                                </button>
                            )}
                            {actionModal.type === 'view' && (
                                <button onClick={() => toast.success('Printing report...')} className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2">
                                    <Printer size={16}/> Print
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManagerReports;
