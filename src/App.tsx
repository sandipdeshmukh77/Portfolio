import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Skills />
      <Footer />
    </>
  )
}

export default App
