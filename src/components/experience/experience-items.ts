export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tech?: string[];
  link: string;
};

const nokia: ExperienceItem = {
  id: 'nokia',
  role: 'Software Engineer (Front-End)',
  company: 'Nokia Solutions and Networks',
  period: 'Oct 2021 – Present',
  bullets: [
    'Front-end engineer building UI apps for network management (Network Operations Master, NetAct).',
    'Designed, implemented, and tested features across Plan, License, Policy, Rule, Software, Template, Workflow, and Working Set Management.',
    'Built and maintained reusable libraries (Search Bar, large-data Grid with grouping/pagination) used across multiple repositories.',
    'Collaborated with testers, designers, and product owners to define specs and delivery timelines.',
    'Mentored teammates and led code reviews to uphold quality and security standards.',
    'Owned incident tracking and issue resolution; ensured timely fixes and follow-ups.',
    'Maintained clear, up-to-date technical documentation.',
  ],
  tech: [
    'AG Grid',
    'CSS3',
    'Cypress',
    'Docker',
    'ESLint',
    'Git',
    'GitLab',
    'i18next',
    'HTML5',
    'JavaScript',
    'Jest',
    'Jenkins',
    'Jira',
    'Linux',
    'Mock Service Worker',
    'Prettier',
    'React',
    'Testing Library',
    'React Router',
    'Redux Toolkit',
    'SASS',
    'SQL',
    'Styled Components',
    'TypeScript',
    'Webpack',
  ],
  link: 'https://www.nokia.com',
};

export const ppg: ExperienceItem = {
  id: 'ppg',
  role: 'IT Service Desk Representative',
  company: 'PPG Global Business Services',
  period: 'Mar 2021 – Sep 2021',
  bullets: [
    'Diagnosed and resolved technical tickets; provided troubleshooting support via phone, chat, and email.',
  ],
  tech: ['Jira', 'Windows', 'Linux'],
  link: 'https://www.ppg.com',
};

export const boyar: ExperienceItem = {
  id: 'boyar',
  role: 'Internet Retailer',
  company: 'P.H.U Boyar',
  period: 'Aug 2019 – Sep 2020',
  bullets: [
    'Developed and implemented e-commerce strategies to boost sales and strengthen the brand’s online presence.',
    'Supervised e-commerce operations, ensuring smooth functionality and testing of IT projects.',
  ],
  tech: ['Photoshop'],
  link: 'https://londonshoes.pl/',
};

export const rasant: ExperienceItem = {
  id: 'rasant',
  role: 'Deputy Manager',
  company: 'Rasant Personal Leasing GmbH',
  period: 'Oct 2018 – Jun 2019',
  bullets: ['Led a team in programming electronic shelf labels (ESL) and managing task workflows.'],
  link: 'https://www.rasant-personal-leasing.de/',
};

export const interCars: ExperienceItem = {
  id: 'interCars',
  role: 'Junior Helpdesk IT Specialist',
  company: 'Inter Cars S.A.',
  period: 'Jul 2018 – Jun 2019',
  bullets: [
    'Diagnosed and resolved hardware and software issues.',
    'Provided user support for systems, applications, and devices.',
  ],
  tech: ['Windows', 'Linux', 'Active Directory'],
  link: 'https://intercars.com.pl/',
};

export const bank: ExperienceItem = {
  id: 'bank',
  role: 'IT Specialist',
  company: 'Mazurski Bank Spółdzielczy',
  period: 'May 2017 – Jun 2017',
  bullets: ['Installed, configured and administered computer systems and network devices.'],
  tech: ['Windows', 'Linux', 'Active Directory'],
  link: 'https://www.mbsgizycko.pl/',
};

export const paq: ExperienceItem = {
  id: 'paq',
  role: 'Service Technician',
  company: 'PAQ, LDA',
  period: 'Nov 2016 – Dec 2016',
  bullets: ['Repaired and maintained laptops and printers.'],
  link: 'https://paq.pt/',
};

export const experienceItems: ExperienceItem[] = [nokia, ppg, boyar, rasant, interCars, bank, paq];
