import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Plus, Edit, Trash2, X, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../components/ConfirmModal';

const PlanManagement = () => {
    const { api } = useAuth();
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPlan, setEditingPlan] = useState(null);
    const [confirmModal, setConfirmModal] = useState({
        isOpen: false,
        title: '',
        message: '',
        onConfirm: () => {},
        isDestructive: true
    });
    
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        billingCycle: 'Monthly',
        features: '', // We'll store features as a newline-separated string in the form
        isActive: true
    });

    const fetchPlans = async () => {
        try {
            setLoading(true);
            const res = await api.get('/super-admin/plans');
            setPlans(res.data);
        } catch (error) {
            console.error("Failed to fetch plans", error);
            toast.error("Failed to load plans");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPlans();
    }, [api]);

    const handleOpenModal = (plan = null) => {
        if (plan) {
            setEditingPlan(plan);
            setFormData({
                name: plan.name,
                price: plan.price,
                billingCycle: plan.billingCycle,
                features: plan.features.join('\n'),
                isActive: plan.isActive
            });
        } else {
            setEditingPlan(null);
            setFormData({
                name: '',
                price: '',
                billingCycle: 'Monthly',
                features: '',
                isActive: true
            });
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingPlan(null);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Parse features from newline separated string to array, removing empty lines
        const featuresArray = formData.features
            .split('\n')
            .map(f => f.trim())
            .filter(f => f.length > 0);

        const payload = {
            ...formData,
            price: Number(formData.price),
            features: featuresArray
        };

        try {
            if (editingPlan) {
                await api.put(`/super-admin/plans/${editingPlan._id}`, payload);
                toast.success('Plan updated successfully!');
            } else {
                await api.post('/super-admin/plans', payload);
                toast.success('Plan created successfully!');
            }
            fetchPlans();
            handleCloseModal();
        } catch (error) {
            console.error("Failed to save plan", error);
            toast.error(error.response?.data?.message || 'Failed to save plan');
        }
    };

    const handleDelete = (id) => {
        setConfirmModal({
            isOpen: true,
            title: 'Delete Plan',
            message: 'Are you sure you want to delete this plan? This cannot be undone.',
            onConfirm: async () => {
                try {
                    await api.delete(`/super-admin/plans/${id}`);
                    toast.success('Plan deleted successfully!');
                    fetchPlans();
                } catch (error) {
                    console.error("Failed to delete plan", error);
                    toast.error(error.response?.data?.message || 'Failed to delete plan');
                }
            },
            isDestructive: true
        });
    };

    if (loading && plans.length === 0) {
        return <div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 font-sans">Subscription Plans</h2>
                <button 
                    onClick={() => handleOpenModal()}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 active:scale-95"
                >
                    <Plus size={20} />
                    New Plan
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map(plan => (
                    <div key={plan._id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col relative group transition-all hover:shadow-md hover:-translate-y-1">
                        {!plan.isActive && (
                            <span className="absolute top-4 right-4 bg-gray-100 text-gray-500 px-2 py-1 text-xs font-bold rounded-full">Inactive</span>
                        )}
                        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-3xl font-black text-gray-900">₹{plan.price}</span>
                            <span className="text-gray-500 font-medium">/{plan.billingCycle.toLowerCase()}</span>
                        </div>
                        <ul className="mt-6 space-y-3 flex-1">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                    {feature}
                                </li>
                            ))}
                            {plan.features.length === 0 && (
                                <li className="text-gray-400 italic text-sm">No features listed.</li>
                            )}
                        </ul>
                        <div className="mt-8 flex gap-2">
                            <button 
                                onClick={() => handleOpenModal(plan)}
                                className="flex-1 flex items-center justify-center gap-2 bg-gray-50 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors font-medium active:scale-95"
                            >
                                <Edit size={16} /> Edit
                            </button>
                            <button 
                                onClick={() => handleDelete(plan._id)}
                                className="p-2 text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-colors active:scale-95"
                                title="Delete Plan"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
                {plans.length === 0 && !loading && (
                    <div className="col-span-full p-12 text-center bg-white rounded-3xl border border-gray-100 text-gray-500 font-medium flex flex-col items-center">
                        <AlertCircle className="w-12 h-12 text-gray-300 mb-4" />
                        No subscription plans found. Create one to get started.
                    </div>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center shrink-0">
                            <h3 className="text-lg font-bold text-gray-900">
                                {editingPlan ? 'Edit Plan' : 'Create New Plan'}
                            </h3>
                            <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
                            <form id="planForm" onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Plan Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="e.g. Starter, Professional"
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Price (₹)</label>
                                        <input 
                                            type="number" 
                                            name="price"
                                            value={formData.price}
                                            onChange={handleInputChange}
                                            required
                                            min="0"
                                            step="0.01"
                                            placeholder="49"
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Billing Cycle</label>
                                        <select
                                            name="billingCycle"
                                            value={formData.billingCycle}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors bg-white"
                                        >
                                            <option value="Monthly">Monthly</option>
                                            <option value="Yearly">Yearly</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Features (One per line)</label>
                                    <textarea 
                                        name="features"
                                        value={formData.features}
                                        onChange={handleInputChange}
                                        rows="4"
                                        placeholder="e.g. 1 Branch&#10;Basic Reporting&#10;Email Support"
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors resize-none"
                                    ></textarea>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <input 
                                        type="checkbox" 
                                        id="isActive"
                                        name="isActive"
                                        checked={formData.isActive}
                                        onChange={handleInputChange}
                                        className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                    />
                                    <div>
                                        <label htmlFor="isActive" className="text-sm font-bold text-gray-900 cursor-pointer">Active Plan</label>
                                        <p className="text-xs text-gray-500 mt-0.5">If unchecked, users cannot see or subscribe to this plan.</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50 shrink-0">
                            <button 
                                type="button" 
                                onClick={handleCloseModal}
                                className="px-5 py-2.5 rounded-xl font-bold text-gray-600 hover:bg-gray-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                form="planForm"
                                className="px-5 py-2.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 active:scale-95"
                            >
                                {editingPlan ? 'Save Changes' : 'Create Plan'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <ConfirmModal 
                {...confirmModal} 
                onClose={() => setConfirmModal({...confirmModal, isOpen: false})} 
            />
        </div>
    );
};

export default PlanManagement;
