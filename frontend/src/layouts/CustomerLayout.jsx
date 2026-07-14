import { Outlet, Link } from 'react-router-dom';
import { ShoppingCart, User, UtensilsCrossed, Heart } from 'lucide-react';
import { useCustomerAuth } from '../context/CustomerAuthContext';
import { useCart } from '../context/CartContext';
import CartDrawer from '../components/CartDrawer';

const CustomerLayout = () => {
    const { user } = useCustomerAuth();
    const { cartCount, setIsCartOpen } = useCart();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans relative">
            <CartDrawer />
            
            <header className="bg-white shadow-sm sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link to="/explore" className="flex items-center gap-3">
                        <div className="bg-orange-500 text-white p-2 rounded-lg">
                            <UtensilsCrossed size={24} />
                        </div>
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                            RestoSys
                        </h1>
                    </Link>

                    <nav className="hidden md:flex gap-8">
                        <Link to="/explore" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Home</Link>
                        <Link to="/menu" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Menu</Link>
                        <Link to="/reservations" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Reservations</Link>
                    </nav>

                    <div className="flex items-center gap-6">
                        <button className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors">
                            <Heart size={24} />
                        </button>
                        <button 
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors"
                        >
                            <ShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 w-5 h-5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        
                        {user ? (
                            <Link to="/profile" className="flex items-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold transition-colors">
                                <User size={16} />
                                {user.name}
                            </Link>
                        ) : (
                            <>
                                <Link to="/register" className="hidden md:block text-sm font-bold text-gray-600 hover:text-orange-600 transition-colors">
                                    Register
                                </Link>
                                <Link to="/login" className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full font-bold transition-colors shadow-sm shadow-orange-600/20" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    <User size={16} />
                                    Sign In
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </header>
            
            <main className="flex-grow">
                <Outlet />
            </main>

            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <UtensilsCrossed className="text-green-500" /> RestoSys
                        </h3>
                        <p className="text-gray-400">The premium dining experience delivered directly to your table or doorstep.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/menu" className="hover:text-green-400 transition-colors">Browse Menu</Link></li>
                            <li><Link to="/reservations" className="hover:text-green-400 transition-colors">Book a Table</Link></li>
                            <li><Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
                        <p className="text-gray-400">123 Culinary Ave, Food District</p>
                        <p className="text-gray-400">support@restosys.com</p>
                        <p className="text-gray-400">+1 234 567 8900</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CustomerLayout;
