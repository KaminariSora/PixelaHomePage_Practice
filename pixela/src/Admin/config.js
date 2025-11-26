// config.js

module.exports = {
    MONGO_URI: "mongodb+srv://ProductMarketCluster:thunder2546@productmarketcluster.y5cncqa.mongodb.net/?appName=ProductmarketCluster", // เช่น mongodb+srv://user:pass@cluster.mongodb.net/
    DB_NAME: "Market",
    COLLECTION_NAME: "Product",

    OLLAMA_API_URL: "http://localhost:11434/api/embeddings",
    OLLAMA_EMBEDDING_MODEL: "hf.co/Qwen/Qwen3-Embedding-0.6B-GGUF:F16",
};