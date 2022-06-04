import React from 'react';
import { Direction } from '../core/enums';

export interface InputFieldProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	dir?: Direction;
	hint?: string;
	isValid?: boolean;
}

export default function InputField({
	dir = Direction.LTR,
	hint = '',
	isValid = true,
	...props
}: InputFieldProps) {
	return (
		<div dir={dir}>
			<label className="mb-2">{props['aria-label']}</label>

			<div>
				<input
					{...props}
					className={`border-disabled mb-2 h-10 w-full rounded-lg border border-opacity-20 py-5 px-4 text-base disabled:bg-slate-400 text-white dark:text-gray-600 ${
						props.className ? props.className : ''
					}`}
				/>
			</div>
		</div>
	);
}
