import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        enum: ['Cash', 'Card', 'UPI', 'Online'],
        required: true,
    },
    transactionId: {
        type: String, // from payment gateway
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed', 'Refunded'],
        default: 'Completed',
    },
    cashier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
