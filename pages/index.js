import styles from 'styles/Home.module.scss';
import Markdown from 'react-markdown';
import useFetch from 'hooks/useFetch';

export default function Home() {
	return (
		<main className={`container ${styles.container}`}>
			<Intro />
		</main>
	);
}

const Intro = () => {
	const { response, error } = useFetch(
		`${process.env.NEXT_PUBLIC_CONTENT_FOLDER}home-intro.md`
	);

	return (
		<section className={styles.intro}>
			{error && <p>{error.name}</p>}
			<Markdown>{response}</Markdown>
		</section>
	);
};
