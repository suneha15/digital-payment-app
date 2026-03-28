const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
    //It kills the Node.js process immediately
    //0 → success
    //1 → error
  }
};

module.exports = connectDB;