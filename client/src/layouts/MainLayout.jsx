import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function MainLayout({ children }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	return (
		<div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
			{/* Sidebar (hidden on small, visible on md+) */}
			<div className="hidden md:block">
				<Sidebar />
			</div>

			{/* Mobile Sidebar (overlay) */}
			{sidebarOpen && (
				<div className="fixed inset-0 z-40 flex md:hidden">
					{/* Overlay background */}
					<div
						className="fixed inset-0 bg-black/50"
						onClick={() => setSidebarOpen(false)}
					></div>

					{/* Sidebar panel */}
					<div className="relative z-50 w-64 bg-white dark:bg-gray-800 shadow-lg">
						<button
							className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
							onClick={() => setSidebarOpen(false)}
						>
							<XMarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
						</button>
						<Sidebar />
					</div>
				</div>
			)}

			{/* Main content area */}
			<div className="flex-1 flex flex-col">
				{/* Header */}
				{/* Header */}
				<Navbar onMenuClick={() => setSidebarOpen(true)} />

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
