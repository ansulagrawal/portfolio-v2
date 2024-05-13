export const siteConfig = {
  name: 'Ansul Agrawal',
  title: 'Ansul Agrawal - Web Developer Portfolio',
  description: 'Ansul Agrawal - Web Developer Portfolio built using Next.js, Tailwind CSS',
  keywords: ['Ansul Agrawal, Portfolio, Next.js, Tailwind CSS', 'Web Developer', 'Full Stack Developer'],
  url: 'https://ansulagrawal.in',
  author: [
    {
      name: 'Ansul Agrawal',
      url: 'https://ansulagrawal.in',
    },
  ],
  links: {
    github: 'https://github.com/ansulagrawal',
  },
  creator: 'Ansul Agrawal',
};

export const routes = [
  {
    key: 'home',
    title: 'Home',
    path: '/',
  },
  {
    key: 'about',
    title: 'About',
    path: '/about',
  },
  {
    key: 'project',
    title: 'Projects',
    path: '/projects',
  },
];

export const footer = {
  colums: [
    {
      title: 'Pages',
      links: [
        {
          name: 'Home',
          link: '/',
          leavesWebsite: false,
        },
        {
          name: 'About',
          link: '/about',
          leavesWebsite: false,
        },
        {
          name: 'Projects',
          link: '/projects',
          leavesWebsite: false,
        },
      ],
    },
    {
      title: 'Social',
      links: [
        {
          name: 'Github',
          link: 'https://github.com/ansulagrawal',
          icon: '/img/github.svg',
          leavesWebsite: true,
        },
        {
          name: 'LinkedIn',
          link: 'https://linkedin.com/in/ansulagrawal',
          icon: '/img/linkedin.svg',
          leavesWebsite: true,
        },
        {
          name: 'Email',
          link: 'mailto:ansulagrawal9@gmail.com',
          icon: '/img/mail.svg',
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: 'ansulagrawal',
    message: 'Your support means the world to me! 💙',
  },
};
