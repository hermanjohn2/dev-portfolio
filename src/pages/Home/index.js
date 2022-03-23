import React, { useState, useEffect, useCallback } from 'react';
import globalUtils from '../../globalUtils';

// Time before the animation begins
const msBeforeAnimate = 100;

// Time in between chars showing up in DOM
const msPerChar = 200;

// Each individual line being printed in Animation
const firstLine = 'Hi,';
const secondLine = "I'm John.";
const thirdLine = 'A developer.';

const Home = () => {
	const [message1, setMessage1] = useState('');
	const [message2, setMessage2] = useState('');
	const [message3, setMessage3] = useState('');
	const [hasAnimated, setHasAnimated] = useState(false);

	// Creates new animateText function with every render
	// This function is able to use the messageChanger param to set the text of an element
	// In this case I will use setMessage for three separate lines, which is why the messageCharger param was needed
	const animateText = useCallback(
		async (str, messageChanger, msBeforeStart) => {
			await globalUtils.wait(msBeforeStart);
			let arr = str.split('');
			let msg = '';

			for (const char in arr) {
				await globalUtils.wait(msPerChar);
				msg += arr[char];
				messageChanger(msg);
			}
		},
		[globalUtils.wait]
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
		<main className="container mx-auto mt-20 text-white text-7xl lg:text-9xl font-writing">
			{[message1, message2, message3].map((item, i) => (
				<h1
					className={`m-5${i === 1 ? ' text-bright' : ''}`}
					key={`home-msg-${i}`}>
					{item}
				</h1>
			))}
		</main>
	);
};

export default Home;
