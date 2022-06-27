import React from 'react';
import { BsCheck2, BsExclamationCircle, BsX } from 'react-icons/bs';
import { getDirection } from '../core/helper';

export interface InputFieldProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	hint?: string;
	isValid?: boolean;
	error?: string;
	icon?: JSX.Element;
	info?: string;
	onResetInputhValue: () => void;
}

export default function InputField({
	hint = '',
	isValid,
	error = '',
	icon,
	info,
	onResetInputhValue,
	...props
}: InputFieldProps) {
	const getValidationClass = () => {
		switch (isValid) {
			case true:
				return 'ring-2 ring-success border-transparent';
			case false:
				return 'ring-2 ring-danger border-transparent';
			default:
				return 'focus:ring-primary-400';
		}
	};

	const getValidationIcon = () => {
		switch (isValid) {
			case true:
				return <BsCheck2 className="text-success text-2xl" />;
			case false:
				return <BsExclamationCircle className="text-danger text-2xl" />;
		}
	};

	const getLabelColor = () => {
		switch (isValid) {
			case true:
				return 'success';
			case false:
				return 'danger';
			default:
				return 'secondary-600';
		}
	};

	const getInputPadding = () => {
		if (icon) {
			return 'px-9';
		}

		if (props.dir === 'ltr') {
			return 'pr-9';
		} else {
			return 'pl-9';
		}
	};

	return (
		<div dir={props.dir}>
			<div className="flex items-center justify-between">
				<label className={`text-${getLabelColor()}`}>
					{props['aria-label']}
				</label>
				{info && (
					<button onClick={() => alert(info)}>
						<BsExclamationCircle className="text-secondary text-lg" />
					</button>
				)}
			</div>

			<div className="mt-1">
				<div className="relative flex mb-2">
					<input
						{...props}
						className={`bg-white basis-full text-secondary p-2 h-10 rounded-md border hover:ring-2 hover:ring-primary-400 hover:shadow-md hover:shadow-primary-50 transition-all duration-500 outline-none focus:shadow-none focus:ring-2 ${getInputPadding()} ${getValidationClass()}`}
					/>

					{/* helper icon (optional) */}
					{icon && (
						<div
							className={`absolute top-2 text-2xl text-secondary/70 ${
								getDirection(props.dir) === 'ltr' ? 'left-2' : 'right-2'
							}`}
						>
							{icon}
						</div>
					)}

					{/* validation and reset icons */}
					<div
						className={`absolute top-2 ${
							getDirection(props.dir) === 'ltr' ? 'right-2' : 'left-2'
						}`}
					>
						{isValid === undefined && !props?.value ? (
							<button>
								<BsX
									className="text-secondary text-2xl"
									onClick={onResetInputhValue}
								/>
							</button>
						) : (
							props.type !== 'date' && getValidationIcon()
						)}
					</div>
				</div>
				{hint && <p className="text-muted-300 text-xs mb-1">{hint}</p>}
				{error && <p className="text-danger text-xs mb-1">{error}</p>}
			</div>
		</div>
	);
}
