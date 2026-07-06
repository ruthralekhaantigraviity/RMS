import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import MenuItem from './models/MenuItem.js';

dotenv.config();

const menuItems = [
    {
        name: 'Truffle Fries',
        description: 'Crispy shoestring fries tossed in white truffle oil and parmesan.',
        price: 8.50,
        category: 'Appetizers',
        image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=800&auto=format&fit=crop',
        rating: 4.8,
        reviews: 124,
        tags: ['Vegetarian', 'Popular']
    },
    {
        name: 'Ribeye Steak',
        description: '14oz Prime Ribeye with garlic herb butter and roasted asparagus.',
        price: 42.00,
        category: 'Mains',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop',
        rating: 4.9,
        reviews: 89,
        tags: ['Chef\'s Special', 'Gluten Free']
    },
    {
        name: 'Margherita Pizza',
        description: 'San Marzano tomato sauce, fresh mozzarella, and basil.',
        price: 18.00,
        category: 'Mains',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop',
        rating: 4.5,
        reviews: 210,
        tags: ['Vegetarian']
    },
    {
        name: 'Craft IPA',
        description: 'Locally brewed India Pale Ale with citrus notes.',
        price: 7.00,
        category: 'Beverages',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop',
        rating: 4.6,
        reviews: 45,
        tags: ['Alcohol']
    }
];

const importMenu = async () => {
    try {
        await connectDB();
        await MenuItem.deleteMany();
        console.log('Old Menu cleared!');
        await MenuItem.insertMany(menuItems);
        console.log('Menu Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

importMenu();
