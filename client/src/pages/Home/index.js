import React, { useState, useEffect, useCallback } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navigation from '../../components/Navigation';

// Time before the animation begins
const msBeforeAnimate = 100;

// Time in between chars showing up in DOM
const msPerChar = 200;

// Each individual line being printed in Animation
const firstLine = 'Hi,';
const secondLine = `I'm John.`;
const thirdLine = 'A developer.';

const Home = ({ wait }) => {
	const [message1, setMessage1] = useState('');
	const [message2, setMessage2] = useState('');
	const [message3, setMessage3] = useState('');
	const [hasAnimated, setHasAnimated] = useState(false);

	// Creates new animateText function with every render
	// This function is able to use the messageChanger param to set the text of an element
	// In this case I will use setMessage for three separate lines, which is why the messageCharger param was needed
	const animateText = useCallback(
		async (str, messageChanger, msBeforeStart) => {
			await wait(msBeforeStart);
			let arr = str.split('');
			let msg = '';

			for (const char in arr) {
				await wait(msPerChar);
				msg += arr[char];
				messageChanger(msg);
			}
		},
		[wait]
	);

	// Let's me animate the text when the page renders and only when it renders
	useEffect(() => {
		if (!hasAnimated) {
			animateText(firstLine, setMessage1, msBeforeAnimate);
			animateText(
				secondLine,
				setMessage2,
				firstLine.length * msPerChar + msBeforeAnimate
			);
			animateText(
				thirdLine,
				setMessage3,
				(firstLine.length + secondLine.length) * msPerChar + msBeforeAnimate
			);
			setHasAnimated(true);
		}
	}, [hasAnimated, animateText]);

	return (
		<div>
			<Container>
				<Row>
					<Col md={12}>
						<h1 className="headline my-5 mx-2">
							{message1}
							<br />
							{message2}
							<br /> {message3}
						</h1>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
