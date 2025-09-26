// src/components/dashboard/StatSection.jsx
import { StatCard } from "./StatCard";
import { iconMap } from "../../utils/iconMap";

export default function StatSection({
	title,
	stats,
	cols = 4,
	width = "w-full",
}) {
	const getCols = (cols) => {
		switch (cols) {
			case 1:
				return "grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1";
			case 2:
				return "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2";
			case 3:
				return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3";
			case 4:
				return "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4";
			default:
				return "grid-cols-1";
		}
	};
	return (
		<div
			className={`${width} p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm  `}
		>
			<h3 className="text-xl leading-xl font-medium mb-3">{title}</h3>
			<div
				className={`grid gap-4 ${getCols(cols)}
        
		  `}
			>
				{stats.map((stat, index) => {
					const IconComponent = iconMap[stat.icon];
					return (
						<StatCard
							key={index}
							icon={IconComponent}
							title={stat.title}
							value={stat.value}
						/>
					);
				})}
			</div>
		</div>
	);
}
