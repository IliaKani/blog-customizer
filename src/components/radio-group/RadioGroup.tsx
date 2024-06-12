import { OptionType } from 'src/constants/articleProps';
import { Text } from 'components/text';
import { Option } from './Option';

import styles from './RadioGroup.module.scss';

type RadioGroupProps = {
	name: string;
	options: OptionType[];
	selected: OptionType;
	onChange?: (value: OptionType) => void;
	title: string;
};

export const RadioGroup = (props: RadioGroupProps) => {
	const { name, options, selected, onChange, title } = props;

	const handleChange = (option: OptionType) => onChange?.(option);

	return (
		<div className={styles.container}>
			{title && (
				<>
					<Text weight={800} size={12} uppercase>
						{title}
					</Text>
				</>
			)}
			<div className={styles.group}>
				{options.map((option) => (
					<Option
						key={option.value}
						groupName={name}
						value={option.value}
						title={option.title}
						selected={selected}
						onChange={() => handleChange(option)}
						option={option}
					/>
				))}
			</div>
		</div>
	);
};
