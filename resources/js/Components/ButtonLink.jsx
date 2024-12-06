import { Link } from '@inertiajs/react';

export default function Button({ className = '', disabled, children, ...props }) {
	return (
		<Link
			{...props}
			className={
				`inline-flex items-center rounded-md border border-transparent px-4 py-2 text-xs bg-green-500 font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 ${
					disabled && 'opacity-25'
				} ` + className
			}
			disabled={disabled}
		>
			{children}
		</Link>
	);
}
