import theScreeningRoom from '../assets/theScreeningRoom.jpg';
import cowboysVsAliens from '../assets/cowboysVsAliens.jpg';
import artworked from '../assets/artworked.jpg';
import noted from '../assets/noted.jpg';
import theOverlook from '../assets/theOverlook.jpg';
import picasso from '../assets/picasso.jpg';

const projects = [
	{
		id: 1,
		title: 'Picasso | Smart Color Picker (in development)',
		description:
			'A full-stack web app color picker with back-end and front-end built from the ground up in collaboration with Matt Malone (Full-Stack Dev). Heavy RESTful API development design. 90% testing coverage on the back-end. Create an account or login to create and save your smartly fetched color palettes that actually look good!',
		repoLink: 'https://github.com/edwindelbosque/picasso-fe',
		deployLink: 'http://colorsbypicasso.herokuapp.com',
		image: picasso,
		role: 'Full-Stack Engineer / UI Designer',
		weekDuration: 'In development - 2',
		technologies1: ['React', 'Hooks', 'Knex', 'Travis CI'],
		technologies2: ['Node.js', 'Express', 'PostgreSQL', 'Jest']
	},
	{
		id: 2,
		title: 'The Screening Room',
		description:
			'A simplified movie hub. Search for movies or discover new ones. Watch trailers, ratings, summaries, and more. If you like a movie create an account or login to add it to your watchlist and come back to them wherever you are, on any device.',
		repoLink: 'https://github.com/edwindelbosque/the-screening-room',
		deployLink: 'https://the-screening-room.herokuapp.com',
		image: theScreeningRoom,
		role: 'Full-Stack Engineer / UI Designer',
		weekDuration: 3,
		technologies1: ['React', 'Redux', 'Router', 'Jest & Enzyme'],
		technologies2: ['Node.js', 'Express', 'PostgreSQL', 'TheMovieDB API']
	},
	{
		id: 3,
		title: 'Artworked',
		description:
			'I built this app to solve my own personal problem finding good quality artworks for my music library. Artworked allows you to search and download all iTunes artworks in their original quality. As a last minute extra, it also plays previews.',
		repoLink: 'https://github.com/edwindelbosque/artworked',
		deployLink: 'https://edwindelbosque.github.io/artworked/',
		image: artworked,
		role: 'Front-End Engineer / UI Designer',
		weekDuration: 1,
		technologies1: ['React', 'Redux', 'Router'],
		technologies2: ['Sketch', 'iTunes API', 'Jest & Enzyme']
	},
	{
		id: 4,
		title: 'The Overlook Management',
		description:
			'A web app built to help hotel staff manage customers, bookings, bills, and room services. It was this project that I developed a passion for heavy data manipulation.',
		repoLink: 'https://github.com/edwindelbosque/TheOverlook',
		deployLink: 'https://edwindelbosque.github.io/TheOverlook/',
		image: theOverlook,
		role: 'Front-End Engineer',
		weekDuration: 1,
		technologies1: ['jQuery', 'SCSS', 'HTML5', 'Webpack'],
		technologies2: ['Mocha', 'Chai', 'Spies', 'Sketch']
	},
	{
		id: 5,
		title: 'Cowboys VS Aliens',
		description:
			'A game based on the TV game show Family Feud, but with an Aliens vs Cowboys twist. This was done in collaboration with another three developers. We also built it implementing OOP structured classes in jQuery.',
		repoLink: 'https://github.com/edwindelbosque/Cowboys-vs-Aliens',
		deployLink: 'https://edwindelbosque.github.io/Cowboys-vs-Aliens/',
		image: cowboysVsAliens,
		role: 'Front-End Engineer / UI Designer',
		weekDuration: 2,
		technologies1: ['jQuery', 'SCSS', 'Mocha', 'Chai'],
		technologies2: ['Spies', 'API', 'Skecth']
	},
	{
		id: 6,
		title: 'Noted.',
		description:
			'A vanilla JS to-do list web app. Create to-do lists and mark them as important so you can then filter them and search for to-do lists. The to-do lists are saved via localStorage. Optimized for all devices.',
		repoLink: 'https://github.com/edwindelbosque/Noted',
		deployLink: 'https://edwindelbosque.github.io/Noted/',
		image: noted,
		role: 'Front-End Engineer / UI Designer',
		weekDuration: 1,
		technologies1: ['HTML5', 'CSS'],
		technologies2: ['Vanilla JS', 'localStorage']
	}
];

export default projects;
