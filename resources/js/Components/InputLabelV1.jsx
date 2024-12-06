export default function InputLabelV1({ value, className = '', children, ...props }) {
	return (
		<label {...props} className={`block text-sm font-medium text-gray-700 ` + className}>
			{value ? value : children}
		</label>
	);
}
