import React, { useState } from 'react';

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';

// import './style.css';

const ProjectCard = ({ data, wait }) => {
	const [message, setMessage] = useState('');
	const [hasAnimated, setHasAnimated] = useState(false);

	const handleHover = async () => {
		if (!hasAnimated) {
			let arr = 'Check out my code on GitHub!'.split('');
			let msg = '';

			for (const char in arr) {
				await wait(100);
				msg += arr[char];
				setMessage(msg);
			}

			setHasAnimated(true);
		}
	};

	// const wait = ms => {
	// 	return new Promise(resolve => setTimeout(resolve, ms));
	// };

	return (
		<div>
			<div>
				<div>
					<div className="pt-3" md={4}>
						<div href={data.deployedLink} target="_blank">
							<img src={data.img} alt={data.alt} />
						</div>
					</div>
					<div>
						<div>
							<div className="link" href={data.deployedLink} target="_blank">
								<h1>
									<span className="project-title">{data.title}</span>
								</h1>
							</div>

							<div>
								{data.description}
								<br />
								<br />
								<a
									onMouseEnter={() => handleHover()}
									className="gh-card-link fa fa-github"
									href={data.githubLink}
									rel="noopener noreferrer"
									target="_blank
									">
									{' '}
									<span>{message}</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
