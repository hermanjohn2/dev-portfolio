import React from 'react';
import { openPopupWidget } from 'react-calendly';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './style.css';
import aboutMeData from '../../db/aboutMe.json';

const Contact = () => {
	const url = 'https://calendly.com/john-herman-dev/tutorial-session';

	return (
		<div>
			<Container>
				<Row>
					<Col md={12}>
						<h1 className="headline my-3 text-center">Let's Build Together</h1>
					</Col>
				</Row>
			</Container>

			<Card className="contact-card shadow-lg rounded">
				<Row className="no-gutters">
					<Col md={8}>
						<Card.Body>
							<h2>{aboutMeData[0].name}</h2>
							<h2>{aboutMeData[0].location}</h2>
							<h2>{aboutMeData[0].email}</h2>
							<h2>{aboutMeData[0].contactNumber}</h2>

							<h2 className="link" onClick={() => openPopupWidget({ url })}>
								Schedule a Meeting
							</h2>
						</Card.Body>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default Contact;
