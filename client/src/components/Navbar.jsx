import React from "react";
import SearchBar from "./Searchbar";
import ThemeToggle from "../components/ThemeToggle";
import { BellIcon } from "@heroicons/react/24/outline";
import ProfileAvatar from "./ProfileAvatar";

const user = {
	name: "Nowshen",
	avatar: "/profile.jpg",
};

const Navbar = () => {
	return (
		<header className="flex justify-between p-4 bg-gray-50 dark:bg-gray-800">
			{/* Search Bar (fixed width, left) */}
			<SearchBar />

			{/* Right Side Controls */}
			<div className="flex items-center gap-4">
				{/* Theme Toggle */}
				<ThemeToggle />

				{/* Notification Bell */}
				<button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
					<BellIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
					<span className="absolute top-1 right-1 inline-flex h-2 w-2 rounded-full bg-red-500"></span>
				</button>

				{/* Profile Avatar */}
				<ProfileAvatar user={user} />
			</div>
		</header>
	);
};

export default Navbar;
