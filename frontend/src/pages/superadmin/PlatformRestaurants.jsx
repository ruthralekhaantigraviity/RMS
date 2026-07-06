import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Check, X, Ban, RefreshCw } from 'lucide-react';

const PlatformRestaurants = () => {
    const { api } = useAuth();
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const res = await api.get('/super-admin/restaurants');
                setRestaurants(res.data);
            } catch (error) {
                console.error("Failed to fetch restaurants", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRestaurants();
    }, [api]);

    const handleApproval = async (id, status) => {
        try {
            await api.put(`/super-admin/restaurants/${id}/approval`, { approvalStatus: status });
            setRestaurants(restaurants.map(r => 
                r._id === id ? { ...r, approvalStatus: status } : r
            ));
        } catch (error) {
            alert('Failed to update approval status');
        }
    };

    const handleFreezeAccount = async (id, currentStatus) => {
        const newStatus = currentStatus === 'Active' ? 'Frozen' : 'Active';
        try {
            await api.put(`/super-admin/restaurants/${id}/subscription`, { status: newStatus });
            setRestaurants(restaurants.map(r => 
                r._id === id ? { ...r, subscription: { ...r.subscription, status: newStatus } } : r
            ));
        } catch (error) {
            alert('Failed to update subscription');
        }
    };

    if (loading) return <div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 font-sans">Platform Restaurants</h2>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-sm text-gray-500 uppercase tracking-wider">
                                <th className="p-4 font-bold">Restaurant</th>
                                <th className="p-4 font-bold">Owner</th>
                                <th className="p-4 font-bold">Plan</th>
                                <th className="p-4 font-bold">Approval</th>
                                <th className="p-4 font-bold">Status</th>
                                <th className="p-4 font-bold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {restaurants.map(restaurant => (
                                <tr key={restaurant._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                                                {restaurant.logo ? (
                                                    <img src={restaurant.logo} alt={restaurant.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold">
                                                        {restaurant.name.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                            <span className="font-bold text-gray-900">{restaurant.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-600">{restaurant.ownerId?.email || 'N/A'}</td>
                                    <td className="p-4">
                                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
                                            {restaurant.subscription?.plan || 'N/A'}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        {restaurant.approvalStatus === 'Pending' && <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">Pending</span>}
                                        {restaurant.approvalStatus === 'Approved' && <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Approved</span>}
                                        {restaurant.approvalStatus === 'Rejected' && <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">Rejected</span>}
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                                            restaurant.subscription?.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                            {restaurant.subscription?.status || 'Unknown'}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right flex justify-end gap-2">
                                        {restaurant.approvalStatus === 'Pending' && (
                                            <>
                                                <button onClick={() => handleApproval(restaurant._id, 'Approved')} className="p-2 text-green-600 bg-green-50 hover:bg-green-100 rounded-lg" title="Approve">
                                                    <Check size={18} />
                                                </button>
                                                <button onClick={() => handleApproval(restaurant._id, 'Rejected')} className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg" title="Reject">
                                                    <X size={18} />
                                                </button>
                                            </>
                                        )}
                                        {restaurant.approvalStatus === 'Approved' && (
                                            <button 
                                                onClick={() => handleFreezeAccount(restaurant._id, restaurant.subscription?.status)}
                                                className={`p-2 rounded-lg transition-colors ${
                                                    restaurant.subscription?.status === 'Active' 
                                                    ? 'text-red-600 bg-red-50 hover:bg-red-100'
                                                    : 'text-green-600 bg-green-50 hover:bg-green-100'
                                                }`}
                                                title={restaurant.subscription?.status === 'Active' ? 'Freeze Account' : 'Unfreeze Account'}
                                            >
                                                {restaurant.subscription?.status === 'Active' ? <Ban size={18} /> : <RefreshCw size={18} />}
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {restaurants.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="p-8 text-center text-gray-500 font-medium">No restaurants registered yet.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PlatformRestaurants;
