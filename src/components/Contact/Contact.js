import React from 'react';
import './Contact.scss';
import Fade from 'react-reveal/Fade';

const Contact = () => {
	return (
		<Fade cascade>
			<main className='Contact' name='Contact'>
				<h2>
					<span>04. Let's Make Magic!</span>Get In Touch
				</h2>
				<p>Interested in working together?</p>
				<p>Feel free to contact me for any project or collaboration.</p>
				<a href='mailto:edwinbosq@gmail.com' className='email-button'>
					<svg
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
						xlink='http://www.w3.org/1999/xlink'
						x='0px'
						y='0px'
						viewBox='0 0 294.4003906 195.4003906'
						space='preserve'>
						<g>
							<path
								class='st0'
								d='M0,0v195.4003906h294.4003906V0H0z M282.4003906,183.4003906H12V12h270.4003906V183.4003906z'></path>
							<polygon
								class='st0'
								points='221.0522461,71.7148438 213.1479492,62.6855469 145.7451172,121.6865234 79.902832,62.7304688
            71.8979492,71.6699219 145.6552734,137.7138672 	'></polygon>
						</g>
					</svg>
				</a>
			</main>
		</Fade>
	);
};

export default Contact;
