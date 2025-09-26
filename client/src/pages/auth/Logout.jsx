import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
	const navigate = useNavigate();

	useEffect(() => {
		localStorage.removeItem("authToken");
		localStorage.removeItem("user");

		sessionStorage.clear();

		// Redirect to login page after logout
		navigate("/login");
	}, [navigate]);

	return (
		<div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
			<div className="text-center">
				<h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
					Logging out...
				</h2>
				<p className="text-sm text-gray-500 dark:text-gray-400">
					Please wait while we sign you out.
				</p>
			</div>
		</div>
	);
}
