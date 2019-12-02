import React, { Component } from 'react';
import './NavigationBar.scss';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Headroom from 'react-headroom';

class NavigationBar extends Component {
	constructor() {
		super();
		this.state = {
			isActive: false,
			isTop: true
		};
	}

	componentDidMount = () => {
		window.addEventListener('scroll', this.handleScroll, { passive: true });
	};

	handleScroll = () => {
		this.setState({ isActive: false });
		window.pageYOffset >= 70
			? this.setState({ isTop: false })
			: this.setState({ isTop: true });
		console.log(this.state.isTop);
	};

	toggleMobileMenu = () => {
		this.setState(prevState => ({
			isActive: !prevState.isActive
		}));
	};

	closeMobileMenu = () => {
		this.setState({ isActive: false });
	};

	render() {
		const { isActive, isTop } = this.state;

		return (
			<>
				<div
					className={`blur-hide ${isActive && 'blur-show'}`}
					onClick={() => this.closeMobileMenu()}></div>
				<div className={`nav-wrapper-mobile ${isTop && 'navTop'}`}></div>
				<div className='nav-wrapper'>
					<Headroom disableInlineStyles>
						<Fade delay={600}>
							<nav>
								<div
									className={`hamburger-menu ${isActive &&
										'hamburger-menu-active'}`}
									onClick={() => this.toggleMobileMenu()}>
									<div className='bar-1'></div>
									<div className='bar-2'></div>
									<div className='bar-3'></div>
								</div>
								<div className='logo'>
									<p>EDWIN DEL BOSQUE</p>
								</div>
								<Fade top cascade delay={600}>
									<ul
										className={`navigation-ul ${isActive &&
											'navigation-ul-active'}`}>
										<Link
											activeClass='active-scroll'
											to='Home'
											spy={true}
											smooth={true}
											offset={-34}
											ignoreCancelEvents={true}
											duration={1200}>
											<li onClick={() => this.closeMobileMenu()}>
												<span>01.</span>Home
											</li>
										</Link>
										<Link
											to='AboutMe'
											spy={true}
											smooth={true}
											offset={60}
											ignoreCancelEvents={true}
											duration={1200}>
											<li onClick={() => this.closeMobileMenu()}>
												<span>02.</span>About
											</li>
										</Link>
										<Link
											to='Projects'
											spy={true}
											smooth={true}
											offset={0}
											ignoreCancelEvents={true}
											duration={1200}>
											<li onClick={() => this.closeMobileMenu()}>
												<span>03.</span>Projects
											</li>
										</Link>
										<Link
											to='Footer'
											spy={true}
											smooth={true}
											offset={-600}
											ignoreCancelEvents={true}
											duration={1200}>
											<li onClick={() => this.closeMobileMenu()}>
												<span>04.</span>Contact
											</li>
										</Link>
									</ul>
								</Fade>
							</nav>
						</Fade>
					</Headroom>
				</div>
			</>
		);
	}
}

export default NavigationBar;
