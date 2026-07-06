import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch',
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    guestName: {
        type: String,
        required: true,
    },
    guestPhone: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    timeSlot: {
        type: String, // e.g., '19:00 - 21:00'
        required: true,
    },
    guestCount: {
        type: Number,
        required: true,
    },
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table',
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed'],
        default: 'Pending',
    },
    specialRequests: {
        type: String,
    }
}, { timestamps: true });

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
