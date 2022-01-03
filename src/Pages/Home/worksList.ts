import { WorkType } from './Components/WorkBlock';

export const worksList: WorkType[] = [
	{
		id: 0,
		url: '/maze',
		caption: 'Maze Creeper',
		description: 'Multiplayer\nSSE\nEller\'s Algorithm\nA* Algorithm',
		imgSrc: '/images/w/maze.png',
		link: { caption: 'GitHub', url: 'https://github.com/markov-git/maze-creeper' },
	}, {
		id: 1,
		url: '/vue-crypto',
		caption: 'Crypto Watcher',
		description: 'Vue 3\nWebSockets\nShared Worker\nTailwind',
		imgSrc: '/images/w/crypto.png',
		link: { caption: 'GitHub', url: 'https://github.com/markov-git/vue-crypto' },
	}, {
		id: 2,
		url: '/geekbrains-logitech',
		caption: 'Logitech challenge',
		description: 'Adaptive web page',
		imgSrc: '/images/w/logitech.png',
		link: { caption: 'GitHub', url: 'https://github.com/markov-git/logitech' },
	}, {
		id: 3,
		url: '/tictac',
		caption: 'Tic Tac Toe',
		description: 'Minimax algorithm\nMongodb',
		imgSrc: '/images/w/tictac.png',
		link: { caption: 'GitHub', url: 'https://github.com/markov-git/tictac-minimax' },
	}, {
		id: 4,
		url: '/excel',
		caption: 'Web Excel',
		description: 'Native JavaScript',
		imgSrc: '/images/w/excel.png',
		link: { caption: 'GitHub', url: 'https://github.com/markov-git/excel' },
	},
];