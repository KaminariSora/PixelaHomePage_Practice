// embedding.js
const axios = require('axios');
const config = require('./config');

/**
 * สร้าง Vector Embedding จากข้อความโดยเรียก Ollama API
 * @param {string} text - ข้อความ (เช่น description) ที่ต้องการแปลงเป็น Vector
 * @returns {number[]} Array ของ Vector Embedding
 */
async function generateEmbedding(text) {
    if (!config.OLLAMA_API_URL) {
        throw new Error("OLLAMA_API_URL is not set in config.");
    }
    
    // ทำความสะอาดข้อความ
    const cleanedText = text.replace(/\n/g, " ");

    try {
        const response = await axios.post(
            config.OLLAMA_API_URL,
            {
                model: config.OLLAMA_EMBEDDING_MODEL,
                prompt: cleanedText, 
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        
        // คืนค่า Array ของ Vector
        return response.data.embedding; 

    } catch (error) {
        console.error("Ollama Embedding API Error:", error.response ? error.response.data : error.message);
        throw new Error("Failed to generate embedding from Ollama.");
    }
}

// *** Export ฟังก์ชันเพื่อให้นำไปใช้ใน main.js ได้ ***
module.exports = {
    generateEmbedding
};