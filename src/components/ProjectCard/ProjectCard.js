import React from 'react';
import './ProjectCard.scss';

const ProjectCard = project => {
	const {
		title,
		description,
		technologies,
		repoLink,
		deployLink,
		image
	} = project;
	return (
		<div className='ProjectCard'>
			<img src={image} alt={`Screenshot of ${title}`} />
			<section className='card-text'>
				<h3>{title}</h3>
				<p>{description}</p>
			</section>
		</div>
	);
};

export default ProjectCard;
