import React from 'react';
import './Home.scss';
import Fade from 'react-reveal/Fade';

const Home = () => {
	const name = 'Edwin Del Bosque';
	const resumeUrl =
		'https://drive.google.com/file/d/1chASHFpluX-qjsR6V6qEodo6sGGXQqAU/view';

	return (
		<>
			<Fade cascade delay={600}>
				<section className='title-section'>
					<p className='introduction'>Hello! ¡Hola! My name is</p>
					<h1>{name}.</h1>
					<h1 className='sub-header-title'>Building things for the web.</h1>
					<p className='description-title'>
						I'm a{' '}
						<span>
							<b>Front-End Engineer</b>
						</span>{' '}
						and UI design enthusiast based in Denver, CO (but open to new
						adventures!) My areas of expertise are JavaScript ES6+, UX/UI
						Design, and Test-Driven Development.
					</p>
					<div>
						<Fade bottom cascade delay={800}>
							<a href='mailto:edwinbosq@gmail.com' className='button-link'>
								<button className='contact-button'>Get In Touch</button>
							</a>
							<a
								href={resumeUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='button-link'>
								<button className='contact-button'>Resume</button>
							</a>
						</Fade>
					</div>
				</section>
			</Fade>
			<div className='orb'></div>
		</>
	);
};

export default Home;
