import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink';
import aboutMeData from '../../db/aboutMe';
import logo from '../../db/img/logo.png';

const { home, projects, aboutMe, linkedIn, github } = aboutMeData.links;

const Logo = () => (
	<img className="h-11 drop-shadow-2xl" src={logo} alt="John Herman Logo" />
);

const Navigation = () => {
	const [hidden, setHidden] = useState(true);

	return (
		<nav className="flex items-center justify-between flex-wrap p-6 text-black text-2xl bg-gradient-to-b from-gray to-bright static w-screen">
			<div className="flex items-center mr-6">
				<CustomLink {...home} key={`${home.link}-nav-link`} title={<Logo />} />
			</div>
			<div className="block dropdown relative text-2xl lg:hidden">
				<button
					className="dropdown-toggle px-7 py-2.5 uppercase border border-black rounded text-2xl"
					// className={`dropdown-toggle items-center px-6 border border-black  py-2.5 rounded

					onClick={() => setHidden(hidden ? false : true)}>
					<svg
						className="h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
				{/* Mobile Menu ----------- */}
				<ul
					className={
						hidden
							? 'hidden'
							: 'absolute bg-gradient-to-t from-gray to-bright rounded-b-lg px-1 text-center border border-black divide-y border-t-0'
					}>
					{[projects, aboutMe, linkedIn, github].map(obj => (
						<li
							key={`${obj.link}-mobile-nav-link`}
							onClick={() => setHidden(true)}>
							<CustomLink
								{...obj}
								title={obj.link === '/about' ? 'About' : obj.title}
								className="block text-sm px-2 py-4"
							/>
						</li>
					))}
				</ul>
			</div>

			<div className="lg:flex lg:items-center lg:w-auto hidden">
				{[projects, aboutMe, github, linkedIn].map(obj => (
					<CustomLink
						{...obj}
						key={`${obj.link}-nav-link`}
						className="inline-block px-4 py-2 leading-none mt-4 lg:mt-0"
					/>
				))}
			</div>
		</nav>
	);
};

export default Navigation;
