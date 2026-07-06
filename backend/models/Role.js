import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        enum: ['Admin', 'Branch Manager', 'Chef', 'Waiter', 'Cashier', 'Customer'],
    },
    permissions: [{
        type: String,
    }]
}, { timestamps: true });

const Role = mongoose.model('Role', roleSchema);

export default Role;
