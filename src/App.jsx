import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
