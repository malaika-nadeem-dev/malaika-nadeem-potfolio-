import { Link } from 'react-router-dom'

function Education() {
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
          My <span>Education</span>
        </h1>

        <p className="detail-intro">
          Here is a detailed look at my academic background and
          educational journey.
        </p>


        {/* Education 1 */}

        <div className="detail-card">

          <span className="detail-year">
            2025 — 2027
          </span>

          <h2>Bachelor of Business and Information Technology (BBIT)</h2>

          <h3>Virtual University of Pakistan</h3>

          <p>
            I am pursuing a Bachelor’s degree in Business and Information Technology,
            where I am developing knowledge in business management,
            information systems, technology, and digital solutions.
          </p>

          <div className="detail-tags">
            <span>Business Management</span>
            <span>Information Systems</span>
            <span>Technology</span>
            <span>Digital Solutions</span>
          </div>

        </div>


        {/* Education 2 */}

        <div className="detail-card">

          <span className="detail-year">
            2022 — 2024
          </span>

          <h2>ADS in Computer Science</h2>

          <h3>Bahauddin Zakariya University, Multan</h3>

          <p>
            I completed my ADP degree in Computer Science,
            where I developed a strong foundation in programming,
            software development, databases, and web technologies.
          </p>

          <div className="detail-tags">
            <span>CGPA: 3.9 / 4.0</span>
            <span>Computer Science</span>
            <span>Programming</span>
            <span>Web Development</span>
            <span>Database</span>
          </div>

        </div>
        <div className="detail-card">

          <span className="detail-year">
            2020 — 2022
          </span>

          <h2>Intermediate (ICS)</h2>

          <h3>BISE MUltan</h3>

          <p>
            I completed my Intermediate (ICS) with Physics and Mathematics,
             where I built a strong foundation in computer science,
              programming, mathematics, and problem-solving skills.

          </p>

          <div className="detail-tags">
            <span>Marks: 887 / 1100</span>
            <span>Computer Science</span>
            <span>Programming</span>
            <span>Mathematics</span>
            <span>problem-solving skills</span>
          </div>

        </div>

        {/* Education 2 */}

        

        

         <div className="detail-card">

          <span className="detail-year">
            2018 — 2020
          </span>

          <h2>Matricualtion</h2>

          <h3>BISE MUltan</h3>

          <p>
            I completed my Matriculation with Computer Science and science subjects, 
            building a strong foundation in computer studies, mathematics, and general science.


          </p>

          <div className="detail-tags">
            <span>Marks: 1003 / 1100</span>
            <span>Basics of Computer Science</span>
            <span>General science</span>
            <span>Mathematics</span>
            <span>Problem-solving skills</span>
          </div>

        </div>
        

        

      </div>
    </section>
  )
}

export default Education