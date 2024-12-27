export default function PrimaryButton({ className = '', disabled, children, ...props }) {
	return (
		<button
			{...props}
			className={
				`mt-2 px-4 py-3 col-span-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 ${
					disabled && 'opacity-25'
				} ` + className
			}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
