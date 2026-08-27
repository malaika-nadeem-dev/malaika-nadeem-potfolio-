import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import EducationExperience from './components/EducationExperience'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Education from './pages/Education'
import Certifications from './pages/Certifications'
import Internship from './pages/Internship'
import Experience from './pages/Experience'


function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <EducationExperience />

      <Contact />
      <Footer />

    </>
  )
}


function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Navbar />

        <Routes>

          {/* Home Page */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* Education */}

          <Route
            path="/education"
            element={<Education />}
          />


          {/* Certifications */}

          <Route
            path="/certifications"
            element={<Certifications />}
          />


          {/* Internship */}

          <Route
            path="/internship"
            element={<Internship />}
          />


          {/* Work Experience */}

          <Route
            path="/experience"
            element={<Experience />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App