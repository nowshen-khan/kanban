import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar({ className, value, onChange }) {
	return (
		<div
			className={`${className} flex items-center w-full md:w-[280px] lg:w-[500px] xl:w-[600px]   max-w-md rounded-lg border border-gray-300 px-3 py-2 shadow-sm`}
		>
			<MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
			<input
				type="text"
				value={value}
				onChange={onChange}
				placeholder="Search product, supplier, order"
				className="w-full outline-none text-sm px-2"
			/>
		</div>
	);
}
