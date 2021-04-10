import styles from 'styles/Home.module.scss';
import Markdown from 'react-markdown';
import useFetch from 'hooks/useFetch';
import Hero from 'components/Hero';

export default function Home() {
	return (
		<main className={styles.container}>
			<Intro />
			<hr></hr>
			<Hero
				cta={[
					{ text: 'Get Recipe', link: `${process.env.NEXT_PUBLIC_PDFS_FOLDER}Skydottir-Homestyle-DIY-Cookie-Recipe.pdf` },
					{ text: 'Shop Etsy', link: 'https://www.etsy.com/shop/skydottir/' },
				]}
			/>
		</main>
	);
}

const Intro = () => {
	const { response, error } = useFetch(`${process.env.NEXT_PUBLIC_CONTENT_FOLDER}home/intro.md`);

	return (
		<>
			<section className={styles.intro}>
				{error && <p>{error.name}</p>}
				<Markdown>{response}</Markdown>
			</section>
		</>
	);
};
