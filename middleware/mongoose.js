import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
    if (mongoose.connection.readyState) {
        return handler(req, res);
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, 
        });

        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        return res.status(500).json({ error: "Database connection failed" });
    }

    return handler(req, res);
};

export default connectDb;
