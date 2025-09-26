// models/DashboardSection.js
import mongoose from "mongoose";

const StatSchema = new mongoose.Schema({
	icon: { type: String, required: true }, // icon এর নাম String হিসাবে
	title: { type: String, required: true },
	value: { type: String, required: true },
	caption: { type: String }, // optional
});

const DashboardSectionSchema = new mongoose.Schema(
	{
		title: { type: String, required: true }, // e.g. "Sales Overview"
		width: { type: String, default: "w-full" }, // Tailwind width
		cols: { type: Number, default: 4 },
		stats: [StatSchema], // array of stats
	},
	{ timestamps: true }
);

export default mongoose.model.DashboardSection ||
	mongoose.model("DashboardSection", DashboardSectionSchema);
