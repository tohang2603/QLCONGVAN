import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInputV1({ type = 'text', className = '', ...props }, ref) {
	return (
		<input
			{...props}
			value={props.value ?? ''}
			type={type}
			className={
				'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ' + className
			}
		/>
	);
});
