import { MongoClient } from 'mongodb';

async function main() {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    try {
        await client.connect();
        const db = client.db('restaurant');
        
        const orders = await db.collection('orders').find({ 
            subscriptionPlan: { $exists: true, $ne: 'One-time Order' }
        }).toArray();
        
        console.log(`Found ${orders.length} subscription orders`);
        if (orders.length > 0) {
            console.log(JSON.stringify(orders, null, 2));
        } else {
            console.log("No subscription orders exist in the database!");
        }
    } finally {
        await client.close();
    }
}
main().catch(console.error);
