import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: function() { return !this.isCoreRole; }
    },
    description: {
        type: String,
        default: '',
    },
    isCoreRole: {
        type: Boolean,
        default: false,
    },
    permissions: {
        type: Map,
        of: [Boolean], // Array of 4 booleans for [View Data, Create Records, Edit Records, Delete Records]
        default: {},
    }
}, { timestamps: true });

const Role = mongoose.model('Role', roleSchema);

export default Role;
