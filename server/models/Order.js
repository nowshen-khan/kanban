// models/Order.js
const OrderSchema = new mongoose.Schema({
	orderNumber: String,
	customer: {
		name: String,
		email: String,
	},
	items: [
		{
			productId: mongoose.Schema.Types.ObjectId,
			name: String,
			quantity: Number,
			price: Number,
		},
	],
	totalAmount: Number,
	status: { type: String, default: "pending" },
	createdAt: { type: Date, default: Date.now },
});

export default mongoose.model.Order || mongoose.model("Order", OrderSchema);
