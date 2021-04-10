import styles from './Hero.module.scss';
import Button from 'components/Button';

const Hero = (props) => {
	return (
		<section className={styles.container}>
			<header>
				<img src={`${process.env.NEXT_PUBLIC_IMAGES_FOLDER}logo-epic-cookies.svg`} width='256' height='78' alt='Skydottir Epic Cookies' />
			</header>
			<article>
				<p>Smell good enough to eat with Skydottir Epic Cookies "Old School Chocolate Chip" cookie-scented oil! Organic plant extract spiked with the epicness of freshly baked Skydottir "Old School Chocolate Chip" cookies. Vegan / Paraben-Free. The perfect way to smell like freshly baked cookies anywhere, anytime. Cookie perfume is all hand-blended in microbatches in our cookie hometown Seattle, WA.</p>
			</article>
			<footer>
				{props.cta.map((item, i) => (
					<Button cta={item} key={i} />
				))}
			</footer>
		</section>
	);
};

export default Hero;
