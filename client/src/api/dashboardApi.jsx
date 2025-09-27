// src/api/dashboardApi.js
import axios from "axios";

const API = axios.create({
	baseURL: import.meta.env.VITE_SERVER,
	headers: {
		"Content-Type": "application/json",
	},
});
console.log("BaseURL:", import.meta.env.VITE_SERVER);

export const getDashboardStats = async () => {
	try {
		const response = await API.get("/dashboard");
		return response.data;
	} catch (err) {
		console.error("❌ Failed to fetch dashboard stats:", err.message);
		throw err;
	}
};

export const getDashboardStatById = async (id) => {
	try {
		const response = await API.get(`/dashboard/${id}`);
		return response.data;
	} catch (err) {
		console.error(`❌ Failed to fetch stat id=${id}:`, err.message);
		throw err;
	}
};

// You can also add POST, PUT, DELETE if needed
