import React from 'react';
import './App.scss';
import NavigationBar from '../NavigationBar/NavigationBar';
import AboutMe from '../AboutMe/AboutMe';
import Socials from '../Socials/Socials';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Work from '../Work/Work';
import Home from '../Home/Home';
import jobs from '../../data/jobs';

const App = () => {
	return (
		<>
			<main name='Home'>
				<NavigationBar />
				<Home />
			</main>
			<AboutMe />
			<Projects />
			<Work data={jobs} />
			<Contact />
			<Socials />
			<Footer />
		</>
	);
};

export default App;
