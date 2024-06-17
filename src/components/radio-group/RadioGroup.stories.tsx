import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './RadioGroup';
import { useState } from 'react';

const meta: Meta<typeof RadioGroup> = {
	component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const RadioGroupWithState = () => {
	const options = [
		{ title: '1 option', value: '1 option', className: '' },
		{ title: '2 option', value: '2 option', className: '' },
		{ title: '3 option', value: '3 option', className: '' },
		{ title: '4 option', value: '4 option', className: '' },
	];
	const [selected, setSelected] = useState(options[0]);

	return (
		<>
			<RadioGroup
				selected={selected}
				name='radio'
				onChange={setSelected}
				options={options}
				title='Radio group name'
			/>
		</>
	);
};

export const RadioGroupStory: Story = {
	render: () => <RadioGroupWithState />,
};
