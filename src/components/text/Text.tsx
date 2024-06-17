import { ElementType, ReactNode } from 'react';
import { clsx } from 'clsx';
import { FontFamiliesClasses } from 'src/constants/articleProps';

import styles from './index.module.scss';

type TextProps = {
    /** The text to be displayed */
    children: ReactNode;
    /** The tag to render the text with */
    as?: ElementType;
    /** Boolean prop, should the text change depending on the config */
    dynamic?: boolean;
    /** Font size */
    size?: 12 | 18 | 22 | 25 | 31 | 45;
    /** Font weight */
    weight?: 400 | 800;
    /** Font style */
    fontStyle?: 'italic' | 'normal';
    /** Boolean prop, should the text be in uppercase */
    uppercase?: boolean;
    /** Text alignment */
    align?: 'center' | 'left';
    /** Text font-family */
    family?: FontFamiliesClasses;
    /** Boolean prop, makes only the font family and color dynamic */
    dynamicLite?: boolean;
};

export const Text = ({
	children,
	as: Tag = 'div',
	size = 18,
	dynamic = false,
	weight = 400,
	fontStyle = 'normal',
	uppercase = false,
	align = 'left',
	family = 'open-sans',
	dynamicLite = false,
}: TextProps) => {
	const className = clsx(
		styles.text,
		styles[`size${size}`],
		{ [styles.dynamic]: dynamic },
		styles[`weight${weight}`],
		styles[`${fontStyle}`],
		{ [styles.uppercase]: uppercase },
		styles[`${align}`],
		styles[`${family}`],
		{ [styles.dynamicLite]: dynamicLite }
	);
	return <Tag className={className}>{children}</Tag>;
};
