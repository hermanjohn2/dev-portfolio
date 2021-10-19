import React from 'react';

import Navigation from '../../components/Navigation';
import ProjectCard from '../../components/ProjectCard';

import projectData from '../../db/projects.json';

const Projects = ({ wait }) => {
	return (
		<div>
			<h1 className="headline my-3 text-center">Projects</h1>
			{projectData.map(project => (
				<ProjectCard key={project.id} data={project} wait={wait} />
			))}
		</div>
	);
};

export default Projects;
