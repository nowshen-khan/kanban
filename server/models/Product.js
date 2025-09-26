// models/Product.js
const ProductSchema = new mongoose.Schema({
	name: String,
	sku: String,
	quantityInStock: Number,
	price: Number,
	category: String,
	supplierId: mongoose.Schema.Types.ObjectId,
	createdAt: { type: Date, default: Date.now },
});

export default mongoose.model.Product ||
	mongoose.model("Product", ProductSchema);
