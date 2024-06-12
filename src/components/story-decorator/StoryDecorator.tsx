import { Decorator } from '@storybook/react';
import styles from './StoryDecorator.module.scss';

export const StoryDecorator: Decorator = (Story) => (
	<div className={styles.storybookContainer}>
		<Story />
	</div>
);
