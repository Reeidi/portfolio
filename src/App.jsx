import About from './components/About/About';
import Design from './components/Design/Design';
import Development from './components/Development/Development';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <NavBar />
      <>
        <About />
        <Design />
        <Development />
        <Projects />
      </>
      <Footer />
    </>
  )
}

export default App;
