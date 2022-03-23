import React, { useState } from 'react';
import globalUtils from '../../globalUtils';

const ProjectCard = ({ data }) => {
	return (
		<div className="text-white text-center text-xl px-10 py-10 md:px-20 md:py-0">
			<a href={data.deployedLink} target="_blank">
				<h1 className="text-3xl mb-5 hover:text-bright">{data.title}</h1>
				<img
					className="mx-auto mb-5 h-1/2 hover:drop-shadow-xl"
					src={data.img}
					alt={data.alt}
				/>
			</a>
			<p>{globalUtils.arrToPipedStr(data.infoArr)}</p>
			{[
				{ href: data.githubLink, icon: 'fa-github' },
				{ href: data.deployedLink, icon: 'fa-link' }
			].map(({ href, icon }) => (
				<a
					key={`${href}-link`}
					className={`fa ${icon} text-bright text-4xl p-5 hover:text-white hover:opacity-75`}
					href={href}
					rel="noopener noreferrer"
					target="_blank"
				/>
			))}
		</div>
	);
};

export default ProjectCard;
