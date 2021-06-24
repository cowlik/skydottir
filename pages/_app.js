import 'styles/globals.scss';
import Head from 'next/head';
import Bg from 'components/Bg';
import Layout from 'components/Layout';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faEtsy, faFacebook, faInstagram, faLinkedin, faPatreon, faPinterest, faSpotify, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

config.autoAddCss = false;
library.add(faEtsy, faFacebook, faInstagram, faLinkedin, faPatreon, faPinterest, faSpotify, faTwitter, faYoutube, faEnvelope);

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='google-site-verification' content='ugxN_VLIBklsa6SHNcLAVU7j0M67BHJfn2v0_5kRhwY' />

				<title>Skydottir</title>

				<link rel='icon' href={`${process.env.baseDomain}/favicon.png`} />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap'></link>
				<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.15.3/css/svg-with-js.css'></link>

				<meta property='fb:app_id' content={process.env.facebookId} />
				<meta property='og:description' content='' />
				<meta property='og:image' content={`${process.env.baseDomain}/assets/imgs/card-facebook.png`} />
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />
				<meta property='og:image:alt' content='Skydottir' />
				<meta property='og:title' content='Skydottir' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content={process.env.baseDomain} />

				<script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.googleAnalyticsId}`}></script>
				<script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag() {dataLayer.push(arguments);}; gtag('js', new Date()); gtag('config', '${process.env.googleAnalyticsId}', {page_path: window.location.pathname});` }} />
			</Head>
			<Bg />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
