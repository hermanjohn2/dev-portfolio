import React from 'react';
// import CardDeck from 'react-bootstrap/CardDeck';
// import Card from 'react-bootstrap/Card';
import aboutMeData from '../../db/aboutMe.json';
// import './style.css';

const AboutMe = () => {
	return (
		<div>
			<h1 className="headline my-3 text-center">{aboutMeData[0].name}</h1>

			<div className="pt-3 px-4">
				<div className="shadow-lg">
					<div>
						<h1 className="title">{aboutMeData[0].title}</h1>
						<div className="text">
							{aboutMeData[0].brandStatement}

							<a
								className="link pro-materials-link"
								href={aboutMeData[0].resumePdf}
								target="_blank">
								<br /> <br />
								Resume
							</a>
							<a
								className="link pro-materials-link"
								href={aboutMeData[0].gitHubUrl}
								target="_blank">
								GitHub
							</a>
							<a
								className="link pro-materials-link"
								href={aboutMeData[0].linkedInUrl}
								target="_blank">
								LinkedIn
							</a>
						</div>
					</div>
				</div>
				<div>
					<div>
						<h1 className="title">Languages</h1>
						<p className="text">
							{aboutMeData[0].languages.map(lang => lang + ' | ')}
						</p>
						<h1 className="title">Databases</h1>
						<p className="text">
							{aboutMeData[0].databases.map(db => db + ' | ')}
						</p>
						<h1 className="title">Libraries/Frameworks</h1>
						<p className="text">
							{aboutMeData[0].frameworks.map(framework => framework + ' | ')}
						</p>
						<h1 className="title">Methodologies</h1>
						<p className="text">
							{aboutMeData[0].methods.map(method => method + ' | ')}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
