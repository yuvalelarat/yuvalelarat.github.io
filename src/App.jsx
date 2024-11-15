import Top from './components/Top/Top'
import About from './components/Mid/Mid'
import Projects from './components/Proyektim/Projects'
import Bottom from './components/Bottom/Bottom'
import ParticlesComponent from './components/particles'

function App() {

  return (
    <>
    <ParticlesComponent id="particles"/>
    <Top/>
    <About/>
    <Projects/>
    <Bottom/>
    </>
  )
}

export default App
