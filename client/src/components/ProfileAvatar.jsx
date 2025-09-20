export default function ProfileAvatar({ user }) {
	const firstLetter = user?.name ? user.name.charAt(0).toUpperCase() : "U";

	return (
		<div>
			{user?.avatar ? (
				// Avatar image
				<img
					src={user.avatar}
					alt={user.name || "Profile"}
					className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
				/>
			) : (
				// Initial fallback
				<div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center cursor-pointer">
					<span className="text-sm font-medium text-gray-700 dark:text-gray-200">
						{firstLetter}
					</span>
				</div>
			)}
		</div>
	);
}
