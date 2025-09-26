// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import DashboardStats from "../components/dashboard/DashboardStats";
import StatSection from "../components/dashboard/StatSection";
import { getDashboardStats } from "../api/dashboardApi";

const Dashboard = () => {
	const [stats, setStats] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getDashboardStats();
				setStats(data);
			} catch (err) {
				console.error("Error fetching dashboard stats:", err);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	// group every 2 sections in a row
	const groupedSections = [];
	for (let i = 0; i < stats.length; i += 2) {
		groupedSections.push(stats.slice(i, i + 2));
	}

	if (loading) return <div>Loading...</div>;

	return (
		<div className=" space-y-6">
			{groupedSections.map((row, index) => (
				<div key={index} className="flex flex-col md:flex-row gap-6">
					{row.map((section, i) => (
						<StatSection key={i} {...section} />
					))}
				</div>
			))}
		</div>
	);
};

export default Dashboard;
