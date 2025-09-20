import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
	return (
		<div className="flex min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
			<Sidebar />

			{/* Main content area */}
			<div className="flex-1 flex flex-col">
				{/* Header */}
				<Navbar />

				{/* Page Content */}
				<main className="flex-1 p-6">{children}</main>

				{/* Footer */}
				<footer className="p-4 border-t border-gray-300 dark:border-gray-700 text-sm text-center">
					© {new Date().getFullYear()} My SaaS. All rights reserved.
				</footer>
			</div>
		</div>
	);
}
