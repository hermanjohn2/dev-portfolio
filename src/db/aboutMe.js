import resume from './pdf/jh-resume.pdf';

export default {
  name: 'John Herman',
  location: 'Atlanta, GA',
  email: 'hermanjohn2@gmail.com',
  contactNumber: '(770) 241-6512',
  links: {
    resume: { link: resume, icon: 'fa-file-text', newTab: true },
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
  title: 'Software Engineering Consultant @ Community Foundation for Greater Atlanta',
  brandStatement:
    'Software Engineer with 2+ years of professional experience in developing and maintaining web applications. Passionate about learning new technologies and applying them to solve complex problems. Seeking consulting contracts where I can leverage my experience in software engineering to create innovative solutions for clients.',
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
