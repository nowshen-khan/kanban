export default function Login() {
	return (
		<form className="space-y-5">
			<div>
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
					Email
				</label>
				<input
					type="email"
					className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="Enter your email"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
					Password
				</label>
				<input
					type="password"
					className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="Password"
				/>
			</div>

			<button
				type="submit"
				className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
			>
				Login
			</button>
		</form>
	);
}
