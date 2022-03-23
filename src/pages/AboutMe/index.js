import React from 'react';
// import CardDeck from 'react-bootstrap/CardDeck';
// import Card from 'react-bootstrap/Card';
import CustomLink from '../../components/CustomLink';
import aboutMeData from '../../db/aboutMe';
import globalUtils from '../../globalUtils';
// import './style.css';

const { github, linkedIn, resume } = aboutMeData.links;

const AboutMe = () => {
	return (
		<main className="text-white">
			<div className="my-10 text-center font-writing">
				<h1 className="mb-5  text-5xl text-bright">{aboutMeData.name}</h1>
				<h2 className="text-3xl">{aboutMeData.title}</h2>
			</div>

			<div className="grid lg:grid-cols-2 gap-2 mb-0">
				<div className="shadow-lg bg-gradient-to-t from-black to-dark-gray md:bg-gradient-to-t md:from-[#0a0a0a] md:to-[#121212] p-10 m-10">
					<div className="text-md m-0 md:text-xl md:m-2">
						<p>{aboutMeData.brandStatement}</p>
						<div className="mt-6 text-3xl md:text-4xl text-center">
							{[github, linkedIn, resume].map(obj => (
								<CustomLink
									{...obj}
									key={`${obj.link}-about-me-link`}
									className="px-5 text-bright hover:text-white hover:opacity-50 lg:pt-16"
								/>
							))}
						</div>
					</div>
				</div>
				<div className="shadow-lg bg-gradient-to-t from-black to-dark-gray md:bg-gradient-to-t md:from-[#0a0a0a] md:to-[#121212] p-10 m-10">
					{aboutMeData.technologies.map(({ title, list }) => (
						<div key={`${title}-tech-info`} className="m-2">
							<h3 className="text-xl text-bright">{title}</h3>
							<p className="text-md md:text-lg">
								{globalUtils.arrToPipedStr(list)}
							</p>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export default AboutMe;
