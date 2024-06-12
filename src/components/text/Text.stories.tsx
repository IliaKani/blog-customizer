import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
	component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const SelectStory: Story = {
	argTypes: {
		as: {
			options: ['h1', 'h2', 'div', 'span'],
			control: { type: 'select' },
		},
		dynamic: {
			control: { type: 'boolean' },
		},
		size: {
			options: [12, 18, 22, 25, 31, 45],
			control: { type: 'select' },
		},
		weight: {
			options: [400, 800],
			control: { type: 'select' },
		},
		fontStyle: {
			options: ['italic', 'normal'],
			control: { type: 'select' },
		},
		uppercase: {
			control: { type: 'boolean' },
		},
		align: {
			options: ['center', 'left'],
			control: { type: 'select' },
		},
		family: {
			options: [
				'open-sans',
				'ubuntu',
				'cormorant-garamond',
				'days-one',
				'merriweather',
			],
			control: { type: 'select' },
		},
	},
	render: (args) => {
		return (
			<Text {...args}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, nulla.
				Itaque laudantium quas repudiandae delectus voluptates fuga veritatis.
				Necessitatibus omnis sequi repudiandae, porro est possimus ullam
				inventore dolores rem molestiae.
			</Text>
		);
	},
};
