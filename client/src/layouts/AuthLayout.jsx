import { motion } from "framer-motion";
import kanban from "../assets/kanban.svg";

export default function AuthLayout({ children, title, subtitle }) {
	return (
		<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex ">
			{/* Left side (branding / banner) */}
			<div className="hidden lg:flex w-1/2 items-center justify-center p-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-md text-center "
				>
					<img src={kanban} alt="Kanban" className="w-40 mb-6 mx-auto" />
					<h1 className="text-4xl font-bold mb-4 uppercase text-primary-300">
						Kanban
					</h1>
					<p className="text-lg opacity-80">
						Secure, simple, and powerful tools to manage your workflow.
					</p>
				</motion.div>
			</div>

			{/* Right side (form container) */}
			<div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.4 }}
					className="w-full max-w-md bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8"
				>
					<div className="text-center ">
						<img src={kanban} alt="Kanban" className="w-10 mx-auto mb-6" />
						{title && (
							<h2 className="text-display-sm leading-display-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
								{title}
							</h2>
						)}
						{subtitle && (
							<p className="text-md leading-md mb-6 text-gray-500">
								{subtitle}
							</p>
						)}
					</div>
					{children}
				</motion.div>
			</div>
		</div>
	);
}
