import React from 'react';
import './NavigationBar.scss';

const NavigationBar = () => {
	return (
		<>
			<div className='logo'>
				<p>
					EDWIN <span>DEL</span> BOSQUE
				</p>
			</div>
			<ul className='navigation-ul'>
				<li>Home</li>
				<li>Projects</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</>
	);
};

export default NavigationBar;
