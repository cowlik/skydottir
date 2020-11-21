import 'styles/globals.scss';
import Head from 'next/head';
import Bg from 'components/Bg';
import Layout from 'components/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faEtsy,
	faFacebook,
	faInstagram,
	faLinkedin,
	faPatreon,
	faPinterest,
	faSpotify,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(
	faEtsy,
	faFacebook,
	faInstagram,
	faLinkedin,
	faPatreon,
	faPinterest,
	faSpotify,
	faTwitter,
	faYoutube,
	faEnvelope
);

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<title>Skydottir</title>
				<link rel='icon' href='./favicon.ico' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap'
				></link>
			</Head>
			<Bg />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
