import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';

function App() {
  return (
    <div>
      <Sidebar />
      <div className='main'>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
