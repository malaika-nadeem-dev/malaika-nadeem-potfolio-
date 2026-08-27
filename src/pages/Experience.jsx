import { Link } from 'react-router-dom'

function Experience() {
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


        <p className="section-subtitle">
          Professional Journey
        </p>


        <h1>
          Work <span>Experience</span>
        </h1>


        <p className="detail-intro">
          Explore my professional experience, responsibilities and
          the technologies I have worked with.
        </p>


        <div className="detail-card">

          <span className="detail-year">
            
          </span>


          <h2>
            Frontend Developer
          </h2>


          <h3>
          
          </h3>


          <p>
            Developed responsive and user-friendly websites using HTML, CSS, JavaScript, and React. 
            Worked on modern layouts,
             interactive components, responsive interfaces, 
             and API integration while strengthening practical frontend development skills.
          </p>


          <div className="detail-tags">

            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>          
            <span>Bootstrap 5</span>
            <span>React.js</span>
            <span>Git & GitHub</span>
            <span>Deployment</span>

          </div>

        </div>

        
        <div className="detail-card">

          <span className="detail-year">
           
          </span>


          <h2>
            WordPress Development
          </h2>


          <h3>
           
          </h3>


          <p>
            Developed and customized professional WordPress websites and WooCommerce stores using XAMPP, 
            focusing on responsive design, theme customization, plugin integration, custom layouts, product management,
             and user-friendly navigation. Applied modern web development practices to
              create functional and visually polished websites.
          </p>


          <div className="detail-tags">

             <span>WordPress</span>
  <span>WooCommerce</span>
  <span>Theme Customization</span>
  <span>Plugin Integration</span>
  <span>Responsive Design</span>
  <span>Page Builders</span>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Experience