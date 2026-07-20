const mongoose = require('mongoose');
require('./backend/models/Order');
require('./backend/models/Restaurant');
require('./backend/models/User');

mongoose.connect('mongodb://127.0.0.1:27017/restaurant').then(async () => {
    try {
        const orders = await mongoose.model('Order').find({ 
            subscriptionPlan: { $ne: 'One-time Order' },
            subscriptionPlan: { $exists: true }
        }).populate('restaurantId');
        console.log(JSON.stringify(orders, null, 2));
    } catch(e) {
        console.error(e);
    }
    process.exit(0);
});
