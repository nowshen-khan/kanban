import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();
export { ThemeContext };

export const ThemeProvider = ({ children }) => {
	const getInitialTheme = () => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("theme");
			if (saved) return saved;
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				return "dark";
			}
		}
		return "light";
	};

	const [theme, setTheme] = useState(getInitialTheme);

	// Apply theme
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else if (theme === "light") {
			document.documentElement.classList.remove("dark");
		} else if (theme === "system") {
			const systemDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			document.documentElement.classList.toggle("dark", systemDark);
		}

		// Save preference
		if (theme === "system") {
			localStorage.removeItem("theme");
		} else {
			localStorage.setItem("theme", theme);
		}
	}, [theme]);

	// Watch for system changes
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = (e) => {
			if (theme === "system") {
				document.documentElement.classList.toggle("dark", e.matches);
			}
		};
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
