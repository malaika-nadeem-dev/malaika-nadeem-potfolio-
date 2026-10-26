import { useEffect, useState } from 'react'

function Hero() {
  const titles = [
    'Frontend Developer',
    'WordPress Developer',
  ]

  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]

    const typingSpeed = isDeleting ? 60 : 100

    const timer = setTimeout(() => {

      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1))

        if (displayText === currentTitle) {
          setTimeout(() => {
            setIsDeleting(true)
          }, 4000)
        }

      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1))

        if (displayText === '') {
          setIsDeleting(false)

          setTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }

    }, typingSpeed)

    return () => clearTimeout(timer)

  }, [displayText, isDeleting, titleIndex])

  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-intro">A-o-A, I'm</p>

        <h1>
          Malaika <span>Nadeem</span>
        </h1>

        <h2 className="typing-title">
          {displayText}
          <span className="typing-cursor">|</span>
        </h2>

        <p className="hero-description">
          I create modern, responsive and user-friendly websites
          using React, Bootsrap,JavaScript, HTML5, CSS3 and WordPress.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="hero-btn primary-btn">
            View Projects
            <span className="button-arrow">→</span>
          </a>

          <a href="#contact" className="hero-btn secondary-btn">
            Let's Talk
          </a>

        </div>

      </div>

      <div className="hero-image">
        <div className="image-circle">
          <img src="/malaika.png" alt="Malaika Nadeem" />
        </div>
      </div>

    </section>
  )
}

export default Hero