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
					I'm finishing up my master's in June 2021. Please reach out about any potential opportunities!
				</p>
				<ContactForm />
			</main>
		</Fade>
	);
};

export default Contact;
