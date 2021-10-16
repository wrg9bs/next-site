import { nanoid } from 'nanoid';
// import resume from '../pages/static/resume.pdf';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Bo-at',
  subtitle: 'I am a Full Stack Javascript Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: '/newprofile.png',
  paragraphOne:
    'Hello there, Bo-at here, a full stack Javascript developer, recently completed the Complete Web Developer in 2021: Zero to Mastery',
  paragraphTwo:
    'I am passionate about building real life software solutions which make a positive impact on people lives',
  paragraphThree:
    'Through the Zero to Mastery academy, I developed skills in HTML, CSS, Javascript, React, Nodejs, Expressjs and Postgres SQL.',
  resume: '/resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '/blackjack.JPG',
    title: 'Blackjack',
    info: 'This project covered Javascript basics, an asynchronous function at the end, courtesy of Qazi Rafeh from The Clever Programmer YouTube channel ',
    info2: '',
    url: 'https://wrg9bs.github.io/Blackjack-app/',
    repo: 'https://github.com/wrg9bs/Blackjack-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '/todoList.JPG',
    title: 'Vanilla Javascript TodoList',
    info: 'This Vanilla Javascript project, courtesy of Dev Ed tutorial, covered Javascript fundamentals.',
    info2:
      'It mostly included DOM manipulation exercises, adding event listeners and a little bit on local storage.',
    url: 'https://wrg9bs.github.io/TODO-List/',
    repo: 'https://github.com/wrg9bs/TODO-List', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '/smartbrain.JPG',
    title: 'Smart-Brain App',
    info: 'This is a full stack app, the front-end built with React and backend with Nodejs and express. Used Postgres database and all the project files have been deployed to Heroku',
    info2: '',
    url: 'https://smart-bee.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'boatzir@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Boat20159151',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/wrg9bs',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
