const express = require('express');
const cors = require('cors');
const { upsertProduct } = require('./Admin/insertSingleData');

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

    // ตรวจสอบข้อมูลเบื้องต้น (สามารถเพิ่มได้อีก)
    if (!productData || !productData.name || !productData.description) {
        return res.status(400).json({ message: "Missing required product data." });
    }

    try {
        // 💡 เรียกใช้ Logic
        const result = await upsertProduct(productData);

        // 💡 ส่งผลลัพธ์กลับ
        res.status(200).json(result); // ส่ง result จาก upsertProduct กลับไป

    } catch (error) {
        // 💡 จัดการ Error และส่ง 500 กลับไปให้ Client
        console.error("❌ Server Logic Error:", error);
        res.status(500).json({
            message: 'Failed to process product data on server.',
            error: error.message // ส่งข้อความ error จริงกลับไปช่วยในการ Debug ฝั่ง Client
        });
    }
});

myApp.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});