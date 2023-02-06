
const header = {
  homepage: 'https://faizamahmoud-portfolio.netlify.app/',
  title: 'Faiza Mahmoud',
}

const about = {
  
  name: 'Faiza',
  role: 'FULL STACK DEV',
  description:
    '',
  resume: 'https://example.com', //! update resume 
  social: {
    linkedin: 'https://www.linkedin.com/in/faizamahmoud/',
    github: 'https://github.com/faizamahmoud',
  },
}

const projects = [
  
  {
    name: 'BlackJackStacks',
    description:
      'A simple game of BlackJack using object-oriented programming concepts',
    stack: ['Vanilla Javascript', 'HTML','CSS'],
    sourceCode: 'https://github.com/faizamahmoud/deploy-blackjack',
    livePreview: 'https://faizamahmoud.github.io/deploy-blackjack/',
  },
  {
    name: 'TravelHub',
    description:
      'Collaborated with two developers to create a forum-based app, mimicking the original version of Reddit with a focus on all things travel-related."',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'CSS'] ,
    sourceCode: 'https://github.com/maclamour/Project-2-TravelHub',
    livePreview: 'https://travelhub3.herokuapp.com/login',
  },
  {
    name: 'Lean On Me',
    description:
    'Partnered a team of designers and developers in a hackathon for three days, resulting in the creation of a web platform that seamlessly matches volunteers with animal shelters in their community.',
    stack: ['React', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/faizamahmoud/winter-hackaton-team2',
    livePreview: 'https://leanonme-ga-winterhackathon.netlify.app/',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'Node.js',
  'Express.js',
  'React',
  'Django',
  'Git',
  'Passport-JWT'
]

const contact = {
  email: 'faiza_mahmoud@icloud.com',
}

export { header, about, projects, skills, contact }
