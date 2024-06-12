import {
	FontFamiliesClasses,
	fontFamilyClasses,
} from 'src/constants/articleProps';

/** Так выглядят typeGuards в ts, он позволяет нам определить является ли переменная определенным типом.
 * Подробнее о них можно почитать тут - https://www.typescriptlang.org/docs/handbook/advanced-types.html */
export function isFontFamilyClass(
	family?: string | FontFamiliesClasses
): family is FontFamiliesClasses {
	return fontFamilyClasses.includes(family as FontFamiliesClasses);
}
