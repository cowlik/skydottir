import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.container}>
			<img
				src='./assets/images/logo.svg'
				width='405'
				height='307'
				alt='Skydottir Productions'
			/>
		</header>
	);
};

export default Header;
