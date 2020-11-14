import styles from './Bg.module.scss';

const Bg = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.column} ${styles.columnLeft}`}></div>
			<div className={`${styles.column} ${styles.columnRight}`}></div>
		</div>
	);
};

export default Bg;
