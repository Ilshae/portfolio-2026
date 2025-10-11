export type ProjectItem = {
  id: string;
  title: string;
  url: string;
  description: string;
  technologies: string[];
  image?: {
    src: string;
    alt: string;
  };
  additionalLinks?: Array<{
    url: string;
    label: string;
    icon?: 'download' | 'external';
  }>;
};

export const projectItems: ProjectItem[] = [
  {
    id: 'jachty',
    title: 'Jachty Pruszyński',
    url: 'https://jachtypruszynski.pl/',
    description:
      'A commercial project for a chartering company with detailed descriptions of their products.',
    technologies: [
      'TypeScript',
      'Material UI',
      'React',
      'React Router',
      'Cypress',
      'HTML5',
      'CSS3',
    ],
    image: {
      src: '/images/projects/course-card.png',
      alt: 'Jachty Pruszyński Card',
    },
  },
  {
    id: 'crwn-clothing',
    title: 'Crwn Clothing',
    url: 'https://crwn-clothing-2024.netlify.app/',
    description:
      'Try out signing in with google or creating a new account and paying with test credit card.',
    technologies: [
      'JavaScript',
      'React',
      'Redux',
      'React Router',
      'Firebase',
      'Styled Components',
      'Cypress',
      'HTML5',
      'CSS3',
      'SASS',
    ],
    image: { src: '/assets/images/apps/crwn-clothing.jpg', alt: 'Crwn Clothing screenshot' },
  },
  {
    id: 'tetris',
    title: 'Tetris',
    url: 'https://ilshae.github.io/tetris/',
    description: 'Press start and use arrows to play.',
    technologies: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'React'],
    image: { src: '/assets/images/apps/tetris.jpg', alt: 'Tetris screenshot' },
  },
  {
    id: 'hermes-travel-agency',
    title: 'Hermes Travel Agency',
    url: 'https://github.com/Ilshae/react-travel-agency',
    description:
      'Dynamically sort trips by tags and duration or use a search bar. Ordered trips go to a JSON Server for later use.',
    technologies: [
      'JavaScript',
      'React',
      'Redux',
      'Webpack',
      'React Router',
      'Jest',
      'HTML5',
      'CSS3',
      'SASS',
    ],
    image: {
      src: '/assets/images/apps/hermes-travel-agency.jpg',
      alt: 'Hermes Travel Agency screenshot',
    },
  },
  {
    id: 'vivek-university',
    title: 'Vivek University',
    url: 'https://github.com/Ilshae/vivek-university',
    description:
      'Wordpress site with a custom made theme. Register a new user and login. Logged in users have access to Notes subpage.',
    technologies: [
      'JavaScript',
      'Wordpress',
      'Advanced Custom Fields',
      'Webpack',
      'HTML5',
      'CSS3',
      'SASS',
    ],
    image: { src: '/assets/images/apps/vivek-university.jpg', alt: 'Vivek University screenshot' },
  },
  {
    id: 'yacht-reservation',
    title: 'Yacht reservation',
    url: 'https://github.com/Ilshae/fullstack-app',
    description:
      'Engineering Project made for my university. React on frontend and Spring on backend.',
    technologies: [
      'JavaScript',
      'React',
      'React Intl',
      'React Router',
      'Cypress',
      'Styled Components',
      'Material UI',
      'TanStack Query',
      'Spring',
      'Spring Boot',
      'Spring Data JPA',
      'Lombok',
      'Spring Boot Validation',
      'Spring Boot Security',
      'Java JSON WebToken',
      'HTML5',
      'CSS3',
    ],
    image: { src: '/assets/images/apps/fullstack.jpg', alt: 'Yacht reservation screenshot' },
  },
  {
    id: 'swapi',
    title: 'SWAPI',
    url: 'https://github.com/Ilshae/swapi-app',
    description:
      'NestJS API with GraphQL endpoints from the SWAPI. Includes Redis and is Dockerized.',
    technologies: ['NestJS', 'GraphQL', 'Redis', 'Jest', 'SpectaQL', 'TypeScript', 'Docker'],
    image: { src: '/assets/images/apps/swapi.jpg', alt: 'SWAPI screenshot' },
  },
  {
    id: 'book-shop',
    title: 'Book Shop',
    url: 'https://github.com/Ilshae/node-app',
    description:
      'Simple node app. Add products to card, buy them. Admin page allows edition of products.',
    technologies: ['Node JS', 'JavaScript', 'EJS', 'HTML5', 'CSS3', 'SASS'],
    image: { src: '/assets/images/apps/node-app.jpg', alt: 'Book Shop screenshot' },
  },
  {
    id: 'mamma-mia-pizzeria',
    title: 'Mamma Mia Pizzeria',
    url: 'https://github.com/Ilshae/project-pizzeria',
    description:
      'Pure JavaScript app. Ordered products from cart go to a JSON Server. Live table booking.',
    technologies: [
      'JavaScript',
      'React',
      'Redux',
      'Webpack',
      'React Router',
      'HTML5',
      'CSS3',
      'SASS',
    ],
    image: {
      src: '/assets/images/apps/mamma-mia-pizeria.jpg',
      alt: 'Mamma Mia Pizzeria screenshot',
    },
  },
  {
    id: 'homes',
    title: 'Homes',
    url: 'https://github.com/Ilshae/homes-app',
    description: 'Simple Angular application.',
    technologies: ['TypeScript', 'Angular', 'HTML5', 'CSS3', 'SASS'],
    image: { src: '/assets/images/apps/homes.jpg', alt: 'Homes screenshot' },
  },
];
