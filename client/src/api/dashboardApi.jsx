// src/api/dashboardApi.js
import axios from "axios";
import dashboardData from "../data/saas.DashboardSections.json";

const isDev = true; // import.meta.env.MODE === development;

const API = axios.create({
	baseURL: isDev ? "" : import.meta.env.VITE_SERVER_LOCAL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const getDashboardStats = async () => {
	if (isDev) {
		// Design mode: load from static JSON
		return dashboardData;
	}
	try {
		const response = await API.get("/dashboard");
		return response.data;
	} catch (err) {
		console.error("❌ Failed to fetch dashboard stats:", err.message);
		throw err;
	}
};

export const getDashboardStatById = async (id) => {
	if (isDev) {
		return dashboardData.find((s) => s.id === id);
	}
	try {
		const response = await API.get(`/dashboard/${id}`);
		return response.data;
	} catch (err) {
		console.error(`❌ Failed to fetch stat id=${id}:`, err.message);
		throw err;
	}
};

// TODO: add POST, PUT, DELETE if needed
