import { Link } from '@inertiajs/react';

export default function Button({ className = '', disabled, children, ...props }) {
	return (
		<Link
			{...props}
			className={
				`inline-flex items-center rounded-md border border-blue-500 px-4 py-2 mb-4 text-sm font-semibold uppercase tracking-widest text-white transition duration-300 ease-in-out bg-transparent backdrop-blur-sm hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 active:bg-blue-600 ${
					disabled && 'opacity-50 cursor-not-allowed'
				} ` + className
			}
			disabled={disabled}
		>
			{children}
		</Link>
	);
}
