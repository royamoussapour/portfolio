import React from 'react';
import './Contact.scss';
import Fade from 'react-reveal/Fade';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
	return (
		<Fade cascade>
			<main className='Contact' name='Contact'>
				<h2>
					<span>04. Contact</span>Get In Touch
				</h2>
				<p>
					Although I'm currently not looking for job opportunities, my inbox is
					always open!
				</p>
				<ContactForm />
			</main>
		</Fade>
	);
};

export default Contact;
