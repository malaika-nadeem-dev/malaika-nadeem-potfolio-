const skills = [
  {
    name: 'WordPress',
    level: 'Advanced',
    description: 'Website creation and customization with WordPress.',
  },
  
  
    {
    name: 'HTML5',
    level: 'Advanced',
    description: 'Semantic and accessible web structure.',
  },
  {
    name: 'CSS3',
    level: 'Advanced',
    description: 'Responsive layouts, animations and modern styling.',
  },
  {
    name: 'JavaScript',
    level: 'Advanced',
    description: 'Interactive and dynamic web functionality.',
  },
  {
    name: 'React.js',
    level: 'Advanced',
    description: 'Reusable components and modern React applications.',
  },
  {
    name: 'Bootstrap',
    level: 'Advanced',
    description: 'Responsive layouts using Bootstrap utilities.',
  },
  {
    name: 'Tailwind CSS',
    level: 'Intermediate',
    description: 'Utility-first responsive interface development.',
  },
  
  {
    name: 'Git & GitHub',
    level: 'Advanced',
    description: 'Version control and project collaboration.',
  },
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-subtitle">What I Know</p>

          <h2>
            My <span>Skills</span>
          </h2>

          <p>
            Here are some of the technologies and tools I have learned
            and worked with throughout my development journey.
          </p>
        </div>

        <div className="skills-grid">
  <div className="skills-track">

    {[...skills, ...skills].map((skill, index) => (
      <div className="skill-card" key={`${skill.name}-${index}`}>

        <div className="skill-top">
          <span className="skill-number">
            {String((index % skills.length) + 1).padStart(2, '0')}
          </span>

          <span className="skill-level">
            {skill.level}
          </span>
        </div>

        <h3>{skill.name}</h3>

        <p>{skill.description}</p>

        <div className="skill-line">
          <span></span>
        </div>

      </div>
    ))}

  </div>
</div>

      </div>
    </section>
  )
}

export default Skills