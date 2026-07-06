import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch',
        required: true,
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
    },
    itemName: {
        type: String,
        required: true,
    },
    category: {
        type: String, // e.g., 'Vegetables', 'Meat', 'Dairy', 'Packaging'
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    unit: {
        type: String, // e.g., 'kg', 'ltr', 'pcs'
        required: true,
    },
    minStockLevel: {
        type: Number,
        default: 10,
    },
    pricePerUnit: {
        type: Number,
    }
}, { timestamps: true });

const Inventory = mongoose.model('Inventory', inventorySchema);

export default Inventory;
