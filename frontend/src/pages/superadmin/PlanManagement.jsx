import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Plus, Edit, Trash2 } from 'lucide-react';

const PlanManagement = () => {
    const { api } = useAuth();
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const res = await api.get('/super-admin/plans');
                setPlans(res.data);
            } catch (error) {
                console.error("Failed to fetch plans", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPlans();
    }, [api]);

    if (loading) return <div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 font-sans">Subscription Plans</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
                    <Plus size={20} />
                    New Plan
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map(plan => (
                    <div key={plan._id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col relative">
                        {!plan.isActive && (
                            <span className="absolute top-4 right-4 bg-gray-100 text-gray-500 px-2 py-1 text-xs font-bold rounded-full">Inactive</span>
                        )}
                        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-3xl font-black text-gray-900">${plan.price}</span>
                            <span className="text-gray-500 font-medium">/{plan.billingCycle.toLowerCase()}</span>
                        </div>
                        <ul className="mt-6 space-y-3 flex-1">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex gap-2">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors font-medium">
                                <Edit size={16} /> Edit
                            </button>
                            <button className="p-2 text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
                {plans.length === 0 && (
                    <div className="col-span-full p-8 text-center bg-white rounded-3xl border border-gray-100 text-gray-500 font-medium">
                        No subscription plans found. Create one to get started.
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlanManagement;
