import React from 'react';
import { Link } from 'react-router-dom';
import aboutMeData from '../../db/aboutMe.json';

const navObj = [
	{
		title: 'John Herman',
		url: '/',
		external: false
	},
	{
		title: 'Projects',
		url: '/projects',
		external: false
	},
	{
		title: 'Contact',
		url: '/contact',
		external: false
	},
	{
		title: 'About Me',
		url: '/about',
		external: false
	},
	{ title: 'GitHub', url: aboutMeData[0].gitHubUrl, external: true },
	{ title: 'LinkedIn', url: aboutMeData[0].linkedInUrl, external: true }
];

const Navigation = () => {
	return (
		<nav className="flex sm: justify-center space-x-12">
			{navObj.map(({ title, url, external }) =>
				!external ? (
					<Link
						to={url}
						className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
						{title}
					</Link>
				) : (
					<a
						href={url}
						className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
						target="_blank">
						{title}
					</a>
				)
			)}

			{/* <a href="/">John Herman | Developer</a>

			<a href="/projects">Projects</a>
			<a href="/contact">Contact</a>
			<a href="/about">About Me</a>

			<a href={aboutMeData[0].gitHubUrl} target="_blank"></a>
			<a href={aboutMeData[0].linkedInUrl} target="_blank"></a> */}
		</nav>
	);
};

export default Navigation;
