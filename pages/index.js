import styles from 'styles/Home.module.scss';
import Markdown from 'react-markdown';
import useFetch from 'hooks/useFetch';
import Hero from 'components/Hero';
import Button from 'components/Button';

export default function Home() {
	return (
		<main className={styles.container}>
			<Intro />
			<hr></hr>
			<Hero>
				<Button color={'blue'} cta={{ text: 'Get Recipe', link: `${process.env.pdfsPath}Skydottir-Homestyle-DIY-Cookie-Recipe.pdf` }} target={'_blank'}></Button>
				<Button color={'blue'} cta={{ text: 'Shop Etsy', link: 'https://www.etsy.com/shop/skydottir/' }} target={'_blank'}></Button>
			</Hero>
		</main>
	);
}

const Intro = () => {
	const { response, error } = useFetch(`${process.env.contentPath}home/intro.md`);

	return (
		<>
			<section className={styles.intro}>
				{error && <p>{error.name}</p>}
				<Markdown>{response}</Markdown>
			</section>
		</>
	);
};
