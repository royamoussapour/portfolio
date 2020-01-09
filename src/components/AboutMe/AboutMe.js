import React from 'react';
import './AboutMe.scss';
import headshot from '../../assets/headshot.jpg';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
	return (
		<main className='AboutMe' name='AboutMe'>
			<Fade cascade>
				<Fade bottom></Fade>
				<section className='about-box'>
					<section className='about-description'>
						<h2>
							<span>01. </span>About Me
						</h2>
						<p>
							I'm a 24-year-old finance graduate and front-end engineer,
							originally from California, who has a passion for building and
							experimenting with different web technologies. I like to design
							and build smart, eye-catching and pixel-perfect user interfaces
							with robust functionalities.
						</p>
						<p>
							Shortly after graduating from{' '}
							<a
								href='https://regis.edu'
								target='_blank'
								rel='noopener noreferrer'
								className='hyperlink'>
								Regis University
							</a>
							, I joined the intensive (and extensive) Front-End Engineering
							program at{' '}
							<a
								href='https://turing.io'
								target='_blank'
								rel='noopener noreferrer'
								className='hyperlink'>
								Turing School of Software & Design{' '}
							</a>{' '}
							where I worked on fast-paced, cross-functional teams for 8 months
							on a wide palette of projects using different frameworks and
							languages that pushed myself everyday.
						</p>
						<p>Here are a few technologies I've been working with recently:</p>
						<section className='skills'>
							<ul>
								<li>
									<span>▹</span> JavaScript <span className='es6'>(ES6+)</span>
								</li>
								<li>
									<span>▹</span> React & Redux
								</li>
								<li>
									<span>▹</span> HTML & (S)CSS
								</li>
								<li>
									<span>▹</span> Chai & Mocha
								</li>
							</ul>
							<ul>
								<li>
									<span>▹</span> Node.js
								</li>
								<li>
									<span>▹</span> Express
								</li>
								<li>
									<span>▹</span> PostgreSQL
								</li>
								<li>
									<span>▹</span> Jest & Enzyme
								</li>
							</ul>
						</section>
					</section>
					<section>
						<img src={headshot} alt='Headshot of Edwin' />
					</section>
				</section>
			</Fade>
		</main>
	);
};

export default AboutMe;
