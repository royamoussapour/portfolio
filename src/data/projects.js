import theScreeningRoom from '../assets/theScreeningRoom.jpg';
import cowboysVsAliens from '../assets/cowboysVsAliens.jpg';
import artworked from '../assets/artworked.jpg';
import noted from '../assets/noted.gif';
import theOverlook from '../assets/theOverlook.gif';

const projects = [
	{
		id: 1,
		title: 'The Screening Room',
		description:
			'A simplified movie hub. Search for movies or discover new ones. Watch trailers, ratings, summaries, and more. If you like a movie create an account or login to add it to your watchlist and come back to them wherever you are, on any device.',
		repoLink: 'https://github.com/edwindelbosque/the-screening-room',
		deployLink: 'https://the-screening-room.herokuapp.com',
		image: theScreeningRoom,
		technologies1: ['React', 'Redux', 'Router', 'Jest & Enzyme'],
		technologies2: ['Node.js', 'Express', 'PostgreSQL', 'TheMovieDB API']
	},
	{
		id: 2,
		title: 'Artworked',
		description:
			'I built this app to solve my own personal problem finding good quality artworks for my music library. Artworked allows you to search and download all iTunes artworks in their original quality. As a last minute extra, it also plays previews.',
		repoLink: 'https://github.com/edwindelbosque/artworked',
		deployLink: 'https://edwindelbosque.github.io/artworked/',
		image: artworked,
		technologies1: ['React', 'Redux', 'Router'],
		technologies2: ['Sketch', 'iTunes API', 'Jest & Enzyme']
	},
	{
		id: 3,
		title: 'The Overlook',
		description:
			'A web app built to help hotel staff manage customers, bookings, bills, and room services. Heavy data manipulation with dates and booking availabilities.',
		repoLink: 'https://github.com/edwindelbosque/TheOverlook',
		deployLink: 'https://edwindelbosque.github.io/TheOverlook/',
		image: theOverlook,
		technologies1: ['jQuery', 'SCSS', 'HTML5', 'Webpack'],
		technologies2: ['Mocha', 'Chai', 'Spies', 'Sketch']
	},
	{
		id: 4,
		title: 'Noted.',
		description:
			'A vanilla JS to-do list web app. Create to-do lists and mark them as important so you can then filter them and search for to-do lists. The to-do lists are saved via localStorage. Optimized for all devices.',
		repoLink: 'https://github.com/edwindelbosque/Noted',
		deployLink: 'https://edwindelbosque.github.io/Noted/',
		image: noted,
		technologies1: ['HTML5', 'CSS'],
		technologies2: ['Vanilla JS', 'localStorage']
	},
	{
		id: 5,
		title: 'Cowboys VS Aliens',
		description:
			'A game based on the TV game show Family Feud, but with an Aliens vs Cowboys twist. This was built with another three developers and we implemented Object-Oriented Proggraming classes in jQuery.',
		repoLink: 'https://github.com/edwindelbosque/Cowboys-vs-Aliens',
		deployLink: 'https://edwindelbosque.github.io/Cowboys-vs-Aliens/',
		image: cowboysVsAliens,
		technologies1: ['jQuery', 'SCSS', 'Mocha', 'Chai'],
		technologies2: ['Spies', 'API', 'Skecth']
	}
];

export default projects;
