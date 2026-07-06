import mongoose from 'mongoose';

const tableSchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
    branchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch',
        required: true,
    },
    tableNumber: {
        type: Number,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
        default: 4,
    },
    status: {
        type: String,
        enum: ['Available', 'Occupied', 'Reserved', 'Cleaning', 'Billing'],
        default: 'Available',
    },
    activeOrder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        default: null
    },
    customers: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const Table = mongoose.model('Table', tableSchema);

export default Table;
