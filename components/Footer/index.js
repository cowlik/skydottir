import styles from './Footer.module.scss';

const Footer = () => {
	return <footer className={styles.container}>&copy;{new Date().getFullYear()}</footer>;
};

export default Footer;
