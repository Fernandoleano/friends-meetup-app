import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://fernando321:xXIRC2Q9ZKl40Ut6@cluster0.a4gkt.mongodb.net/freindsmeetup?retryWrites=true&w=majority');

        const db = client.db();
        const collection = db.collection('meetups');

        const result = await collection.insertOne(data)
        console.log(result);

        client.close();

        res.status(201).json({
            message: 'Meetup created successfully',
            // meetup: result.ops[0]                    
        });

    }
}

export default handler;