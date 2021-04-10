import styles from './Button.module.scss';

const Button = (props) => {
	return (
		<a className={styles.container} href={props.cta.link} target='_blank'>
			{props.cta.text}
		</a>
	);
};

export default Button;
