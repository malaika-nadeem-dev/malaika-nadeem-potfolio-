const services = [
  {
    name: 'Custom Website Development',
    type: 'Frontend',
    description:
      'Modern, responsive and user-friendly websites built with clean and professional frontend technologies.',
  },

  {
    name: 'WordPress Website Development',
    type: 'WordPress',
    description:
      'Professional WordPress websites with customization, Elementor and responsive layouts.',
  },

  {
    name: 'E-Commerce Development',
    type: 'E-Commerce',
    description:
      'Functional and responsive online stores designed to provide a smooth shopping experience.',
  },

  {
    name: 'Website Redesign & UI',
    type: 'Design',
    description:
      'Modern redesigns that improve website appearance, usability, responsiveness and user experience.',
  },
]

function Services() {
  return (
    <section className="skills services" id="services">

      <div className="skills-container">

        {/* Heading */}

        <div className="skills-heading">

          <p className="section-subtitle">
            What I Offer
          </p>

          <h2>
            My <span>Services</span>
          </h2>

          <p>
            I create modern, responsive and user-friendly digital
            experiences tailored to different business and project needs.
          </p>

        </div>


        {/* Services Train */}

        <div className="skills-grid">

          <div className="skills-track">

            {[...services, ...services].map((service, index) => (

              <div
                className="skill-card service-card"
                key={`${service.name}-${index}`}
              >

                <div className="skill-top">

                  <span className="skill-number">
                    {String((index % services.length) + 1).padStart(2, '0')}
                  </span>

                  <span className="skill-level">
                    {service.type}
                  </span>

                </div>


                <h3>
                  {service.name}
                </h3>


                <p>
                  {service.description}
                </p>


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

export default Services