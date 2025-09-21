// StatCard.jsx
export function StatCard({ icon: Icon, title, value, caption }) {
	return (
		<div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
			<div className="p-2 rounded-md bg-gray-100 dark:bg-gray-700">
				<Icon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
			</div>
			<div>
				<div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
				<div className="text-lg font-semibold">{value}</div>
				{caption && <div className="text-xs text-gray-400">{caption}</div>}
			</div>
		</div>
	);
}
