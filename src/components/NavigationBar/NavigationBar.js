import React, { Component } from 'react';
import './NavigationBar.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
import Headroom from 'react-headroom';

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
			<>
				<div className='nav-wrapper-mobile'></div>
				<div className='nav-wrapper'>
					<Headroom disableInlineStyles>
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
									activeClass='active-scroll'
									to='Home'
									spy={true}
									smooth={true}
									offset={-30}
									ignoreCancelEvents={true}
									duration={1200}>
									<li onClick={() => this.closeMobileMenu()}>Home</li>
								</Link>
								<Link
									to='AboutMe'
									spy={true}
									smooth={true}
									offset={60}
									ignoreCancelEvents={true}
									duration={1200}>
									<li onClick={() => this.closeMobileMenu()}>About</li>
								</Link>
								<Link
									to='Projects'
									spy={true}
									smooth={true}
									offset={0}
									ignoreCancelEvents={true}
									duration={1200}>
									<li onClick={() => this.closeMobileMenu()}>Projects</li>
								</Link>
								<Link
									to='Footer'
									spy={true}
									smooth={true}
									offset={-600}
									ignoreCancelEvents={true}
									duration={1200}>
									<li onClick={() => this.closeMobileMenu()}>Contact</li>
								</Link>
							</ul>
						</nav>
					</Headroom>
				</div>
			</>
		);
	}
}

export default NavigationBar;
