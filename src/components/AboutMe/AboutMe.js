import React from 'react';
import './AboutMe.scss';
import headshot from '../../assets/headshot.jpg';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
	return (
		<main className='AboutMe' name='AboutMe'>
			<Fade bottom cascade>
				<Fade bottom>
					<h2>
						<span>02. </span>About Me
					</h2>
				</Fade>
				<section className='about-box'>
					<section className='about-description'>
						<p>
							I have a passion for developing eye-catching websites and web apps
							that provide intuitive, pixel-perfect user interfaces with
							efficient functionalities and modern backends.
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
							, I joined the Front-End Engineering program at{' '}
							<a
								href='https://turing.io'
								target='_blank'
								rel='noopener noreferrer'
								className='hyperlink'>
								Turing School of Software & Design{' '}
							</a>{' '}
							where I worked on a wide variety of interesting and meaningful
							projects on a daily basis.
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
