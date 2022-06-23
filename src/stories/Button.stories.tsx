import { Story, Meta } from '@storybook/react';
import { BsClipboardCheck } from 'react-icons/bs';

import { Button, ButtonProps } from '../components/Button';
import {
	BorderRadiusEnum,
	ColorsEnum,
	DirectionEnum,
	SizesEnum,
	VariantsEnum,
} from '../core/enums';

export default {
	title: 'Components/Button',
	component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const component = Template.bind({});
component.args = {
	label: 'Click Me',
	variant: VariantsEnum.Filled,
	color: ColorsEnum.Primary,
	size: SizesEnum.Medium,
	borderRadius: BorderRadiusEnum.Small,
	dir: DirectionEnum.LTR,
	icon: <BsClipboardCheck />,
	disabled: false,
};
