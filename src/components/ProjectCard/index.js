import React, { useState } from 'react';
import globalUtils from '../../globalUtils';

const ProjectCard = ({ data: { deployedLink, title, img, alt, infoArr, githubLink } }) => {
  return (
    <div className='text-white text-center text-xl px-5 py-5 md:py-0'>
      <a href={deployedLink} target='_blank'>
        <h1 className='text-3xl mb-5 hover:text-bright'>{title}</h1>
        <img className='mx-auto mb-5 h-1/2 hover:drop-shadow-xl' src={img} alt={alt} />
      </a>
      <p className='text-lg'>{globalUtils.arrToPipedStr(infoArr)}</p>
      {[
        { href: githubLink, icon: 'fa-github' },
        { href: deployedLink, icon: 'fa-link' }
      ].map(({ href, icon }) => (
        <a
          key={`${href}-link`}
          className={`fa ${icon} text-bright text-3xl px-5 pt-5 hover:text-white hover:opacity-75`}
          href={href}
          rel='noopener noreferrer'
          target='_blank'
        />
      ))}
    </div>
  );
};

export default ProjectCard;
