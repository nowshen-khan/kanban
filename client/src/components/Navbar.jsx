import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
import kanban from "../assets/kanban.svg";
import { motion } from "framer-motion";
import {
	HomeIcon,
	CubeIcon,
	ChartBarSquareIcon,
	UserGroupIcon,
	ClipboardDocumentListIcon,
	BuildingStorefrontIcon,
	Cog6ToothIcon,
	ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
	const menuLinks = [
		{
			icon: HomeIcon,
			name: "Dashboard",
			path: "/",
		},
		{
			icon: CubeIcon,
			name: "Inventory",
			path: "/inventory",
		},
		{
			icon: ChartBarSquareIcon,
			name: "Reports",
			path: "/reports",
		},
		{
			icon: UserGroupIcon,
			name: "Suppliers",
			path: "/suppliers",
		},
		{ icon: ClipboardDocumentListIcon, name: "Orders", path: "/orders" },
		{
			icon: BuildingStorefrontIcon,
			name: "Manage Store",
			path: "/manage-store",
		},
	];

	const authLinks = [
		{
			icon: Cog6ToothIcon,
			name: "Settings",
			path: "/settings",
		},
		{ icon: ArrowLeftOnRectangleIcon, name: "Logout", path: "/logout" },
	];

	const isActiveLink = (path) => window.location.pathname === path;

	const renderLinks = (links) =>
		links.map((link) => (
			<Link
				to={link.path}
				key={link.path}
				className={`hover:underline flex flex-row items-center gap-2 ${
					isActiveLink(link.path)
						? "text-primary-500"
						: "text-gray-600 dark:text-gray-400"
				}`}
			>
				{link.icon && <link.icon className="h-4 w-4" />} {link.name}
			</Link>
		));

	return (
		<aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4 space-y-4">
			{/* {Logo} */}
			<div className="hidden lg:flex w-1/2 items-center justify-center p-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-md text-center flex flex-row items-center align-middle justify-between gap-2"
				>
					<img src={kanban} alt="Kanban" className="w-10" />
					<h2 className="text-md font-bold uppercase text-primary-300">
						Kanban
					</h2>
				</motion.div>
			</div>

			<nav className="flex flex-col gap-2  ">{renderLinks(menuLinks)}</nav>
			<nav className="flex flex-col gap-2  ">{renderLinks(authLinks)}</nav>
		</aside>
	);
}
