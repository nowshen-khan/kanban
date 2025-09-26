// src/api/dashboardApi.js
import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:5000/api", // your backend URL
});

export const getDashboardStats = async () => {
	const response = await API.get("/dashboard");
	return response.data;
};

export const getDashboardStatById = async (id) => {
	const response = await API.get(`/dashboard/${id}`);
	return response.data;
};

// You can also add POST, PUT, DELETE if needed
