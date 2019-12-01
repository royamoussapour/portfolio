import React, { Component } from 'react';
import './NavigationBar.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

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
					<p>EDWIN DEL BOSQUE</p>
				</div>
				<ul
					className={`navigation-ul ${this.state.isActive &&
						'navigation-ul-active'}`}>
					<Link
						activeClass='active'
						to='Home'
						spy={true}
						smooth={true}
						offset={-30}
						duration={1200}>
						<li onClick={() => this.closeMobileMenu()}>Home</li>
					</Link>
					<Link
						activeClass='active'
						to='AboutMe'
						spy={true}
						smooth={true}
						offset={60}
						duration={1200}>
						<li onClick={() => this.closeMobileMenu()}>About</li>
					</Link>
					<Link
						activeClass='active'
						to='Projects'
						spy={true}
						smooth={true}
						offset={-150}
						duration={1200}>
						<li onClick={() => this.closeMobileMenu()}>Projects</li>
					</Link>
					<Link
						activeClass='active'
						to='Footer'
						spy={true}
						smooth={true}
						offset={-600}
						duration={1200}>
						<li onClick={() => this.closeMobileMenu()}>Contact</li>
					</Link>
				</ul>
			</nav>
		);
	}
}

export default NavigationBar;
