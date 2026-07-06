import mongoose from 'mongoose';

const taxSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['Percentage', 'Fixed Amount'],
        default: 'Percentage',
    },
    appliesTo: {
        type: String,
        required: true,
        default: 'All Items',
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const Tax = mongoose.model('Tax', taxSchema);

export default Tax;
