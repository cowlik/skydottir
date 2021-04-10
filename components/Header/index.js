import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
	return (
		<header className={styles.container}>
			<Link href='/'>
				<a title='Home'>
					<img src='./assets/images/logo.svg' width='405' height='307' alt='Skydottir Productions' />
				</a>
			</Link>
		</header>
	);
};

export default Header;
