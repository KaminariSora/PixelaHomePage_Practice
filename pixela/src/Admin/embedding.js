const axios = require('axios');
const config = require('./config');

/**
 * @param {string} text
 * @returns {number[]} 
 */
async function generateEmbedding(text) {
    if (!config.OLLAMA_API_URL) {
        throw new Error("OLLAMA_API_URL is not set in config.");
    }
    
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
        
        return response.data.embedding; 

    } catch (error) {
        console.error("Ollama Embedding API Error:", error.response ? error.response.data : error.message);
        throw new Error("Failed to generate embedding from Ollama.");
    }
}

module.exports = {
    generateEmbedding
};