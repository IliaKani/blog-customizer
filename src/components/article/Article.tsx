import clsx from 'clsx';

// We tell webpack that this file uses this image.
import plane from 'src/images/plane.png';
import { Text } from 'components/text';

import styles from './Article.module.scss';

export const Article = () => {
	return (
		<article className={clsx(styles.article)}>
			<Text as='h1' size={45} weight={800} uppercase dynamicLite>
				Portrait of Western Switzerland
			</Text>
			<div className={styles.titleDescription}>
				<Text size={22} weight={800} uppercase align='center' dynamicLite>
					Primitivist Fishtr paints a new budget airliner
				</Text>
			</div>
			<img className={styles.image} src={plane} alt='Картинка самолета' />
			<Text dynamic size={18} fontStyle='italic'>
				Photo: Hans-Peter Gauster , &quot;Bombardier CSeries CS300 HB-JCA&quot; ©
				2017 CC BY-SA 2.0
			</Text>
			<Text dynamic size={18}>
				At the end of 2016, the Swiss airline Swiss received its first
				Canadian Bombardier CS300 for short and medium range flights. To
				give the new 145-seater a unique personality, livery
				commissioned a painter. Provided that he completes the sketch alone and
				he will personally correct the painting when it is applied to the fuselage.
			</Text>
			<Text dynamic size={18}>
				The choice fell on the primitivist Matthias Forbash, working under the pseudonym
				Fishtr. He was given the task of portraying the best in the French-speaking
				parts of Switzerland - mountains, lakes, wines, cheeses, friendliness and freedom.
				The order was completed in record time, in just 5 months. Airplane
				turned out to look like the artist himself: just as good-natured and with a smile
				to the ears.
			</Text>
			<Text dynamic size={18}>
				Since May 2017, &quot;Bombardier&quot; bears the name &quot;Swiss
				Romandie&quot;  and registration number HB-JCA; makes an average of 4
				commercial flights per day. You can see it at the airports of Paris, Valencia, Krakow, Berlin, Vienna, Zagreb,
				on Mallorca, Crete and Sicily. The aircraft will remain in the same livery until
				another airline will buy it.
			</Text>
		</article>
	);
};
