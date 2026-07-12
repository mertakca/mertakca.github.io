import { cvData } from './data/cv'
import './App.css'

function App() {
  const { profile, experience, education, skills, publications, links } = cvData

  return (
    <div className="page-shell">
      <div className="background-layer" aria-hidden="true">
        <span className="orb orb-a"></span>
        <span className="orb orb-b"></span>
        <span className="grid-mask"></span>
      </div>

      <header className="hero section reveal">
        <p className="eyebrow">Software Engineer</p>
        <h1>{profile.name}</h1>
        <p className="summary">{profile.summary}</p>

        <div className="meta-line" aria-label="Location and contact links">
          <span>{profile.location}</span>
          <a href={links.email.href}>{links.email.label}</a>
          <a href={links.linkedin.href} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={links.medium.href} target="_blank" rel="noreferrer">
            Medium
          </a>
        </div>

      </header>

      <main>
        <section className="section reveal" id="experience">
          <h2>Work Experience</h2>
          <div className="cards">
            {experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="card">
                <div className="card-header">
                  <h3>
                    {job.role} - {job.company}
                  </h3>
                  <p className="subtle">{job.location}</p>
                </div>
                <p className="period">{job.period}</p>
                <ul>
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="education">
          <h2>Education</h2>
          <article className="card">
            <h3>{education.degree}</h3>
            <p className="subtle">{education.school}</p>
            <p className="period">
              {education.location} - {education.period}
            </p>
            <ul>
              {education.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section reveal" id="skills">
          <h2>Skills</h2>
          <div className="cards">
            {skills.map((group) => (
              <article key={group.category} className="skill-group card">
                <h3>{group.category}</h3>
                <p>{group.items.join(', ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="publications">
          <h2>Publications</h2>
          <div className="cards">
            {publications.map((publication) => (
              <article key={publication.title} className="card publication">
                <h3>{publication.title}</h3>
                <p className="subtle">{publication.date}</p>
                <p>{publication.summary}</p>
                <a href={publication.href} target="_blank" rel="noreferrer">
                  Read on Medium
                </a>
              </article>
            ))}
          </div>
          <a
            className="more-articles-link"
            href="https://medium.com/@mertakca"
            target="_blank"
            rel="noreferrer"
          >
            See my other articles
          </a>
        </section>
      </main>

      <footer className="section footer reveal">
          Last updated 2026.
      </footer>
    </div>
  )
}

export default App
