// src/components/dashboard/StatSection.jsx
import { StatCard } from "./StatCard";
import { iconMap } from "../../utils/iconMap";

export default function StatSection({
	title,
	stats,
	cols = 4,
	width = "w-full",
}) {
	const colClasses = {
		1: "grid-cols-1",
		2: "grid-cols-2",
		3: "grid-cols-3",
		4: "grid-cols-4",
	};
	return (
		<div
			className={`${width} p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm  `}
		>
			<h3 className="text-xl leading-xl font-medium mb-3">{title}</h3>
			<div
				className={`grid gap-4 
          grid-cols-1 
          sm:${colClasses[Math.min(2, cols)]} 
          md:${colClasses[cols]} 
          lg:${colClasses[cols]} 
          xl:${colClasses[cols]} 
          2xl:${colClasses[cols]}`}
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
