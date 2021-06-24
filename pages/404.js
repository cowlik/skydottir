import Head from 'next/head';
import Button from 'components/Button';

export default function Error404() {
	return (
		<>
			<Head>
				<title>Skydottir - 404</title>
			</Head>
			<main>
				<h1>404 - Not Found</h1>
				<br />
				<Button cta={{ text: 'Home', link: '/' }} />
			</main>
		</>
	);
}
