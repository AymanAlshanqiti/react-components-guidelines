import { Story, Meta } from '@storybook/react';
import { BsClipboardCheck } from 'react-icons/bs';

import { Button, ButtonProps } from '../components/Button';
import {
	BorderRadiusEnum,
	ColorsEnum,
	SizesEnum,
	VariantsEnum,
} from '../core/enums';

export default {
	title: 'Components/Button',
	component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const firstComponent = Template.bind({});
firstComponent.args = {
	label: 'Click Me',
	variant: VariantsEnum.Filled,
	color: ColorsEnum.Primary,
	size: SizesEnum.Medium,
	borderRadius: BorderRadiusEnum.Small,
	dir: 'ltr',
	icon: <BsClipboardCheck />,
	disabled: false,
};

export const secondComponent = Template.bind({});
secondComponent.args = {
	label: 'Click Me',
	variant: VariantsEnum.Outline,
	color: ColorsEnum.Primary,
	size: SizesEnum.Large,
	borderRadius: BorderRadiusEnum.Full,
	dir: 'rtl',
	icon: <BsClipboardCheck />,
	disabled: false,
};
