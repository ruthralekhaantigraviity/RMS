import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import User from './models/User.js';

// Minimal Mock Role Schema since it's missing
const roleSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});
const Role = mongoose.models.Role || mongoose.model('Role', roleSchema);

dotenv.config();

const importData = async () => {
    try {
        await connectDB();

        // Clear existing data
        await User.deleteMany();
        await Role.deleteMany();

        console.log('Data cleared!');

        // Create Roles
        const roles = await Role.insertMany([
            { name: 'Admin' },
            { name: 'Manager' },
            { name: 'Chef' },
            { name: 'Waiter' },
            { name: 'Cashier' },
            { name: 'Customer' }
        ]);
        
        console.log('Roles seeded!');

        const adminRole = roles.find(r => r.name === 'Admin');

        // Create Admin User
        await User.create({
            name: 'Super Admin',
            email: 'admin@restosys.com',
            password: 'password123',
            role: 'SuperAdmin'
        });

        console.log('Admin user seeded! (Email: admin@restosys.com, Password: password123)');

        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

importData();
