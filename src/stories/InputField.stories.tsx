import { Story, Meta } from '@storybook/react';
import { BsPerson } from 'react-icons/bs';
import InputField, { InputFieldProps } from '../components/InputField';

export default {
	title: 'Components/InputField',
	component: InputField,
} as Meta;

const Template: Story<InputFieldProps> = args => <InputField {...args} />;
export const firstComponent = Template.bind({});

/**
 * dir?: DirectionEnum
 * hint?: string
 * isValid?: boolean
 * error?: string
 * icon?: JSX.Element
 * info?: string
 * onResetInputhValue: () => void
 */
firstComponent.args = {
	'aria-label': 'First Name',
	placeholder: 'Ayman',
	hint: 'your first name',
	info: 'please type your first name only',
	icon: <BsPerson />,
	onResetInputhValue: () => alert('reset field'),
};

export const secondComponent = Template.bind({});
secondComponent.args = {
	'aria-label': 'First Name',
	placeholder: 'Ayman',
	hint: 'your first name',
	isValid: false,
	error: 'required',
	icon: <BsPerson />,
};

export const thiredComponent = Template.bind({});
thiredComponent.args = {
	'aria-label': 'First Name',
	placeholder: 'Ayman',
	isValid: true,
	icon: <BsPerson />,
};
