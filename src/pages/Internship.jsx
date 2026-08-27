import { Link } from 'react-router-dom'
function Internship() {
  return (
    <section className="detail-page">
      <div className="detail-container">

       <Link
  to="/"
  className="back-link"
>
  <span>←</span>
  <span>Back to Portfolio</span>
</Link>

        <p className="section-subtitle">Professional Training</p>

        <h1>
          My <span>Internship</span>
        </h1>

        <p className="detail-intro">
          Details about my internship experience and the practical
          skills I developed during my training.
        </p>


        <div className="detail-card">

          <span className="detail-year">
            2026 — Present
          </span>

          <h2>Web Development Intern</h2>

          <h3>FENTIXTECH</h3>

          <p>
            Working on practical web development tasks and building
            responsive websites using modern frontend technologies.
            This experience has helped me improve my development
            workflow and problem-solving skills.
          </p>

          <div className="detail-tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>GitHub</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Internship