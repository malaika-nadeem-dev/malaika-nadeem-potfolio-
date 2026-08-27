import { useEffect, useRef, useState } from 'react'

function About() {
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
      className="about"
      id="about"
      ref={sectionRef}
    >
      <div className="about-container">

        {/* Left Side */}

        <div
          className={`about-content ${
            isVisible ? 'about-content-visible' : ''
          }`}
        >
          <p className="section-subtitle">
            Get To Know Me
          </p>

          <h2>
            About <span>Me</span>
          </h2>

          <p className="about-text">
            I'm Malaika Nadeem, a Frontend & WordPress Developer
            specializing in modern, responsive, and user-friendly
            websites. I work with HTML, CSS, JavaScript, React,
            WordPress, and WooCommerce to create clean, functional,
            and engaging digital experiences.
          </p>

          <a
            href="#contact"
            className="about-btn"
          >
            Let's Connect
            <span>→</span>
          </a>
        </div>


        {/* Right Side */}

        <div
          className={`about-highlights ${
            isVisible ? 'about-highlights-visible' : ''
          }`}
        >

          <div
            className="highlight-card"
            style={{ '--card-delay': '0.1s' }}
          >
            <span className="highlight-number">
              01
            </span>

            <h3>
              Creative
            </h3>

            <p>
              I love creating clean and engaging user interfaces.
            </p>
          </div>


          <div
            className="highlight-card"
            style={{ '--card-delay': '0.2s' }}
          >
            <span className="highlight-number">
              02
            </span>

            <h3>
              Responsive
            </h3>

            <p>
              I build websites that work smoothly across all devices.
            </p>
          </div>


          <div
            className="highlight-card"
            style={{ '--card-delay': '0.3s' }}
          >
            <span className="highlight-number">
              03
            </span>

            <h3>
              Learning
            </h3>

            <p>
              I'm continuously learning new technologies and improving
              my skills.
            </p>
          </div>


          <div
            className="highlight-card"
            style={{ '--card-delay': '0.4s' }}
          >
            <span className="highlight-number">
              04
            </span>

            <h3>
              Passionate
            </h3>

            <p>
              I enjoy turning ideas into real-world web experiences.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About