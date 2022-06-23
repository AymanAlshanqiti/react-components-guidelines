import {
	BorderRadiusEnum,
	ColorsEnum,
	DirectionEnum,
	SizesEnum,
	VariantsEnum,
} from '../core/enums';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	size?: SizesEnum;
	variant?: VariantsEnum;
	color?: ColorsEnum;
	icon?: JSX.Element;
	borderRadius?: BorderRadiusEnum | string;
	dir?: DirectionEnum;
}

export const Button = ({
	label = '',
	size = SizesEnum.Medium,
	variant = VariantsEnum.Filled,
	color = ColorsEnum.Primary,
	icon,
	borderRadius = BorderRadiusEnum.None,
	dir = DirectionEnum.LTR,
	...props
}: ButtonProps) => {
	const getButtonSize = () => {
		switch (size) {
			case SizesEnum.Small:
				return 'h-9 text-xs p-3';
			case SizesEnum.Medium:
				return 'h-10 text-sm p-4';
			case SizesEnum.Large:
				return 'h-12 text-base p-4';
			default:
				return 'h-10 text-sm p-6';
		}
	};

	const getButtonVariantWithColor = () => {
		switch (variant) {
			case VariantsEnum.Filled:
				return `text-white bg-${getButtonColorClasses()} hover:bg-${getButtonColorClasses()}-600 focus:ring-2 focus:ring-bg-${getButtonColorClasses()}-600`;
			case VariantsEnum.Outline:
				return `bg-transparent border border-${getButtonColorClasses()} text-${getButtonColorClasses()} hover:bg-${getButtonColorClasses()} hover:text-white focus:bg-${getButtonColorClasses()} focus:border-0 focus:text-white`;
			case VariantsEnum.Link:
				return `bg-transparent hover:text-${getButtonColorClasses()}-700 hover:underline hover:underline-offset-8 text-${getButtonColorClasses()}`;
			case VariantsEnum.Muted:
				return `text-${getButtonColorClasses()}-700 hover:bg-opacity-80 hover:text-white bg-opacity-50 focus:ring-2 bg-muted`;
			default:
				return `bg-transparent hover:text-${getButtonColorClasses()}-600 text-${getButtonColorClasses()}`;
		}
	};

	const getButtonColorClasses = () => {
		switch (color) {
			case ColorsEnum.Success:
				return 'success';
			case ColorsEnum.Danger:
				return 'danger';
			case ColorsEnum.Warning:
				return 'warning';
			case ColorsEnum.Accent:
				return 'accent';
			case ColorsEnum.Primary:
				return 'primary';
			case ColorsEnum.Secondary:
				return 'secondary';
			case ColorsEnum.Muted:
				return 'muted';
			case ColorsEnum.White:
				return 'white';
			default:
				return color;
		}
	};

	const getButtonBorderRadiusClasses = () => {
		switch (borderRadius) {
			case BorderRadiusEnum.None:
				return 'rounded-none';
			case BorderRadiusEnum.Small:
				return 'rounded';
			case BorderRadiusEnum.Medium:
				return 'rounded-md';
			case BorderRadiusEnum.Large:
				return 'rounded-lg';
			case BorderRadiusEnum.ExtraLarge:
				return 'rounded-xl';
			case BorderRadiusEnum.Full:
				return 'rounded-full';
			default:
				return borderRadius;
		}
	};

	return (
		<button
			{...props}
			dir={dir}
			className={`inline-flex items-center gap-2 ${getButtonSize()} ${getButtonVariantWithColor()} ${getButtonBorderRadiusClasses()} justify-center disabled:cursor-not-allowed disabled:opacity-40 ${
				props.className
			}`}
		>
			{icon && label ? (
				<>
					<span className="inline-block">{icon}</span>
					<span className="inline-block">{label}</span>
				</>
			) : icon && !label ? (
				<span className="inline-block">{icon}</span>
			) : (
				<span className="inline-block">{label}</span>
			)}
		</button>
	);
};

export default Button;
