import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        uppercase: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['Percentage', 'Fixed Amount', 'Free Shipping'],
    },
    discountValue: {
        type: Number,
        required: true,
    },
    minSpend: {
        type: Number,
        default: 0,
    },
    expiresAt: {
        type: Date,
    },
    usageLimit: {
        type: Number, // If null or 0, unlimited
        default: 0,
    },
    usedCount: {
        type: Number,
        default: 0,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const Offer = mongoose.model('Offer', offerSchema);

export default Offer;
