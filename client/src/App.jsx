import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/auth/Login.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const mainRoutes = [
	{
		path: "/",
		component: <Home />,
	},
	{
		path: "/about",
		component: <About />,
	},
	{
		path: "/dashboard",
		component: <Dashboard />,
	},

	// { path: "/contact", component: <Contact /> },
];

const authRoutes = [
	{
		path: "/login",
		title: "Login to your account",
		subtitle: "Welcome back! Please enter your details.",
		component: <Login />,
	},
	{
		path: "/signup",
		title: "Create an account",
		subtitle: "Join now – it’s completely free!",
		component: <SignUp />,
	},
];

export default function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
					<main className="p-6">
						<Routes>
							{/* Main pages */}
							{mainRoutes.map((route) => (
								<Route
									key={route.path}
									path={route.path}
									element={<MainLayout>{route.component}</MainLayout>}
								/>
							))}

							{/* Auth pages */}
							{authRoutes.map((route) => (
								<Route
									key={route.path}
									path={route.path}
									element={
										<AuthLayout title={route.title} subtitle={route.subtitle}>
											{route.component}
										</AuthLayout>
									}
								/>
							))}
						</Routes>
					</main>
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
}
