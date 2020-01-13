import theScreeningRoom from '../assets/theScreeningRoom.jpg';
import cowboysVsAliens from '../assets/cowboysVsAliens.jpg';
import artworked from '../assets/artworked.jpg';
import noted from '../assets/noted.jpg';
import theOverlook from '../assets/theOverlook.jpg';
import picasso from '../assets/picasso.jpg';
import communityConnect from '../assets/communityConnect.jpg';

const projects = [
	{
		id: 1,
		title: 'Picasso | Smart Color Palettes (beta)',
		description:
			'A full-stack web app color palette picker with back-end and front-end built from the ground up in collaboration with another developer. Heavy RESTful API development design. 90% testing coverage on the back-end. Create an account or login to create and save your smartly fetched color palettes that actually look good!',
		repoLink: 'https://github.com/edwindelbosque/picasso-fe',
		deployLink: 'http://colorsbypicasso.herokuapp.com',
		image: picasso,
		role: 'Full-Stack Engineer / UI Designer',
		weekDuration: 'Ongoing 3',
		technologies1: ['React', 'Hooks', 'Knex', 'Travis CI'],
		technologies2: ['Node.js', 'Express', 'PostgreSQL', 'Jest']
	},
	{
		id: 2,
		title: 'The Screening Room | Movie Hub',
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
		title: 'Community Connect Colorado',
		description:
			'A React Native mobile application where you can find all of the resources that are available to you in the state of Colorado.',
		repoLink:
			'https://github.com/Turing-MOD4-Cross-Pollination/front-end-help-yourself',
		deployLink:
			'https://github.com/Turing-MOD4-Cross-Pollination/front-end-help-yourself',
		image: communityConnect,
		role: 'Front-End Engineer / UI Designer',
		weekDuration: 3,
		technologies1: ['React', 'Native', 'Jest', 'Enzyme'],
		technologies2: ['Expo', 'Sketch', 'Redux']
	},
	{
		id: 4,
		title: 'Artworked | iTunes Artwork Finder',
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
		id: 5,
		title: 'The Overlook | Hotel Management',
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
		id: 6,
		title: 'Cowboys VS Aliens | Web Game',
		description:
			'A game based on the TV game show Family Feud, but with an Aliens vs Cowboys twist. This was done in collaboration with another three developers. We also built it implementing OOP structured classes in jQuery.',
		repoLink: 'https://github.com/edwindelbosque/Cowboys-vs-Aliens',
		deployLink: 'https://edwindelbosque.github.io/Cowboys-vs-Aliens/',
		image: cowboysVsAliens,
		role: 'Front-End Engineer / UI Designer',
		weekDuration: 2,
		technologies1: ['jQuery', 'SCSS', 'Mocha', 'Chai'],
		technologies2: ['Spies', 'API', 'Skecth']
	}
];

export default projects;
