import React from 'react';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

import Navigation from '../../components/Navigation';
import aboutMeData from '../../db/aboutMe.json';

import './style.css';

const AboutMe = () => {
	return (
		<div>
			<h1 className="headline my-3 text-center">{aboutMeData[0].name}</h1>

			<CardDeck className="pt-3 px-4">
				<Card className="shadow-lg">
					<Card.Body>
						<Card.Title className="title">{aboutMeData[0].title}</Card.Title>
						<Card.Text className="text">
							{aboutMeData[0].brandStatement}

							<Card.Link
								className="link pro-materials-link"
								href={aboutMeData[0].resumePdf}
								target="_blank">
								<br /> <br />
								Resume
							</Card.Link>
							<Card.Link
								className="link pro-materials-link"
								href={aboutMeData[0].gitHubUrl}
								target="_blank">
								GitHub
							</Card.Link>
							<Card.Link
								className="link pro-materials-link"
								href={aboutMeData[0].linkedInUrl}
								target="_blank">
								LinkedIn
							</Card.Link>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="shadow-lg">
					<Card.Body>
						<Card.Title className="title">Languages</Card.Title>
						<Card.Text className="text">
							{aboutMeData[0].languages.map(lang => lang + ' | ')}
						</Card.Text>
						<Card.Title className="title">Databases</Card.Title>
						<Card.Text className="text">
							{aboutMeData[0].databases.map(db => db + ' | ')}
						</Card.Text>
						<Card.Title className="title">Frameworks</Card.Title>
						<Card.Text className="text">
							{aboutMeData[0].frameworks.map(framework => framework + ' | ')}
						</Card.Text>
						<Card.Title className="title">Methodologies</Card.Title>
						<Card.Text className="text">
							{aboutMeData[0].methods.map(method => method + ' | ')}
						</Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>
		</div>
	);
};

export default AboutMe;
