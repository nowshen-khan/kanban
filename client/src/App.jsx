import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";
import Login from "./pages/auth/Login.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Inventory from "./pages/Inventory.jsx";
import Reports from "./pages/Reports.jsx";
import Suppliers from "./pages/Suppliers.jsx";
import Orders from "./pages/Orders.jsx";
import ManageStore from "./pages/ManageStore.jsx";
import Settings from "./pages/Settings.jsx";
import Logout from "./pages/auth/Logout.jsx";

const mainRoutes = [
	{
		path: "/",
		component: <Home />,
	},

	{
		path: "/dashboard",
		component: <Dashboard />,
	},
	{
		path: "/inventory",
		component: <Inventory />,
	},
	{
		path: "/reports",
		component: <Reports />,
	},
	{
		path: "/suppliers",
		component: <Suppliers />,
	},
	{
		path: "/orders",
		component: <Orders />,
	},
	{
		path: "/manage-store",
		component: <ManageStore />,
	},
	{ path: "/settings", component: <Settings /> },
	{ path: "/logout", component: <Logout /> },
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
					<main>
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
