import styles from './Button.module.scss';
import Link from 'next/link';

const Button = (props) => {
	return (
		<Link href={props.cta.link}>
			<a className={`${styles.container} ${props.color ? styles[props.color] : ''}`} target={props.target}>
				{props.cta.text}
			</a>
		</Link>
	);
};

export default Button;
