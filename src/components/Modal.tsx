import { BsX } from 'react-icons/bs';
import { BorderRadiusEnum, ColorsEnum, VariantsEnum } from '../core/enums';
import { getDirection } from '../core/helper';
import Button from './Button';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	onCancel?: () => void;
	onConfirm: () => void;
	hasExitIcon?: boolean;
	title?: string;
	description: string;
	confirmString: string;
	cancelString?: string;
}

export default function Modal({
	onCancel,
	onConfirm,
	hasExitIcon,
	title,
	description,
	confirmString,
	cancelString,
	...props
}: ModalProps) {
	return (
		<div
			className="z-50 flex items-center justify-center fixed inset-0 bg-black/10 bg-opacity-50 backdrop-blur-sm h-screen w-screen"
			dir={props.dir}
		>
			<div className="bg-white p-4 rounded-2xl flex basis-11/12 sm:basis-96 h-60 shadow-sm overflow-hidden max-w-lg max-h-lg break-words relative">
				{hasExitIcon && (
					<BsX
						className={`absolute text-secondary-400 cursor-pointer text-2xl ${
							getDirection(props.dir) === 'ltr' ? 'right-3' : 'left-3'
						}`}
						onClick={onCancel}
					/>
				)}
				<div className="flex flex-col justify-center gap-2 p-5 items-center w-full">
					<h1 className="font-bold text-lg text-primary">{title}</h1>
					<p className="font-normal text-md text-secondary-400 text-center">
						{description}
					</p>
					<div className="flex gap-x-3 mt-3">
						{}
						<Button
							variant={VariantsEnum.Filled}
							color={ColorsEnum.Primary}
							label={confirmString}
							borderRadius={BorderRadiusEnum.Medium}
							onClick={onConfirm}
						/>

						{cancelString && (
							<Button
								variant={VariantsEnum.Outline}
								color={ColorsEnum.Primary}
								label={cancelString}
								borderRadius={BorderRadiusEnum.Medium}
								onClick={onCancel}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
