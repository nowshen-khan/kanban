import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// ✅ CORS setup
app.use(
	cors({
		origin: [
			process.env.ALLOWED_ORIGINS_CLIENT,
			process.env.ALLOWED_ORIGINS_CLIENT_LOCAL,
		],
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);

// Root route
app.get("/", (req, res) => {
	res.send("Server is running...");
});

// Dashboard routes
app.use("/api/dashboard", dashboardRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`)
);
