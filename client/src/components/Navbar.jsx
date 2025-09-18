import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
	return (
		<header className="p-2 border-b border-gray-300 dark:border-gray-700">
			<ThemeToggle />
		</header>
	);
}
