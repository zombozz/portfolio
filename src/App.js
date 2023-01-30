import About from './About';
import './App.css';
import ArrowDown from './ArrowDown';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Skills from './Skills';
import Socials from './Socials';
import Work from './Work';
import $ from 'jquery'
import Cursor from './Cursor';
import animateCursor from './Cursor'
import Nav from './Nav';

function App() {
  window.onload = function() {
    animateCursor()
  }
    
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className='header-background'></div>
      <Main />
      <Socials />
      <ArrowDown />
      <div className="space" id='about1'></div>
      <About />
      <div className="space" id='skills1'></div>
      <Skills />
      <div className="space" id='work1'></div>
      <Work />
      <div className="space" id='contact1'></div>
      <Contact />
      <Footer />
      <Cursor />
    </div>
  );
}

export default App;
