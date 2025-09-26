import DashboardStat from "../models/Dashboard.js";

// Get all dashboard sections
export const getDashboardStats = async (req, res) => {
	try {
		const stats = await DashboardStat.find();
		res.json(stats);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Get single dashboard section
export const getDashboardStat = async (req, res) => {
	try {
		const stat = await DashboardStat.findById(req.params.id);
		if (!stat) return res.status(404).json({ message: "Not found" });
		res.json(stat);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Create a new dashboard section
export const createDashboardStat = async (req, res) => {
	try {
		const newStat = new DashboardStat(req.body);
		const saved = await newStat.save();
		res.status(201).json(saved);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Update a dashboard section
export const updateDashboardStat = async (req, res) => {
	try {
		const updated = await DashboardStat.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!updated) return res.status(404).json({ message: "Not found" });
		res.json(updated);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Delete a dashboard section
export const deleteDashboardStat = async (req, res) => {
	try {
		const deleted = await DashboardStat.findByIdAndDelete(req.params.id);
		if (!deleted) return res.status(404).json({ message: "Not found" });
		res.json({ message: "Deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
