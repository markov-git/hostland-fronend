export function getRealUrl(url: string) {
	if (process.env.NODE_ENV === 'development') {
		return `https://markov-msk.ru${url}`;
	} else return url;
}