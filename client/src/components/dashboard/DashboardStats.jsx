// DashboardStats.jsx
import {
	ChartBarIcon,
	CurrencyDollarIcon,
	ArrowTrendingUpIcon as TrendingUpIcon,
	CalculatorIcon,
	ArchiveBoxIcon,
	TruckIcon,
	ShoppingCartIcon,
	XCircleIcon,
	ArrowPathIcon,
	UsersIcon,
	TagIcon,
} from "@heroicons/react/24/outline";
import { StatCard } from "./StatCard";

export default function DashboardStats() {
	return (
		<div className="space-y-6">
			{/* Sales Overview */}
			<div>
				<h3 className="text-sm font-medium mb-3">Sales Overview</h3>
				<div className="grid grid-cols-4 gap-4">
					<StatCard icon={ChartBarIcon} title="Sales" value="1,240" />
					<StatCard icon={CurrencyDollarIcon} title="Revenue" value="$18,450" />
					<StatCard icon={TrendingUpIcon} title="Profit" value="$4,200" />
					<StatCard icon={CalculatorIcon} title="Cost" value="$14,250" />
				</div>
			</div>

			{/* Inventory Summary */}
			<div>
				<h3 className="text-sm font-medium mb-3">Inventory Summary</h3>
				<div className="grid grid-cols-2 gap-4">
					<StatCard icon={ArchiveBoxIcon} title="Qty in Hand" value="3,452" />
					<StatCard icon={TruckIcon} title="To be Received" value="120" />
				</div>
			</div>

			{/* Purchase Overview */}
			<div>
				<h3 className="text-sm font-medium mb-3">Purchase Overview</h3>
				<div className="grid grid-cols-4 gap-4">
					<StatCard icon={ShoppingCartIcon} title="Purchase" value="560" />
					<StatCard icon={CurrencyDollarIcon} title="Cost" value="$7,200" />
					<StatCard icon={XCircleIcon} title="Cancel" value="8" />
					<StatCard icon={ArrowPathIcon} title="Return" value="22" />
				</div>
			</div>

			{/* Product Summary */}
			<div>
				<h3 className="text-sm font-medium mb-3">Product Summary</h3>
				<div className="grid grid-cols-2 gap-4">
					<StatCard icon={UsersIcon} title="Suppliers" value="34" />
					<StatCard icon={TagIcon} title="Categories" value="12" />
				</div>
			</div>
		</div>
	);
}
