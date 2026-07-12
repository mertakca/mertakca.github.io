export interface Profile {
  name: string
  location: string
  summary: string
}

export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export interface Education {
  degree: string
  school: string
  location: string
  period: string
  highlights: string[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Publication {
  title: string
  date: string
  summary: string
  href: string
}

interface LinkItem {
  label: string
  href: string
}

interface CvData {
  profile: Profile
  experience: ExperienceItem[]
  education: Education
  skills: SkillGroup[]
  publications: Publication[]
  links: {
    email: LinkItem
    linkedin: LinkItem
    medium: LinkItem
  }
}

export const cvData: CvData = {
  profile: {
    name: 'Mert Akça',
    location: 'Berlin, Germany',
    summary:
      'User-driven software engineer focused on React, TypeScript, Next.js, and AI-assisted product delivery. I turn complex ideas into clear, shippable plans while keeping high standards for developer experience and accessibility.',
  },
  experience: [
    {
      role: 'Software Engineer',
      company: 'SAP',
      location: 'Berlin, Germany',
      period: 'Jan 2026 - Present',
      highlights: [
        'Bridged product and engineering workflows as interim designer during a team hiring transition.',
        'Developed and maintained features across six microfrontend applications to improve consistency and scale.',
        'Implemented a spec-driven workflow via OpenSpec for the client-side simulation repository.',
        'Rapidly prototyped an AI-assisted simulation frontend and aligned cross-functional stakeholders on MVP scope.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'HeyJobs',
      location: 'Berlin, Germany',
      period: 'Oct 2023 - Jan 2026',
      highlights: [
        'Spearheaded a Next.js migration that improved performance and SEO, reducing interaction delays by 25%.',
        'Led frontend delivery for an AI-based jobseeker assessment product with measurable hiring impact.',
        'Directed a WCAG-compliant design-system rebrand and reduced the component library footprint by 30%.',
        'Implemented and analyzed A/B tests with Growthbook in close collaboration with BI and PM teams.',
        'Maintained 90%+ test coverage with Jest and Cypress while supporting on-call operations.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Plentific',
      location: 'Ankara, Turkey',
      period: 'Jun 2021 - Jul 2023',
      highlights: [
        'Built interactive dashboards with React, TypeScript, and React Query with i18n-ready components.',
        'Developed and maintained REST APIs with Node.js and Express.js.',
        'Advocated TDD practices and sustained 95%+ coverage with Jest and Playwright.',
        'Delivered WCAG AA-compliant UI features in close partnership with design.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Huawei',
      location: 'Istanbul, Turkey',
      period: 'Aug 2020 - Jun 2021',
      highlights: [
        "Developed and documented Huawei's alternative to Google Mobile Services using React Native, Flutter, and Java.",
      ],
    },
  ],
  education: {
    degree: 'Bachelor of Computer Engineering',
    school: 'Middle East Technical University',
    location: 'Ankara, Turkey',
    period: 'Oct 2015 - Feb 2021',
    highlights: [
      'Graduated with honours.',
      'Graduation project: Multiplayer VR board game platform for Oculus using Unity.',
    ],
  },
  skills: [
    {
      category: 'Frontend',
      items: [
        'React',
        'TypeScript',
        'JavaScript',
        'Next.js',
        'React Native',
        'Tailwind CSS',
        'Semantic HTML',
        'CSS Animations',
      ],
    },
    {
      category: 'Backend and APIs',
      items: ['Node.js', 'Express.js', 'Ruby on Rails', 'SQL', 'Prisma', 'Zod', 'REST APIs'],
    },
    {
      category: 'Testing and DevOps',
      items: ['Jest', 'Cypress', 'GitHub Actions', 'CircleCI', 'Growthbook', 'AWS'],
    },
    {
      category: 'Design and UX',
      items: ['Figma', 'Storybook', 'Design Systems', 'WCAG Accessibility'],
    },
    {
      category: 'Performance and Other',
      items: [
        'Core Web Vitals',
        'Lighthouse',
        'Lazy Loading',
        'Bundle Optimization',
        'i18n',
        'A/B Testing',
        'Agile',
        'Secure Coding',
      ],
    },
  ],
  publications: [
    {
      title: 'Functional Thinking in JavaScript: A Pragmatic Guide to Taming Software Complexity',
      date: 'Jul 2025',
      summary: 'Practical strategies for writing maintainable and functional JavaScript in complex codebases.',
      href: 'https://medium.com/@mertakca/functional-thinking-in-javascript-a-pragmatic-guide-to-taming-software-complexity-d04d133536e7',
    },
    {
      title: "Navigating the European Accessibility Act: Developer's Guide to Inclusive Web",
      date: 'Nov 2024',
      summary: 'Guidance for developers on WCAG compliance and building inclusive web experiences.',
      href: 'https://medium.com/heyjobs-tech/navigating-the-european-accessibility-act-developers-guide-to-inclusive-web-bcfb0ee68bfd',
    },
  ],
  links: {
    email: { label: 'mertakca74@gmail.com', href: 'mailto:mertakca74@gmail.com' },
    linkedin: { label: 'linkedin.com/in/mertakca', href: 'https://www.linkedin.com/in/mertakca' },
    medium: { label: 'medium.com/@mertakca', href: 'https://medium.com/@mertakca' },
  },
}
