// main.js
const { MongoClient, ObjectId } = require('mongodb');
const config = require('./config');
const { generateEmbedding } = require('./embedding');

const client = new MongoClient(config.MONGO_URI);

/**
 * * @param {object} productData 
 */
const newObjectId = new ObjectId();
console.log("--Generating object Id")
const isAsString = newObjectId.toHexString();
console.log("Value: ", isAsString)

async function upsertProduct(productData) {
    await client.connect();
    const db = client.db(config.DB_NAME);
    const collection = db.collection(config.COLLECTION_NAME);

    console.log("Generating embedding...");
    const vectorEmbedding = await generateEmbedding(productData.description);
    console.log("Embedding generated successfully.");
    
    let filter = {};
    
    if (productData._id) {
        filter = { _id: new ObjectId(productData._id) };
    } else {
        filter = { name: productData.name };
    }

    const updateDocument = {
        name: productData.name,
        price: productData.price,
        description: productData.description,
        stock: productData.stock,
        image: productData.image,
        product_embedding: vectorEmbedding
    };

    const result = await collection.replaceOne(
        filter,
        updateDocument,
        { upsert: true }
    );

    await client.close();
    
    return {
        matched: result.matchedCount,
        upserted: result.upsertedId,
        message: 'Product upsert successful'
    };
}

module.exports = {
    upsertProduct
}