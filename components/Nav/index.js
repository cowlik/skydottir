import styles from './Nav.module.scss';
import useFetch from 'hooks/useFetch';

const Nav = () => {
	const { response, error } = useFetch('./content/nav.json');

	return (
		<nav className={styles.container}>
			{error && <p>{error.name}</p>}
			<ul>
				{response &&
					response.map((item, i) => (
						<li key={i}>
							<a href={item.url} target='_blank'>
								{item.title}
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
 * 
//import Markdown from 'react-markdown';

return (
	<nav className={styles.container}>
		{error && <p>{error.name}</p>}
		<Markdown>{response}</Markdown>
	</nav>
);
*/
