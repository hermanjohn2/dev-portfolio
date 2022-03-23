import React from 'react';

const AssignmentCard = ({ data }) => {
	return (
		<div>
			<div className="shadow-lg p-3 mx-5 my-2 rounded">
				<div className="no-gutters">
					<div className="pt-3" md={4}>
						<a href={data.deployedLink} target="_blank">
							<img src={data.img} alt={data.alt} />
						</a>
					</div>
					<div>
						<div>
							<div className="link" href={data.deployedLink} target="_blank">
								<Card.Title>{data.title}</Card.Title>
							</div>

							<div>
								{data.description}
								<br />
								<br />
								<div
									className="link"
									href={data.githubLink}
									rel="noopener noreferrer"
									target="_blank">
									GitHub Repository
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AssignmentCard;
