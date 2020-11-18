import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const doFetch = async () => {
			try {
				const res = await fetch(url, options);
				const text = await res.text();

				try {
					const json = JSON.parse(text);
					setResponse(json);
				} catch (err) {
					setResponse(text);
				}
			} catch (err) {
				setError(err);
			}
		};

		doFetch();
	}, []);

	return { response, error };
};

export default useFetch;
