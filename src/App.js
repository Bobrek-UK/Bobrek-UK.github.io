import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coast from './components/coast.jpg';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Employment from './components/Employment';
import ContactMe from './components/ContactMe';
import { Link, animateScroll as scroll } from "react-scroll";


import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      
        <header className="App-header" id="home" style={{scrollBehavior: "smooth"}}>
          <nav className="navbar navbar-dark bg-dark fixed-top">
          <li className="linkitem">
          <Link activeClass="active" className="home" to="home" spy={true} smooth={true} duration={500} isDynamic={true} >Richard Crisp</Link>
          </li>
          <li className="linkitem">
          <Link activeClass="active" className="about" to="About" spy={true} smooth={true} duration={500} isDynamic={true} offset={-30}>About</Link>
          </li>
          <li className="linkitem"> 
          <Link activeClass="active" className="skills" to="Skills" spy={true} smooth={true} duration={500} isDynamic={true} offset={-30}>Skills</Link>
          </li>
          <li className="linkitem">
          <Link activeClass="active" className="education" to="Education" spy={true} smooth={true} duration={500} isDynamic={true} offset={-30}>Education</Link>
          </li>
          <li className="linkitem">
          <Link activeClass="active" className="employment" to="Employment" spy={true} smooth={true} duration={500} isDynamic={true} offset={-30}>Employment</Link>
          </li>
          <li className="linkitem">
          <Link activeClass="active" className="contactMe" to="ContactMe" spy={true} smooth={true} duration={500} isDynamic={true} offset={-30}>Contact Me</Link>
          </li> 
          
          </nav>
          
        </header>
       
        <div className='topDiv' style={{background: `url(${coast})`, height: '100vh', width: '100vw', textAlign: 'center', verticalAlign: 'middle', display: 'table-cell'}} >
        <div className="profilePlate">
          <p>Richard Crisp</p><p>Curriculum Vitae</p></div>
        </div>
          
          <section id="About"><About/></section>
          
          <section id="Skills"><Skills/></section>
          <section id="Education"><Education/></section>
          <section id="Employment"><Employment/></section>
          <section id="Contact me"><ContactMe/></section>
         
      </div>
    );
  }
}

export default App;
