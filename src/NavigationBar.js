import React, { Component } from 'react';
import './NavigationBar.scss';

class NavigationBar extends Component {
	constructor() {
		super();
		this.state = {
			isActive: false
		};
	}

	toggleMobileMenu = () => {
		this.setState(prevState => ({
			isActive: !prevState.isActive
		}));
	};

	closeMobileMenu = () => {
		this.setState({ isActive: false });
	};

	render() {
		return (
			<nav>
				<div
					className={`hamburger-menu ${this.state.isActive &&
						'hamburger-menu-active'}`}
					onClick={() => this.toggleMobileMenu()}>
					<div className='bar-1'></div>
					<div className='bar-2'></div>
					<div className='bar-3'></div>
				</div>
				<div className='logo'>
					<p>
						EDWIN <span>DEL</span> BOSQUE
					</p>
				</div>
				<ul
					className={`navigation-ul ${this.state.isActive &&
						'navigation-ul-active'}`}>
					<li onClick={() => this.closeMobileMenu()}>Home</li>
					<li onClick={() => this.closeMobileMenu()}>Projects</li>
					<li onClick={() => this.closeMobileMenu()}>About</li>
					<li onClick={() => this.closeMobileMenu()}>Contact</li>
				</ul>
			</nav>
		);
	}
}

export default NavigationBar;
