import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { CreditCard, MapPin, Ticket, ChevronRight, Utensils, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const { api } = useAuth();
    const navigate = useNavigate();
    
    const [orderType, setOrderType] = useState('dine_in');
    const [tableNumber, setTableNumber] = useState('');
    const [address, setAddress] = useState('');
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    // If cart is empty and order not placed, kick them out
    if (cartItems.length === 0 && !orderPlaced) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
                <Link to="/menu" className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold">Return to Menu</Link>
            </div>
        );
    }

    const tax = (cartTotal - discount) * 0.05; // 5% tax
    const grandTotal = cartTotal - discount + tax;

    const location = useLocation();
    const { restaurantId, branchId } = location.state || {};

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        if (coupon.toUpperCase() === 'WELCOME20') {
            setDiscount(cartTotal * 0.20);
        } else {
            alert('Invalid coupon code');
            setDiscount(0);
        }
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        setIsPlacingOrder(true);
        
        try {
            const orderData = {
                orderItems: cartItems.map(item => ({
                    name: item.name,
                    qty: item.quantity,
                    image: item.image || 'https://via.placeholder.com/150',
                    price: item.price,
                    product: item._id || item.id
                })),
                orderType: 'Self-Pickup',
                source: 'Self-Pickup',
                restaurantId,
                branchId,
                paymentMethod: 'Card',
                taxPrice: tax,
                totalPrice: grandTotal
            };
            
            const { data } = await api.post('/orders', orderData);
            setOrderPlaced(data._id); // Save order ID for success screen
            clearCart();
        } catch (error) {
            console.error('Order failed', error);
            alert('Failed to place order: ' + (error.response?.data?.message || error.message));
        } finally {
            setIsPlacingOrder(false);
        }
    };

    if (orderPlaced) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 max-w-lg w-full text-center animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={48} className="text-green-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 font-sans tracking-tight mb-2">Order Confirmed!</h1>
                    <p className="text-gray-500 mb-8 text-lg">Your order #{orderPlaced.substring(orderPlaced.length - 6).toUpperCase()} has been sent to the kitchen.</p>
                    
                    <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left border border-gray-100">
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Order Details</p>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-700">Type</span>
                            <span className="font-bold text-gray-900">Self-Pickup</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-700">Amount Paid</span>
                            <span className="font-bold text-gray-900">${grandTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700">Est. Time</span>
                            <span className="font-bold text-orange-600">20-25 mins</span>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => navigate('/profile')}
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 active:scale-95"
                    >
                        View Dashboard <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-gray-900 font-sans tracking-tight mb-8">Checkout</h1>
            
            <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Details & Payment */}
                <div className="lg:col-span-2 space-y-8">
                    
                    {/* Self-Pickup Info */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 font-sans mb-6">Pickup Details</h2>
                        <div className="flex items-center gap-4 p-4 border border-orange-200 bg-orange-50 rounded-2xl">
                            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0">
                                <Utensils size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">Self-Pickup Order</h3>
                                <p className="text-sm text-gray-600">Your order will be prepared and ready for you to pick up from the restaurant counter.</p>
                            </div>
                        </div>
                    </div>

                    {/* Payment Information */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-900 font-sans">Payment Method</h2>
                            <ShieldCheck className="text-green-500" size={24} />
                        </div>
                        
                        <div className="bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden mb-6 shadow-xl shadow-gray-900/20">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="flex justify-between items-center mb-8 relative z-10">
                                <CreditCard size={28} className="text-gray-400" />
                                <span className="font-bold tracking-widest">VISA</span>
                            </div>
                            
                            <div className="space-y-4 relative z-10">
                                <div>
                                    <label className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1 block">Card Number</label>
                                    <input type="text" defaultValue="•••• •••• •••• 4242" className="w-full bg-transparent border-b border-gray-700 focus:border-orange-500 outline-none pb-1 font-mono text-lg transition-colors" required />
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-1">
                                        <label className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1 block">Expiry</label>
                                        <input type="text" defaultValue="12/28" className="w-full bg-transparent border-b border-gray-700 focus:border-orange-500 outline-none pb-1 font-mono transition-colors" required />
                                    </div>
                                    <div className="flex-1">
                                        <label className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1 block">CVC</label>
                                        <input type="password" defaultValue="•••" className="w-full bg-transparent border-b border-gray-700 focus:border-orange-500 outline-none pb-1 font-mono transition-colors" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1 block">Cardholder Name</label>
                                    <input type="text" placeholder="JOHN DOE" className="w-full bg-transparent border-b border-gray-700 focus:border-orange-500 outline-none pb-1 font-bold transition-colors" required />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-28">
                        <h2 className="text-xl font-bold text-gray-900 font-sans mb-6">Order Summary</h2>
                        
                        <div className="space-y-4 mb-6 max-h-64 overflow-y-auto custom-scrollbar pr-2">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-16 h-16 rounded-xl bg-gray-50 overflow-hidden shrink-0 border border-gray-100">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <h4 className="font-bold text-gray-900 text-sm leading-tight">{item.name}</h4>
                                        <p className="text-gray-500 text-xs mt-0.5">Qty: {item.quantity}</p>
                                    </div>
                                    <div className="font-bold text-gray-900 flex items-center">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Coupon */}
                        <div className="flex gap-2 mb-6">
                            <div className="relative flex-1">
                                <Ticket size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="text" 
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                    placeholder="Add coupon code..." 
                                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-orange-500 focus:bg-white text-sm font-bold uppercase transition-colors" 
                                />
                            </div>
                            <button 
                                type="button"
                                onClick={handleApplyCoupon}
                                className="bg-gray-900 text-white px-4 rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors"
                            >
                                Apply
                            </button>
                        </div>
                        <p className="text-xs text-orange-600 mb-6 font-medium">Try code: WELCOME20</p>
                        
                        {/* Totals */}
                        <div className="space-y-3 pt-6 border-t border-gray-100">
                            <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            {discount > 0 && (
                                <div className="flex justify-between items-center text-sm font-bold text-green-600">
                                    <span>Discount (20%)</span>
                                    <span>-${discount.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                                <span>Tax (5%)</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            
                            <div className="flex justify-between items-end pt-4">
                                <span className="text-lg font-bold text-gray-900">Total</span>
                                <span className="text-3xl font-bold text-orange-600 tracking-tight">${grandTotal.toFixed(2)}</span>
                            </div>
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={isPlacingOrder}
                            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl mt-8 transition-all flex justify-center items-center gap-2 shadow-lg shadow-orange-600/20 active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
                        >
                            {isPlacingOrder ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                    Processing Payment...
                                </>
                            ) : (
                                <>Pay ${grandTotal.toFixed(2)} <ChevronRight size={18} /></>
                            )}
                        </button>
                        
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
