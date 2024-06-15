import { CSSProperties, FormEvent, useState } from 'react';

import '../../styles/index.scss';
import styles from '../../styles/index.module.scss';

import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import { ArticleStateType, OptionType, defaultArticleState,  } from '../../constants/articleProps';

export const App = () => {
	const [sideBarState, setSideBarState] = useState<ArticleStateType>(defaultArticleState)
	const [state, setState] = useState(defaultArticleState)

	const changeFontFamily = (select: OptionType) => {
		setSideBarState({...sideBarState, fontFamilyOption: select})
	}

	const changeFontSize = (select: OptionType) => {
		setSideBarState({...sideBarState, fontSizeOption: select})
	}

	const changeFontColor = (select: OptionType) => {
		setSideBarState({...sideBarState, fontColor: select})
	}

	const changeContainerWidth = (select: OptionType) => {
		setSideBarState({...sideBarState, contentWidth: select})
	}

	const changeBgColor = (select: OptionType) => {
		setSideBarState({...sideBarState, backgroundColor: select})
	}

	const resetSidebarState = () => {
		setState(defaultArticleState);
		setSideBarState(defaultArticleState)
	}

	const applySideBarState = (event: FormEvent) => {
		event.preventDefault();
		setState(sideBarState);
	}

	return (
		<main
			className = {styles.main}
			style = {
				{
					'--font-family': state.fontFamilyOption.value,
					'--font-size': state.fontSizeOption.value,
					'--font-color': state.fontColor.value,
					'--container-width': state.contentWidth.value,
					'--bg-color': state.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm 
				fontFamily = {changeFontFamily}
				fontSize = {changeFontSize}
				fontColor = {changeFontColor}
				backgroundColor = {changeBgColor}
				contentWidth = {changeContainerWidth} 
				resetButton = {resetSidebarState}
				applyButton = {applySideBarState}
				sideBarState = {sideBarState}			
			/>
			<Article />
		</main>
	);
};