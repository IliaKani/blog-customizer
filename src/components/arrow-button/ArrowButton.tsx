import arrow from '../../images/arrow.svg';
import styles from './ArrowButton.module.scss';
import { useState } from 'react';
import clsx from 'clsx';


/** function for opening/closing processing forms */
export type OnClick = () => void;

export type ArrowButtonProps = {
	onClick: OnClick,
	isOpen: boolean,
}

export const ArrowButton = ({onClick, isOpen}: ArrowButtonProps) => {
	return (
		<div
			role='button'
			aria-label='Open/Close article parameters form'
			tabIndex={0}
			className={clsx(styles.container, {[styles.container_open] : isOpen})}
			onClick={onClick}
			>
			<img src={arrow} alt='arrow icon' className={clsx(styles.arrow, {[styles.arrow_open] : isOpen})} />
		</div>
	);
};