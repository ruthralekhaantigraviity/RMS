import { CheckSquare, Square, Clock, Flame, AlertCircle } from 'lucide-react';

const mockTasks = [
    { name: 'Chop Onions', target: '20 lbs', completed: false, priority: 'High', time: '10:00 AM' },
    { name: 'Prepare Garlic Paste', target: '5 liters', completed: true, priority: 'Medium', time: '10:30 AM' },
    { name: 'Marinate Chicken', target: '40 lbs', completed: false, priority: 'High', time: '11:00 AM' },
    { name: 'Wash Salad Greens', target: '15 lbs', completed: false, priority: 'Low', time: '11:30 AM' },
];

const ChefPrepList = () => {
    return (
        <div className="w-full max-w-[1600px] mx-auto font-sans space-y-6">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Morning Prep List</h2>
                    <p className="text-gray-400 text-sm mt-1">Daily tasks to ensure the kitchen is ready for service.</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="text-right">
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Completion</p>
                        <p className="text-2xl font-bold text-green-400">25%</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#1e2330] rounded-2xl shadow-sm border border-[#2a3040] overflow-hidden">
                <div className="p-5 border-b border-[#2a3040] flex justify-between items-center bg-[#1a1e2a]">
                    <h3 className="font-bold text-gray-200 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Prep Tasks</h3>
                    <button className="text-sm font-bold text-orange-400 bg-orange-500/10 px-4 py-2 rounded-lg hover:bg-orange-500/20 transition-colors border border-orange-500/20">
                        Print List
                    </button>
                </div>
                <div className="divide-y divide-[#2a3040]">
                    {mockTasks.map((task, i) => (
                        <div key={i} className={`p-4 flex items-center justify-between hover:bg-[#252b3b] transition-colors ${task.completed ? 'opacity-50' : ''}`}>
                            <div className="flex items-center gap-4">
                                <button className={`text-₹{task.completed ? 'green-500' : 'gray-500'} hover:text-green-400 transition-colors`}>
                                    {task.completed ? <CheckSquare size={24} /> : <Square size={24} />}
                                </button>
                                <div>
                                    <h4 className={`font-bold text-lg ${task.completed ? 'text-gray-500 line-through' : 'text-gray-200'}`}>{task.name}</h4>
                                    <div className="flex items-center gap-3 text-sm mt-1">
                                        <span className="text-gray-400">Target: <span className="font-bold text-white">{task.target}</span></span>
                                        <span className="flex items-center gap-1 text-gray-400"><Clock size={14} /> By {task.time}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {task.priority === 'High' && !task.completed && (
                                    <span className="flex items-center gap-1 text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded border border-red-500/20">
                                        <Flame size={14} /> High Priority
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChefPrepList;
