import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
	component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const SelectWithState = () => {
	const options = [
		{ title: '1 option', value: '1 option', className: '' },
		{ title: '2 option', value: '2 option', className: '' },
		{ title: '3 option', value: '3 option', className: '' },
		{ title: '4 option', value: '4 option', className: '' },
	];
	const [selected, setSelected] = useState(options[0]);

	return (
		<>
			<Select
				selected={selected}
				onChange={setSelected}
				options={options}
				title='Radio group name'
			/>
		</>
	);
};

export const SelectStory: Story = {
	render: () => <SelectWithState />,
};
