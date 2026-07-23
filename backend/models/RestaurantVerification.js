import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
    filePath: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    rejectReason: { type: String, default: '' },
    expiryDate: { type: Date } // For FSSAI license
});

const restaurantVerificationSchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
        unique: true
    },
    documents: {
        fssai: documentSchema,
        businessRegistration: documentSchema,
        panCard: documentSchema,
        aadhaarCard: documentSchema,
        addressProof: {
            filePath: { type: String, required: true },
            addressText: { type: String, required: true },
            status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
            rejectReason: { type: String, default: '' }
        },
        bankProof: documentSchema,
        logo: { filePath: { type: String } },
        images: [{ filePath: { type: String } }],
        menuPdf: { filePath: { type: String } }
    },
    status: {
        type: String,
        enum: ['Pending', 'Under Review', 'Verified', 'Rejected', 'Re-upload Required', 'Expired'],
        default: 'Pending'
    },
    rejectionReason: { type: String, default: '' },
    history: [
        {
            status: { type: String, required: true },
            actionBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            actionDate: { type: Date, default: Date.now },
            reason: { type: String, default: '' },
            comments: { type: String, default: '' }
        }
    ]
}, { timestamps: true });

const RestaurantVerification = mongoose.model('RestaurantVerification', restaurantVerificationSchema);

export default RestaurantVerification;
