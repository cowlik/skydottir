import 'styles/globals.scss';
import Bg from 'components/Bg';
import Layout from 'components/Layout';

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
