import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    billingCycle: {
        type: String,
        enum: ['Monthly', 'Yearly'],
        default: 'Monthly'
    },
    features: [{
        type: String
    }],
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const Plan = mongoose.model('Plan', planSchema);

export default Plan;
