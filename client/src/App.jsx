import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

export default function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
					<Navbar />
					<main className="p-6">
						<Routes>
							<Route
								path="/"
								element={
									<MainLayout>
										<Home />
									</MainLayout>
								}
							/>
							<Route
								path="/about"
								element={
									<MainLayout>
										<About />
									</MainLayout>
								}
							/>
							<Route
								path="/login"
								element={
									<AuthLayout
										title="Login to your account"
										subtitle={"Welcome back! Please enter your details."}
									>
										<Login />
									</AuthLayout>
								}
							/>
						</Routes>
					</main>
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
}
