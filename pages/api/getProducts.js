import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    try {
        console.log("🔄 Fetching products from database...");

        let products = await Product.find();

        if (!products || products.length === 0) {
            console.warn("⚠️ No products found in the database.");
            return res.status(404).json({ error: "No products available" });
        }

        console.log(`✅ Found ${products.length} products.`);
        return res.status(200).json({ products });
    } catch (error) {
        console.error("❌ Error fetching products:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export default connectDb(handler);
