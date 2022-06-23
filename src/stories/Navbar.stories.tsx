import { Story, Meta } from '@storybook/react';

import Navbar from '../components/Navbar';

export default {
	title: 'Components/Navbar',
	component: Navbar,
} as Meta;

const Template: Story = () => <Navbar />;

export const component = Template.bind({});
component.args = {};
