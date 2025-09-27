// import { sections } from "../../data/stats.config";
// import StatSection from "./StatSection";

// export default function DashboardStats() {
// 	// group every 2 sections in a row
// 	const groupedSections = [];
// 	for (let i = 0; i < sections.length; i += 2) {
// 		groupedSections.push(sections.slice(i, i + 2));
// 	}

// 	return (
// 		<div className="space-y-6">
// 			{groupedSections.map((row, idx) => (
// 				<div key={idx} className="flex gap-6">
// 					{row.map((section, i) => (
// 						<StatSection key={i} {...section} />
// 					))}
// 				</div>
// 			))}
// 		</div>
// 	);
// }
