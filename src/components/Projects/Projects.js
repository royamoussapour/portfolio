import React from 'react';
import './Projects.scss';
import projects from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
	const cards = projects.map(project => {
		return <ProjectCard key={project.id} {...project} />;
	});

	return (
		<main className='Projects'>
			<h2>
				<span>03. </span>Some Things I've Built
			</h2>
			<section className='projects-container'>{cards}</section>
		</main>
	);
};

export default Projects;
