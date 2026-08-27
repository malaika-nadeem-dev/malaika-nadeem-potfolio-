import { Link } from 'react-router-dom'

function Certifications() {
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

        <p className="section-subtitle">My Journey</p>

        <h1>
          My <span>Certifications</span>
        </h1>

        <p className="detail-intro">
          A collection of certifications and courses that have
          helped me expand my technical knowledge.
        </p>

        <div className="detail-list">

           {/* Wordpress */}

          <div className="detail-card">

            <div className="certificate-image">
              <img
                src="/certificates/wordpress.jpg"
                alt="wordpress Certificate"
              />
            </div>

            <span className="detail-year">
               Aug 2025 — Nov 2025
            </span>

            <h2>WordPress</h2>

            <h3>DigiSkills.PK</h3>

            <p>
              Completed training in WordPress, developing 
              skills in website creation, customization, 
              themes, plugins, and content management.
            </p>

          </div>
          {/* Freelancing */}

          <div className="detail-card">

            <div className="certificate-image">
              <img
                src="/certificates/freelancing.jpg"
                alt="Graphic Design Certificate"
              />
            </div>

            <span className="detail-year">
              Aug 2025 — Nov 2025
            </span>

            <h2>Freelancing</h2>

            <h3>DigiSkills.PK</h3>

            <p>
              Completed training in freelancing, developing skills in client communication,
               project management, online work platforms, and
                building a professional freelance career.
            </p>

          </div>

          {/* UI/UX & Webflow */}

          <div className="detail-card">

            <div className="certificate-image">
              <img
                src="/certificates/ui ux and webflow.jpg"
                alt="UI/UX and Webflow Certificate"
              />
            </div>

            <span className="detail-year">
              Apr 2026 — Jul 2026
            </span>

            <h2>UI/UX & Webflow</h2>

            <h3>DigiSkills.PK</h3>

            <p>
              Completed training in UI/UX and Webflow, developing skills in
              user interface design, user experience principles, and
              creating modern websites with Webflow.
            </p>

          </div>


          {/* Communication and Soft Skills */}

          <div className="detail-card">

            <div className="certificate-image">
              <img
                src="/certificates/communication-and-soft-skills.jpg"
                alt="Communication and Soft Skills Certificate"
              />
            </div>

            <span className="detail-year">
              Dec 2025 — Mar 2026
            </span>

            <h2>Communication and Soft Skills</h2>

            <h3>DigiSkills.PK</h3>

            <p>
              Completed training focused on effective communication,
              professional interaction, teamwork, and essential soft skills
              for personal and professional development.
            </p>

          </div>


          {/* Graphic Design */}

          <div className="detail-card">

            <div className="certificate-image">
              <img
                src="/certificates/graphic-design.jpg"
                alt="Graphic Design Certificate"
              />
            </div>

            <span className="detail-year">
              Dec 2025 — Mar 2026
            </span>

            <h2>Graphic Design</h2>

            <h3>DigiSkills.PK</h3>

            <p>
              Completed training in graphic design, developing skills in
              visual communication, design principles, creative concepts,
              and digital design techniques.
            </p>

          </div>
          {/* AI Quiz */}

          <div className="detail-card">

            <div className="certificate-image">
              <img
                src="/certificates/India's biggest AI quiz.png"
                alt="Biggest AI quiz"
              />
            </div>

            <span className="detail-year">
              19 July 2026
            </span>

            <h2>India's Biggest AI Quiz</h2>

            <h3>Campus Crew</h3>

            <p>
              Participated in India’s Biggest AI Quiz 2026,
               demonstrating interest in artificial intelligence, 
               emerging technologies, and AI-related knowledge.
            </p>

          </div>
          {/* appreciation*/}

          <div className="detail-card">

            <div className="certificate-image">
              <img
                src="/certificates/appreciation certificate for outstanding english effort.jpg"
                alt="appreciation certificate"
              />
            </div>

            <span className="detail-year">
              26 Aug 2025
            </span>

            <h2>Appreciation Certificate for Outstanding English Efforts</h2>

            <h3>Greate Future Pakistan</h3>

            <p>
              Recognized for outstanding efforts in English, 
              demonstrating strong dedication, participation, 
              and enthusiasm for developing English language skills.
            </p>

          </div>
         

        </div>

      </div>
    </section>
  )
}

export default Certifications