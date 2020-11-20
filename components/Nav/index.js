import styles from './Nav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from 'hooks/useFetch';

const Nav = () => {
	const { response, error } = useFetch(
		`${process.env.NEXT_PUBLIC_CONTENT_FOLDER}nav.json`
	);

	return (
		<nav className={styles.container}>
			{error && <p>{error.name}</p>}
			<ul>
				{response &&
					response.map((item, i) => (
						<li key={i}>
							<a
								href={item.url}
								title={item.title}
								target='_blank'
							>
								<FontAwesomeIcon
									icon={[item.icon.prefix, item.icon.name]}
								/>
							</a>
						</li>
					))}
			</ul>
		</nav>
	);
};

export default Nav;

/*
 *  Markdown
 * 
//import Markdown from 'react-markdown';

return (
	<nav className={styles.container}>
		{error && <p>{error.name}</p>}
		<Markdown>{response}</Markdown>
	</nav>
);
*/
