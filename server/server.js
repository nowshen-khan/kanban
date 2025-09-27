import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";

import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(
	cors({
		origin: [
			process.env.Allowed_Origins_Client,
			process.env.Allowed_Origins_Client_Local,
		],
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);

// Route
app.get("/", (req, res) => {
	res.send("Server is running...");
});

app.use("/api/dashboard", dashboardRoutes);

// API route
// app.get("/api/dashboard-stats", async (req, res) => {
// 	try {
// 		const sections = await Section.find();
// 		res.json(sections);
// 	} catch (err) {
// 		res.status(500).json({ error: "Failed to fetch stats" });
// 	}
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT || 5000, () =>
	console.log(`Server running on http://localhost:${PORT}`)
);
