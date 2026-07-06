import mongoose from 'mongoose';

const wastageLogSchema = new mongoose.Schema({
    ingredientName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
    branchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch',
    }
}, { timestamps: true });

const WastageLog = mongoose.model('WastageLog', wastageLogSchema);

export default WastageLog;
