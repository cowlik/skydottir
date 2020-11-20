import 'styles/globals.scss';
import Bg from 'components/Bg';
import Layout from 'components/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(fab, faEnvelope);

export default function App({ Component, pageProps }) {
	return (
		<>
			<Bg />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
