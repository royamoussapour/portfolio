import React from 'react';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className='Footer' name='Footer'>
			<p>
				Design Inspired by{' '}
				<a
					href='https://github.com/bchiang7/'
					target='_blank'
					rel='noopener noreferrer'>
					Brittany{' '}
				</a>
				| Built by Edwin
			</p>
		</footer>
	);
};

export default Footer;
