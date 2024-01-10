const express = require('express')
const app = express()
const port = process.env.PORT || 3700


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://fabricfit241:FIshHNunqs5Ltgzq@cluster0.huqehxg.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const cardsCollection = client.db('fabricFit').collection("tShirts")


        //card collections
        app.get('/tShirts', async (req, res) => {
            const result = await cardsCollection.find().toArray();
            res.send(result)
        })














        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})