import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar({ className }) {
	return (
		<div
			className={`${className} flex items-center w-[400px]  rounded-lg border border-gray-300 px-3 py-2 shadow-sm`}
		>
			<MagnifyingGlassIcon className="h-5 w-5 " />
			<input
				type="text"
				placeholder="Search product, supplier, order"
				className="w-full outline-none text-sm px-2"
			/>
		</div>
	);
}
