import mongoose from 'mongoose';
import Order from './models/Order.js';

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/restaurant');
    const order = await Order.create({
        orderItems: [{ name: 'Pizza', qty: 1, price: 100, product: new mongoose.Types.ObjectId() }],
        orderType: 'Self-Pickup',
        paymentMethod: 'Card',
        subscriptionPlan: 'Weekly Subscription',
        totalPrice: 100
    });
    console.log("Created order:", order);
    process.exit(0);
}
main().catch(console.error);
