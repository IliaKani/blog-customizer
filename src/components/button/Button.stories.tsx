import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
	render: () => {
		return (
			<>
				<Button
					title='Reset'
					type='reset'
					onClick={() => alert('click on the reset button')}
				/>
				<Button
					title='Submit'
					type='submit'
					onClick={() => alert('click on the apply button')}
				/>
			</>
		);
	},
};
