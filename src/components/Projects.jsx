const projects = [
  {
    title: 'Weather App',
    description:
      'A responsive weather application that provides current weather information based on the searched city.',
    technologies: ['React', 'JavaScript', 'CSS', 'OpenWeather API'],
    github: 'https://github.com/malaika-nadeem-dev/react-weather-app',
    live: 'https://weather-app-by-malaika.netlify.app/',
  },

   {
    title: 'React Todo List',
    description:
      'A responsive todo list application built with React to manage daily tasks with a simple and interactive interface.',
    technologies: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/malaika-nadeem-dev/react-todo-list',
    live: 'https://react-todo-list-tasks.netlify.app/',
  },
  
  {
    title: 'Catalog-Z Clone',
    description:
      'A pixel-perfect responsive website clone created as part of my internship using HTML and CSS Flexbox.',
    technologies: ['HTML5', 'CSS3', 'Flexbox'],
    github: 'https://github.com/malaika-nadeem-dev/catalog-z-clone',
    live: 'https://pixel-perfect-clone-by-malaika.netlify.app/',
  },

  {
    title: 'Personal Portfolio',
    description:
      'A modern responsive personal portfolio built with React to showcase my skills, projects and development journey.',
    technologies: ['React', 'JavaScript', 'CSS3'],
    github: '#',
    live: '#',
  },

  {
    title: 'Whitepace Bootstrap Clone',
    description:
      'A responsive website clone of the Whitepace landing page built with Bootstrap, focusing on clean layout, responsive design and modern UI.',
    technologies: ['HTML5', 'CSS3', 'Bootstrap'],
    github: 'https://github.com/malaika-nadeem-dev',
    live: 'https://whitepace-bootstrap-clone-malaika-n.netlify.app/',
  },

   {
    title: 'Bootstrap Website Clone',
    description:
      'A responsive website clone built with Bootstrap 5, focusing on clean layout, responsive design and modern user interface.',
    technologies: ['HTML5', 'CSS3', 'Bootstrap 5'],
    github: 'https://github.com/malaika-nadeem-dev/bootstrap-website-clone',
    live: 'https://bootstrap5-website-clone-project.netlify.app/',
  },

  {
    title: 'Instagram UI Clone',
    description:
      'A responsive Instagram-inspired user interface clone built to practice modern web layout, styling and responsive design.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/malaika-nadeem-dev/instagram-ui-clone',
    live: 'https://malaika-nadeem-insta-ui.netlify.app/home',
  },

  {
    title: 'First Task',
    description:
      'A responsive website project created as part of my web development learning journey, focusing on layout, styling and responsive design.',
    technologies: ['HTML5', 'CSS3'],
    github: 'https://github.com/malaika-nadeem-dev/first-task',
    live: 'https://first-task-by-malaika-nadeem.netlify.app/',
  },

  {
    title: 'Winter Gallery Responsive',
    description:
      'A responsive winter-themed gallery website created as part of my internship, focusing on responsive layouts and clean visual presentation.',
    technologies: ['HTML5', 'CSS3', 'Responsive Design'],
    github: 'https://github.com/malaika-nadeem-dev/winter-gallery-responsive',
    live: 'https://winter-gallery-responsive-internship.netlify.app/',
  },
]


function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-subtitle">My Recent Work</p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            Here are some of the projects I have built during my
            learning and development journey.
          </p>
        </div>


        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={project.title}>

              <div className="project-number">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>


                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>


                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    Live Demo
                    <span>→</span>
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects