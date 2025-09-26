import mongoose from "mongoose";

const StatSchema = new mongoose.Schema({
	icon: String,
	title: String,
	value: String,
});

const DashboardSchema = new mongoose.Schema(
	{
		title: String,
		cols: Number,
		width: { type: String, required: true },
		stats: [StatSchema],
	},
	{ timestamps: true }
);

const Dashboard =
	mongoose.models.Dashboard || mongoose.model("Dashboard", DashboardSchema);
export default Dashboard;
