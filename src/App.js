import React from 'react';
import './App.scss';
import NavigationBar from './NavigationBar';

function App() {
	return (
		<main>
			<NavigationBar />
			<section className='title-section'>
				<p className='introduction'>Hello! ¡Holá! Bonjour! My name is</p>
				<h1>Edwin Del Bosque.</h1>
				<h1 className='sub-header-title'>I build things for the web.</h1>
				<p className='description-title'>
					I'm a <span>front-end software developer</span> based in Denver, CO
					specializing in building (and occasionally designing) exceptional,
					high-quality websites and applications.
				</p>
				<a href='mailto:edwinbosq@gmail.com'>
					<button className='contact-button'>Get in touch</button>
				</a>
				<a
					href='https://drive.google.com/file/d/1wp1hYBvpPyjSDnxtoHEar_Dnirc-U354/view?usp=sharing'
					target='_blank'
					rel='noopener noreferrer'>
					<button className='contact-button'>Resume</button>
				</a>
			</section>
		</main>
	);
}

export default App;
