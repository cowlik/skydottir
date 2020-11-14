import styles from './Layout.module.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Nav from 'components/Nav';

const Layout = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.columnLeft}>
				<Header />
				{props.children}
				<Footer />
			</div>
			<div className={styles.columnRight}>
				<Nav />
			</div>
		</div>
	);
};

export default Layout;
