import React from 'react';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className='Footer' name='Footer'>
			<p>
				Based in{' '}
				<a
					href='https://brittanychiang.com'
					target='_blank'
					rel='noopener noreferrer'>
					Brittany C
				</a>
				's Design | Built by Edwin.
			</p>
		</footer>
	);
};

export default Footer;
