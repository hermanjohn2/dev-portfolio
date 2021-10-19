import React from 'react';

import Navigation from '../../components/Navigation';
import AssignmentCard from '../../components/AssignmentCard';

import assignmentData from '../../db/assignments.json';

const Assignments = () => {
	return (
		<div>
			<h1 className="headline my-3 text-center">Examples of Code</h1>
			{assignmentData.map(assignment => (
				<AssignmentCard key={assignment.id} data={assignment} />
			))}
		</div>
	);
};

export default Assignments;
