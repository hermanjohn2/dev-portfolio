import React from 'react';
import { openPopupWidget } from 'react-calendly';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import './style.css';
import aboutMeData from '../../db/aboutMe.json';

const Contact = () => {
	const url = 'https://calendly.com/john-herman-dev/tutorial-session';

	return (
		<div>
			<div>
				<div>
					<div>
						<h1 className="headline my-3 text-center">Let's Build Together</h1>
					</div>
				</div>
			</div>

			<div className="contact-card shadow-lg rounded">
				<div className="no-gutters">
					<div md={8}>
						<div>
							<h2>{aboutMeData[0].name}</h2>
							<h2>{aboutMeData[0].location}</h2>
							<h2>{aboutMeData[0].email}</h2>
							<h2>{aboutMeData[0].contactNumber}</h2>

							<h2 className="link" onClick={() => openPopupWidget({ url })}>
								Schedule a Meeting
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
