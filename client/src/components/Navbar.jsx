import React from "react";
import SearchBar from "./Searchbar";
import ThemeToggle from "../components/ThemeToggle";
import { BellIcon } from "@heroicons/react/24/outline";
import ProfileAvatar from "./ProfileAvatar";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";

const user = {
	name: "Nowshen",
	avatar: "/profile.jpg",
};
const Navbar = ({ onMenuClick }) => {
	return (
		<header
			className="
        flex flex-col sm:flex-row  
        items-center sm:justify-between
        gap-4 sm:gap-0             
        p-4 
        bg-gray-50 dark:bg-gray-800
      "
		>
			{/* Search */}

			<div className="w-full sm:w-auto">
				<SearchBar />
			</div>

			{/* Side Controls */}
			<div
				className="
          flex items-center gap-4
          w-full sm:w-auto
          justify-center sm:justify-end 
        "
			>
				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button
						className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
						onClick={onMenuClick}
					>
						<Bars3Icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
					</button>
				</div>

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
