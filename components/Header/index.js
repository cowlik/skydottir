import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
	return (
		<header className={styles.container}>
			<Link href='/' shallow>
				<a title='Home'>
					<img className={styles.logo} src={`${process.env.imgsPath}logo.svg`} width='405' height='307' alt='Skydottir Productions' />
				</a>
			</Link>
		</header>
	);
};

export default Header;
