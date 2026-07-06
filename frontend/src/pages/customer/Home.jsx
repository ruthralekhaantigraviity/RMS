import { useState, useEffect } from 'react';
import { Search, MapPin, Star, ChevronDown, User, ShoppingBag, Clock, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
    const { user } = useAuth();
    const [restaurants, setRestaurants] = useState([]);
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('Fetching location...');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                // Simulate getting location
                setTimeout(() => setLocation('San Francisco, CA'), 1000);

                const res = await axios.get('http://localhost:5000/api/restaurants');
                setRestaurants(res.data.filter(r => r.subscription?.status === 'Active' && r.isActive !== false));
            } catch (error) {
                console.error("Failed to load restaurants", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRestaurants();
    }, []);

    const filtered = restaurants.filter(r => r.name.toLowerCase().includes(search.toLowerCase()));

    // Dummy categories for "What's on your mind?"
    const foodItems = [
        { name: 'Biryani', img: 'https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891fac65d1628411039.png' },
        { name: 'Pizza', img: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65c31fe55800941632716575.png' },
        { name: 'Burger', img: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' },
        { name: 'Rolls', img: 'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png' },
        { name: 'Cake', img: 'https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png' },
        { name: 'Chicken', img: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png' },
        { name: 'Thali', img: 'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png' },
        { name: 'Dosa', img: 'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png' }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            
            {/* Clean Zomato/Swiggy Header */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm py-3 px-4 lg:px-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1200px] mx-auto w-full">
                    
                    {/* Logo & Location */}
                    <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
                        <h1 className="text-3xl font-black italic tracking-tighter text-red-500">
                            RestaurantHub
                        </h1>
                        
                        {/* Location Selector (Zomato style) */}
                        <div className="hidden md:flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-2 py-1.5 rounded-lg transition-colors border-b-2 border-transparent hover:border-gray-200">
                            <MapPin size={20} className="text-red-500 shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-800 line-clamp-1 border-b border-dashed border-gray-400">
                                    {location}
                                </span>
                            </div>
                            <ChevronDown size={16} className="text-red-500" />
                        </div>
                    </div>

                    {/* Search & Auth */}
                    <div className="flex items-center gap-4 w-full md:w-auto flex-1 md:flex-none justify-end">
                        {/* Search Bar */}
                        <div className="flex-1 md:w-80 lg:w-[400px] bg-gray-50 border border-gray-200 rounded-xl flex items-center px-4 py-2.5 focus-within:bg-white focus-within:shadow-md focus-within:border-gray-300 transition-all">
                            <Search className="text-gray-400 shrink-0 mr-3" size={18} />
                            <input 
                                type="text" 
                                placeholder="Search for restaurant, cuisine or a dish" 
                                className="w-full bg-transparent outline-none text-gray-700 text-sm font-light"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        {/* Mobile Location (shows only on small screens) */}
                        <div className="md:hidden flex items-center text-red-500">
                            <MapPin size={24} />
                        </div>

                        {user ? (
                            <Link to="/profile" className="hidden md:flex items-center gap-2 hover:bg-gray-50 px-3 py-2 rounded-xl transition-colors font-medium text-gray-700">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                                    <User size={18} />
                                </div>
                                {user.name}
                            </Link>
                        ) : (
                            <div className="hidden md:flex items-center gap-4 text-gray-700 text-lg font-light">
                                <Link to="/login" className="hover:text-red-500 transition-colors">Log in</Link>
                                <Link to="/register" className="hover:text-red-500 transition-colors">Sign up</Link>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-[1200px] mx-auto w-full px-4 py-8">
                
                {/* Food Items Section: "Inspiration for your first order" */}
                <section className="mb-14">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">What's on your mind?</h2>
                    </div>
                    
                    <div className="flex overflow-x-auto gap-6 pb-6 pt-2 custom-scrollbar no-scrollbar scroll-smooth">
                        {foodItems.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-3 min-w-[130px] cursor-pointer group shrink-0">
                                <div className="w-32 h-32 rounded-full bg-transparent overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                                </div>
                                <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900">{item.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="w-full h-[1px] bg-gray-200 mt-4"></div>
                </section>

                {/* Restaurant Grid Section */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">Restaurants with Self-Pickup near you</h2>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-500"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filtered.map(restaurant => (
                                <Link to={`/restaurant/${restaurant._id}`} key={restaurant._id} className="group cursor-pointer block hover:scale-[0.98] transition-transform duration-200">
                                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                                        <img 
                                            src={restaurant.logo || "https://b.zmtcdn.com/data/pictures/chains/4/19543164/5fa41639c0411a76c0e86b2089f2a245_o2_featured_v2.jpg"} 
                                            alt={restaurant.name} 
                                            className="w-full h-full object-cover"
                                        />
                                        
                                        {/* Gradient Overlay for text readability at bottom */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                        
                                        {/* Offer Text (Swiggy/Zomato style) */}
                                        <div className="absolute bottom-2 left-3 right-3 text-white">
                                            <h4 className="text-xl font-black tracking-tighter flex items-center gap-1.5">
                                                <Percent size={18} /> 50% OFF UPTO ₹100
                                            </h4>
                                        </div>
                                    </div>
                                    
                                    <div className="px-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-[1.15rem] font-bold text-gray-900 truncate">
                                                {restaurant.name}
                                            </h3>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <div className="bg-green-700 text-white px-1.5 py-0.5 rounded text-xs font-bold flex items-center gap-1 shadow-sm">
                                                <Star size={10} className="fill-white" /> 4.{Math.floor(Math.random() * 5) + 1}
                                            </div>
                                            <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                                            <span className="text-sm font-bold text-gray-700">15-20 mins</span>
                                        </div>
                                        
                                        <div className="text-[14px] text-gray-500 font-light truncate mb-2">
                                            North Indian, Fast Food, Beverages
                                        </div>
                                        
                                        <div className="flex items-center gap-2 text-xs text-gray-500 pt-2 border-t border-gray-100 border-dashed">
                                            <ShoppingBag size={14} className="text-orange-500" />
                                            <span>Multiple self-pickup locations available</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                    
                    {!loading && filtered.length === 0 && (
                        <div className="text-center py-20 flex flex-col items-center">
                            <img src="https://b.zmtcdn.com/web/assets/not-found.svg" alt="Not found" className="w-64 h-64 opacity-50 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-700">No restaurants found</h3>
                            <p className="text-gray-500 mt-2 font-light">Try searching for something else.</p>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default Home;
