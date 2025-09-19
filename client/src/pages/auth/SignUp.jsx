import { Link } from "react-router-dom";
export default function SignUp() {
	return (
		<form className="space-y-5">
			<div>
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
					Name <span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="Enter your name"
					required
				/>
			</div>
			<div>
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
					Email <span className="text-red-500">*</span>
				</label>
				<input
					type="email"
					className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="Enter your email"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
					Password <span className="text-red-500">*</span>
				</label>
				<input
					type="password"
					className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="Create a password"
					required
				/>
				<p className="text-sm m-1">Must be at least 8 characters.</p>
			</div>

			<button
				type="submit"
				className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition"
			>
				Get started
			</button>

			<p className="text-center text-sm text-gray-500 dark:text-gray-400">
				Already have an account?{" "}
				<Link
					to={"/login"}
					className="text-primary-500  hover:text-primary-600 hover:underline transition-colors"
				>
					Log in
				</Link>
			</p>
		</form>
	);
}
