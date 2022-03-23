import playlistrImg from './img/playlistr-room.png';

const projectsArr = [
	{
		id: 8,
		title: 'Poncey',
		deployedLink: 'https://www.npmjs.com/package/poncey',
		githubLink: 'https://github.com/hermanjohn2/poncey',
		img: 'https://lh3.googleusercontent.com/h1W19eqwVXyYzUnnWBkYWoJMsz2Gv87WwkcxAoAqxy1_iV36zw2su8q1oRXscbYIPQ9g1teahLgZ-ZDhe_aF152uuCGwD6xZa5zSyK1si4z6SGDHwCk0HhJn2BkE3atxVInntScUGQ=w2400',
		alt: 'A demo gif of Poncey being used in the command line.',
		infoArr: ['NPM Package', 'Node', 'SSG', 'Hack-a-thon Challenge']
	},
	{
		id: 7,
		title: 'Playlistr',
		deployedLink: 'https://playlistr-io.herokuapp.com/',
		githubLink: 'https://github.com/connietran-dev/playlistr',
		img: playlistrImg,
		alt: 'An image of a room being used in the Playlistr app',
		infoArr: [
			'Full-Stack App',
			'React',
			'Node',
			'Express',
			'MongoDB',
			'Spotify API',
			'Socket.io'
		]
	}
];

export default projectsArr;
