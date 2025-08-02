module.exports = {
  siteTitle: 'Asmaa Abdullah',
  siteDescription:
    'Asmaa Abdullah is a passionate Computer and Data Science student from Alexandria, Egypt, who loves exploring data science, machine learning, and software development.',
  siteKeywords:
    'Asmaa Abdullah, Asmaa, Abdullah, asmaaabdalh, data science, machine learning, computer science, software developer, javascript, python, Alexandria University, Egypt',
  siteUrl: 'https://asmaaabdalh.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Asmaa Abdullah',
  location: 'Alexandria, Egypt',
  email: 'asmaa.abdullah@example.com',
  github: 'https://github.com/asmaaabdalh',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/asmaaabdalh',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/asmaa-abdullah-bb08422b6/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/asmaaabdalh',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/asmaaabdalh',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
