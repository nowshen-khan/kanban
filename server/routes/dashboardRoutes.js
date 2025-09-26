import express from "express";
import {
	getDashboardStats,
	getDashboardStat,
	createDashboardStat,
	updateDashboardStat,
	deleteDashboardStat,
} from "../controllers/dashboardController.js";

const router = express.Router();

// CRUD routes
router.get("/", getDashboardStats); // Get all
router.get("/:id", getDashboardStat); // Get single
router.post("/", createDashboardStat); // Create
router.put("/:id", updateDashboardStat); // Update
router.delete("/:id", deleteDashboardStat); // Delete

export default router;
