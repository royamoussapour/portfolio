import React, { Component } from 'react';
import './ContactForm.scss';

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: ''
		};
	}

	render() {
		const { status } = this.state;
		return (
			<form
				className='ContactForm'
				onSubmit={this.submitForm}
				action='https://formspree.io/mpzdzbnw'
				method='POST'>
				<label>Full Name:</label>
				<input type='text' name='name' />
				<label>Email:</label>
				<input type='email' name='email' />
				<label className='message'>Message:</label>
				<h4>Hello Edwin,</h4>
				<textarea type='text' name='message'></textarea>
				{status === 'SUCCESS' ? <p>Thanks!</p> : <button>Send</button>}
				{status === 'ERROR' && <p>Ooops! There was an error.</p>}
			</form>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: 'SUCCESS' });
			} else {
				this.setState({ status: 'ERROR' });
			}
		};
		xhr.send(data);
	}
}

export default ContactForm;