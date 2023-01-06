import React from 'react';

import ProjectCard from '../../components/ProjectCard';
import projectData from '../../db/projects';

const Projects = () => {
  return (
    <main>
      <h1 className='my-10 text-center text-6xl text-bright font-writing'>Projects</h1>
      <div className='grid lg:grid-cols-2 gap-2 mb-0'>
        {projectData.map(project => (
          <ProjectCard key={`project-card-${project.id}`} data={project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
