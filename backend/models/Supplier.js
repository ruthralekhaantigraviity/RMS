import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        default: 'General',
    },
    contactPerson: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;
