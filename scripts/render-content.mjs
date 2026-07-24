import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const fragmentsDir = path.join(rootDir, 'public', 'fragments')
const indexPath = path.join(rootDir, 'index.html')

const timelineOrder = [
  ['sap', '2026 - Present'],
  ['heyjobs', '2023 - 2026'],
  ['plentific', '2021 - 2023'],
  ['huawei', '2020 - 2021'],
]

const content = {
  overview: {
    signals: ['React + TypeScript', 'Design systems', 'Performance and accessibility'],
    title: 'Building practical product systems with strong UX discipline.',
    body:
      'I work at the point where product strategy, frontend architecture, and user experience have to stay in sync. My best work usually involves clarifying a vague idea, shaping it into a delivery plan, and then shipping an interface that performs well under real constraints.',
    stats: [
      ['Current base', 'Berlin, Germany'],
      ['Recent focus', 'AI-assisted product delivery'],
      ['Operating mode', 'Spec driven, user centered, pragmatic'],
      ['Main stack', 'Next.js, React, TypeScript'],
    ],
    links: [
      ['mailto:mertakca74@gmail.com', 'mertakca74@gmail.com'],
      ['https://www.linkedin.com/in/mertakca', 'LinkedIn'],
      ['https://medium.com/@mertakca', 'Medium'],
    ],
  },
  education: {
    cards: [
      {
        label: 'Degree',
        title: 'Bachelor of Computer Engineering',
        body: 'Middle East Technical University',
        meta: 'Ankara, Turkey · Oct 2015 - Feb 2021',
      },
      {
        label: 'Highlights',
        title: 'Graduated with honours',
        body: 'Graduation project: multiplayer VR board game platform for Oculus using Unity.',
      },
    ],
    minis: [
      ['Built around', 'Algorithms, systems, graphics, software engineering'],
      ['Still visible today', 'Structured thinking and strong technical communication'],
    ],
  },
  skills: [
    ['Frontend', ['React', 'TypeScript', 'JavaScript', 'Next.js', 'React Native', 'Tailwind CSS', 'Semantic HTML', 'CSS Animations']],
    ['Backend and APIs', ['Node.js', 'Express.js', 'Ruby on Rails', 'SQL', 'Prisma', 'Zod', 'REST APIs']],
    ['Testing and DevOps', ['Jest', 'Cypress', 'GitHub Actions', 'CircleCI', 'Growthbook', 'AWS']],
    ['Design and UX', ['Figma', 'Storybook', 'Design Systems', 'WCAG Accessibility']],
  ],
  writing: [
    {
      date: 'Jan 2026 · 7 min read',
      title: 'Crafting a Chat Experience as a Front-End Engineer',
      summary:
        'A practical breakdown of building a mobile-first, responsive chat UI with sticky layout regions, readable message widths, and scalable UX decisions under tight delivery constraints.',
      href: 'https://medium.com/heyjobs-tech/creating-a-chat-experience-e8307c594896',
    },
    {
      date: 'Dec 2025 · 6 min read',
      title: 'Bringing Scribbles to Life',
      summary:
        'A deep dive into implementing responsive, localization-safe scribble effects using SVG path logic, percentage-based coordinate mapping, and production-friendly CSS transforms.',
      href: 'https://medium.com/heyjobs-tech/bringing-scribbles-to-life-deafe1dcd7e7',
    },
    {
      date: 'Jul 2025',
      title: 'Functional Thinking in JavaScript: A Pragmatic Guide to Taming Software Complexity',
      summary: 'Practical strategies for writing maintainable and functional JavaScript in complex codebases.',
      href: 'https://medium.com/@mertakca/functional-thinking-in-javascript-a-pragmatic-guide-to-taming-software-complexity-d04d133536e7',
    },
    {
      date: 'Nov 2024',
      title: "Navigating the European Accessibility Act: Developer's Guide to Inclusive Web",
      summary: 'Guidance for developers on WCAG compliance and building inclusive web experiences.',
      href: 'https://medium.com/heyjobs-tech/navigating-the-european-accessibility-act-developers-guide-to-inclusive-web-bcfb0ee68bfd',
    },
  ],
  timeline: {
    sap: {
      company: 'SAP',
      role: 'Frontend Software Engineer',
      location: 'Berlin, Germany',
      period: 'Jan 2026 - Present',
      highlights: [
        'Bridged product and engineering workflows as interim designer during a team hiring transition.',
        'Developed and maintained features across six microfrontend applications to improve consistency and scale.',
        'Implemented a spec-driven workflow via OpenSpec for the client-side simulation repository.',
        'Rapidly prototyped an AI-assisted simulation frontend and aligned cross-functional stakeholders on MVP scope.',
      ],
    },
    heyjobs: {
      company: 'HeyJobs',
      role: 'Senior Software Engineer',
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
    plentific: {
      company: 'Plentific',
      role: 'Software Engineer',
      location: 'Ankara, Turkey',
      period: 'Jun 2021 - Jul 2023',
      highlights: [
        'Built interactive dashboards with React, TypeScript, and React Query with i18n-ready components.',
        'Developed and maintained REST APIs with Node.js and Express.js.',
        'Advocated TDD practices and sustained 95%+ coverage with Jest and Playwright.',
        'Delivered WCAG AA-compliant UI features in close partnership with design.',
      ],
    },
    huawei: {
      company: 'Huawei',
      role: 'Software Engineer',
      location: 'Istanbul, Turkey',
      period: 'Aug 2020 - Jun 2021',
      highlights: [
        "Developed and documented Huawei's alternative to Google Mobile Services using React Native, Flutter, and Java.",
      ],
    },
  },
}

const indent = (html, spaces) => html.split('\n').map((line) => `${' '.repeat(spaces)}${line}`).join('\n')

const renderOverview = () => {
  const signals = content.overview.signals.map((item) => `<span class="signal">${item}</span>`).join('\n    ')
  const stats = content.overview.stats
    .map(
      ([label, value]) => `    <article class="mini-card">\n      <span>${label}</span>\n      <strong>${value}</strong>\n    </article>`,
    )
    .join('\n')
  const links = content.overview.links
    .map(([href, label]) => {
      const rel = href.startsWith('http') ? ' target="_blank" rel="noreferrer"' : ''
      return `<a class="link-chip" href="${href}"${rel}>${label}</a>`
    })
    .join('\n    ')

  return `<section class="fragment-stack">
  <div class="signal-row">
    ${signals}
  </div>

  <div>
    <p class="subtle">At a glance</p>
    <h3>${content.overview.title}</h3>
  </div>

  <p>
    ${content.overview.body}
  </p>

  <div class="stats-grid">
${stats}
  </div>

  <div class="link-row">
    ${links}
  </div>
</section>`
}

const renderEducation = () => {
  const degreeCard = content.education.cards[0]

  return `<section class="fragment-stack">
  <div>
    <p class="subtle">Education</p>
    <h3>Computer engineering foundation with a product-builder mindset.</h3>
  </div>

  <div class="education-grid">
    <article class="education-card">
      <span>${degreeCard.label}</span>
      <strong>${degreeCard.title}</strong>
      <p>${degreeCard.body}</p>
      <p class="subtle">${degreeCard.meta}</p>
    </article>
  </div>
</section>`
}

const renderSkills = () => {
  const categories = content.skills
    .map(([title, items]) => {
      const chips = items.map((item) => `        <span class="chip">${item}</span>`).join('\n')
      return `    <article class="category-card">\n      <h4>${title}</h4>\n      <div class="chip-row">\n${chips}\n      </div>\n    </article>`
    })
    .join('\n\n')

  return `<section class="fragment-stack">
  <div>
    <p class="subtle">Skills</p>
    <h3>Frontend depth supported by delivery, testing, and design fluency.</h3>
  </div>

  <div class="category-stack">
${categories}
  </div>
</section>`
}

const renderWriting = () => {
  const cards = content.writing
    .map(
      ({ date, title, summary, href }) => `    <article class="publication-card">\n      <span>${date}</span>\n      <strong>${title}</strong>\n      <p>${summary}</p>\n      <a href="${href}" target="_blank" rel="noreferrer">Read on Medium</a>\n    </article>`,
    )
    .join('\n\n')

  return `<section class="fragment-stack">
  <div>
    <p class="subtle">Writing</p>
    <h3>Articles focused on implementation detail, accessibility, and frontend craft.</h3>
  </div>

  <div class="publication-grid">
${cards}
  </div>

  <a class="more-articles-link" href="https://medium.com/@mertakca" target="_blank" rel="noreferrer">See my other articles</a>
</section>`
}

const renderTimeline = (entry) => {
  return `<section class="fragment-stack">
  <div class="timeline-head">
    <span class="company-brush">${entry.company}</span>
    <strong>${entry.role}</strong>
    <p>${entry.location}</p>
    <p class="subtle">${entry.period}</p>
  </div>
</section>`
}

const renderTimelineCollection = () => {
  const items = timelineOrder
    .map(([key, range]) => {
      const entry = content.timeline[key]

      return `    <article class="timeline-entry">
      <div class="timeline-head">
        <span class="company-brush company-${key}">${entry.company}</span>
        <strong>${entry.role}</strong>
        <p>${entry.location}</p>
        <p class="subtle">${range}</p>
      </div>
    </article>`
    })
    .join('\n\n')

  return `<section class="timeline-stack">
${items}
</section>`
}

const renderProfileCollection = (panels) => {
  return `<section class="profile-stack">
  <article class="card profile-card" id="publications">
${indent(panels.writing, 4)}
  </article>

  <article class="card profile-card" id="skills">
${indent(panels.skills, 4)}
  </article>
</section>`
}

const renderEducationSection = (educationPanel) => {
  return `<article class="card profile-card education-column-card" id="education">
${indent(educationPanel, 2)}
</article>`
}

const replaceBetweenMarkers = (html, marker, replacement) => {
  const pattern = new RegExp(`(<!-- generated:${marker}:start -->)([\\s\\S]*?)(<!-- generated:${marker}:end -->)`)
  if (!pattern.test(html)) {
    throw new Error(`Missing markers for ${marker} in index.html`)
  }

  const next = html.replace(pattern, `$1\n${indent(replacement, 12)}\n            $3`)

  return next
}

const writeGeneratedFiles = async () => {
  await mkdir(path.join(fragmentsDir, 'panels'), { recursive: true })
  await mkdir(path.join(fragmentsDir, 'timeline'), { recursive: true })

  const generatedPanels = {
    overview: renderOverview(),
    education: renderEducation(),
    skills: renderSkills(),
    writing: renderWriting(),
  }
  const generatedProfileCollection = renderProfileCollection(generatedPanels)
  const generatedEducationSection = renderEducationSection(generatedPanels.education)
  const generatedTimelineCollection = renderTimelineCollection()

  const generatedTimeline = Object.fromEntries(
    Object.entries(content.timeline).map(([key, value]) => [key, renderTimeline(value)]),
  )

  await Promise.all([
    ...Object.entries(generatedPanels).map(([key, html]) =>
      writeFile(path.join(fragmentsDir, 'panels', `${key}.html`), `${html}\n`),
    ),
    ...Object.entries(generatedTimeline).map(([key, html]) =>
      writeFile(path.join(fragmentsDir, 'timeline', `${key}.html`), `${html}\n`),
    ),
  ])

  const indexHtml = await readFile(indexPath, 'utf8')
  const withProfile = replaceBetweenMarkers(indexHtml, 'feature-panel', generatedProfileCollection)
  const withTimeline = replaceBetweenMarkers(withProfile, 'timeline-detail', generatedTimelineCollection)
  const withEducation = replaceBetweenMarkers(withTimeline, 'education-section', generatedEducationSection)
  await writeFile(indexPath, withEducation)
}

await writeGeneratedFiles()