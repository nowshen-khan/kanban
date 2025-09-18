import { useTheme } from "../hooks/useTheme";
import {
	SunIcon,
	MoonIcon,
	ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const themes = [
		{ name: "system", icon: ComputerDesktopIcon },
		{ name: "light", icon: SunIcon },
		{ name: "dark", icon: MoonIcon },
	];

	return (
		<div className="inline-flex items-center rounded-full bg-gray-200 p-1 dark:bg-gray-800">
			{themes.map((t) => {
				const Icon = t.icon;
				const isActive = theme === t.name;
				return (
					<button
						key={t.name}
						onClick={() => setTheme(t.name)}
						className={`flex items-center justify-center rounded-full px-2 py-1 transition-colors ${
							isActive
								? "bg-white text-gray-900 shadow dark:bg-gray-700 dark:text-white"
								: "text-gray-600 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700"
						}`}
					>
						<Icon className="h-4 w-4" />
					</button>
				);
			})}
		</div>
	);
}
