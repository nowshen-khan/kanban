import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
	const links = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "About",
			path: "/about",
		},
		{
			name: "Dashboard",
			path: "/dashboard",
		},
	];
	return (
		<div className="flex min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
			{/* Sidebar */}
			{/* <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4 space-y-4">
				<h2 className="text-xl font-bold mb-6">My SaaS</h2>
				<nav className="flex flex-col gap-2">
					{links.map((link) => (
						<Link to={link.path} key={link.path} className="hover:underline">
							{link.name}
						</Link>
					))}
				</nav>
			</aside> */}
			<Navbar />

			{/* Main content area */}
			<div className="flex-1 flex flex-col">
				{/* Header */}
				<header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
					<h1 className="text-lg font-semibold">Dashboard</h1>
					<ThemeToggle />
				</header>

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
