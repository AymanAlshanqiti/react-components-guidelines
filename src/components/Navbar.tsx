import { useState } from 'react';

const navigation = [
	{ name: 'Dashboard', href: '#', current: true },
	{ name: 'Team', href: '#', current: false },
	{ name: 'Projects', href: '#', current: false },
	{ name: 'Calendar', href: '#', current: false },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<nav className="bg-dark">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex justify-between items-center h-16">
					{/* Navbar burger menu and close icon */}
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<button
							type="button"
							className="inline-flex justify-center items-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-inset focus:ring-gray-500 focus:ring-2"
							onClick={() => setIsOpen(!isOpen)}
						>
							{isOpen ? (
								<svg
									className="h-6 w-6 block"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									></path>
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>

					{/* brand position */}
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<div className="shrink-0 flex items-center">
							<img
								className="block lg:hidden h-8 w-auto"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
								alt="Workflow"
							/>
							<img
								className="hidden lg:block h-8 w-auto"
								src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
								alt="Workflow"
							/>
						</div>

						{/* nav items */}
						<div className="hidden sm:block sm:ml-6">
							<div className="flex space-x-2">
								{navigation.map(item => {
									return (
										<a
											key={`nav-link-${item.name}`}
											href={item.href}
											className={`${
												item.current
													? 'bg-gray-900 text-white'
													: 'text-gray-300 hover:bg-gray-700 hover:text-white'
											} px-3 py-2 rounded-md text-sm font-medium`}
											aria-current={item.current ? 'page' : undefined}
										>
											{item.name}
										</a>
									);
								})}
							</div>
						</div>
					</div>

					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
						{/* profile user image icon */}
						<div className="ml-3 relative">
							<button
								type="button"
								className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-gray-800 focus:ring-white"
							>
								<span className="sr-only">Open user menu</span>
								<img
									className="h-8 w-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</button>
						</div>
					</div>
				</div>

				{/* mobile menu, show/hide based on menu state */}
				{isOpen && (
					<div className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map(item => {
								return (
									<a
										key={`nav-mobile-link-${item.name}`}
										href={item.href}
										className={`${
											item.current
												? 'bg-gray-900 text-white'
												: 'text-gray-300 hover:bg-gray-700 hover:text-white'
										} block px-3 py-2 rounded-md text-base font-medium`}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</a>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
