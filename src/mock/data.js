import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Shargri-La', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: 'A Sharded Blockchain Simulator', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Shargri-La',
  subtitle: 'A Sharded Blockchain Simulator',
  cta: 'Coming soon',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: ' ',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Shargri-La',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
