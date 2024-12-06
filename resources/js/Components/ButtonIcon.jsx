export default function ButtonIcon({ className = '', children, ...props }) {
	return (
		<div
			className={`grid content-center justify-items-center rounded p-2 text-lg hover:text-white ` + className}
		>
			{children}
		</div>
	);
}
