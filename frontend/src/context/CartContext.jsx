import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load from local storage
    useEffect(() => {
        const savedCart = localStorage.getItem('restosys_cart');
        const savedWishlist = localStorage.getItem('restosys_wishlist');
        if (savedCart) setCartItems(JSON.parse(savedCart));
        if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    }, []);

    // Save to local storage
    useEffect(() => {
        localStorage.setItem('restosys_cart', JSON.stringify(cartItems));
        localStorage.setItem('restosys_wishlist', JSON.stringify(wishlist));
    }, [cartItems, wishlist]);

    const addToCart = (item, quantity = 1) => {
        setCartItems(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i);
            }
            return [...prev, { ...item, quantity }];
        });
        setIsCartOpen(true); // Auto open cart when adding
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(i => i.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + delta;
                return newQty > 0 ? { ...item, quantity: newQty } : item;
            }
            return item;
        }));
    };

    const toggleWishlist = (item) => {
        setWishlist(prev => {
            const exists = prev.find(i => i.id === item.id);
            if (exists) return prev.filter(i => i.id !== item.id);
            return [...prev, item];
        });
    };

    const clearCart = () => setCartItems([]);

    const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems, wishlist, isCartOpen, setIsCartOpen,
            addToCart, removeFromCart, updateQuantity, toggleWishlist, clearCart,
            cartTotal, cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};
