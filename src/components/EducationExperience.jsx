import { useEffect, useRef, useState } from 'react'

const journeyCards = [
  {
    number: '01',
    icon: '🎓',
    title: 'Education',
    subtitle: 'Academic Background',
    description:
      'Explore my academic journey, degree, institution, and the knowledge I have developed throughout my studies.',
    link: '/education',
  },

  {
    number: '02',
    icon: '📜',
    title: 'Certifications',
    subtitle: 'Professional Learning',
    description:
      'Discover the certifications and additional courses I have completed to strengthen my technical skills.',
    link: '/certifications',
  },

  {
    number: '03',
    icon: '💼',
    title: 'Internship',
    subtitle: 'Professional Training',
    description:
      'Learn about my internship experience, responsibilities, projects, and the practical skills I gained.',
    link: '/internship',
  },

  {
    number: '04',
    icon: '🚀',
    title: 'Work Experience',
    subtitle: 'Professional Journey',
    description:
      'Explore my professional experience, roles, responsibilities, and the technologies I have worked with.',
    link: '/experience',
  },
]

function EducationExperience() {
  const sectionRef = useRef(null)

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          // Animation only happens once
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      className="education-experience"
      id="experience"
      ref={sectionRef}
    >
      <div className="education-experience-container">

        {/* Heading */}

        <div className="education-experience-heading">

          <p className="section-subtitle">
            My Journey
          </p>

          <h2>
            Education <span>& Experience</span>
          </h2>

          <p>
            Explore my academic background, certifications,
            professional training and development journey.
          </p>

        </div>


        {/* Cards */}

        <div className="journey-grid">

          {journeyCards.map((card, index) => (

            <div
              className={`journey-card ${
                index % 2 === 0
                  ? 'journey-card-left'
                  : 'journey-card-right'
              } ${
                isVisible
                  ? 'journey-card-visible'
                  : ''
              }`}
              style={{
                '--card-delay': `${index * 0.12}s`,
              }}
              key={card.title}
            >

              <div className="journey-card-top">

                <span className="journey-number">
                  {card.number}
                </span>

                <span className="journey-icon">
                  {card.icon}
                </span>

              </div>


              <div className="journey-card-content">

                <span className="journey-subtitle">
                  {card.subtitle}
                </span>

                <h3>
                  {card.title}
                </h3>

                <p>
                  {card.description}
                </p>

              </div>


              <a
                href={card.link}
                className="journey-link"
              >
                <span>Learn More</span>

                <span className="journey-arrow">
                  →
                </span>
              </a>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}

export default EducationExperience