// src/components/dashboard/StatCard.jsx
export function StatCard({ icon: Icon, title, value, caption }) {
	return (
		<div className="flex items-center gap-4  ">
			<div className="p-2 rounded-md bg-gray-100 dark:bg-gray-700">
				{Icon && <Icon className="h-6 w-6 text-gray-700 dark:text-gray-200" />}
			</div>
			<div className="flex-1">
				<div className="text-sm leading-sm text-gray-500 dark:text-gray-400">
					{title}
				</div>
				<div className="text-md leading-md font-semibold">{value}</div>
				{caption && <div className="text-xs text-gray-400">{caption}</div>}
			</div>
		</div>
	);
}
