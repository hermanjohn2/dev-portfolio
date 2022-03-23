const aboutMeObj = {
	name: 'John Herman',
	location: 'Atlanta, GA',
	email: 'hermanjohn2@gmail.com',
	contactNumber: '(770) 241-6512',
	links: {
		resume: { link: '/pdf/jh-resume.pdf', icon: 'fa-file-text', newTab: true },
		linkedIn: {
			link: 'https://www.linkedin.com/in/john-joseph-herman/',
			icon: 'fa-linkedin',
			newTab: true,
			title: 'GitHub'
		},
		github: {
			link: 'https://github.com/hermanjohn2',
			icon: 'fa-github',
			newTab: true,
			title: 'GitHub'
		},
		home: {
			title: 'John Herman | Software Engineer',
			link: '/',
			newTab: false,
			icon: false
		},
		projects: {
			title: 'Projects',
			link: '/projects',
			newTab: false,
			icon: false
		},
		aboutMe: {
			title: 'About Me',
			link: '/about',
			newTab: false,
			icon: false
		}
	},
	resumePdf: '/pdf/jh-resume.pdf',
	linkedInUrl: 'https://www.linkedin.com/in/john-joseph-herman/',
	gitHubUrl: 'https://github.com/hermanjohn2',
	title: 'Software Engineer @ ARC',
	avatarUrl: '/images/headshot1.jpg',
	brandStatement:
		'Honest, dependable, hard-working Software Engineer at Atlanta Regional Commission. Received a certificate in Full Stack Web Development from the Georgia Institute of Technology. Enjoys new projects, talking tech and solving difficult problems. Always seeking new opportunities to learn and develop.',
	technologies: [
		{
			title: 'Languages',
			list: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'TypeScript', 'Python']
		},
		{
			title: 'Libraries / Frameworks',
			list: [
				'React',
				'Express',
				'Leaflet',
				'Charts.js',
				'Passport',
				'Bootstrap',
				'Foundation',
				'Semantic UI'
			]
		},
		{
			title: 'Databases',
			list: ['MongoDB', 'MySQL', 'IndexedDB']
		},
		{
			title: 'Methodologies',
			list: [
				'Git',
				'Pair Programming',
				'Agile Web Development',
				'Object-Oriented Programming',
				'REST Web Services'
			]
		}
	],
	languages: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'TypeScript', 'Python'],
	frameworks: [
		'React',
		'Express',
		'Leaflet',
		'Charts.js',
		'Passport',
		'Bootstrap',
		'Foundation',
		'Semantic UI'
	],
	databases: ['MongoDB', 'MySQL', 'IndexedDB'],
	methods: [
		'Git',
		'Pair Programming',
		'Agile Web Development',
		'Object-Oriented Programming',
		'REST Web Services'
	]
};

export default aboutMeObj;
