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
		{ title: '1 опция', value: '1 опция', className: '' },
		{ title: '2 опция', value: '2 опция', className: '' },
		{ title: '3 опция', value: '3 опция', className: '' },
		{ title: '4 опция', value: '4 опция', className: '' },
	];
	const [selected, setSelected] = useState(options[0]);

	return (
		<>
			<Select
				selected={selected}
				onChange={setSelected}
				options={options}
				title='Название радиогруппы'
			/>
		</>
	);
};

export const SelectStory: Story = {
	render: () => <SelectWithState />,
};
