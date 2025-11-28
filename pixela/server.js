const express = require('express');
const cors = require('cors');
const { upsertProduct } = require('./src/Admin/insertSingleData');

const myApp = express();
const port = 4000;

myApp.use(cors());
myApp.use(express.json());

myApp.get('/', async (req, res) => {
    res.send("this is first page.")
})

myApp.get('/test', async (req, res) => {
    res.send('hello world')
})

myApp.post('/value', async (req, res) => {
    const productData = req.body;

    if (!productData || !productData.name || !productData.description) {
        return res.status(400).json({ message: "Missing required product data." });
    }

    try {
        const result = await upsertProduct(productData);

        res.status(200).json(result);

    } catch (error) {
        console.error("Server Logic Error:", error);
        res.status(500).json({
            message: 'Failed to process product data on server.',
            error: error.message
        });
    }
});

myApp.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});