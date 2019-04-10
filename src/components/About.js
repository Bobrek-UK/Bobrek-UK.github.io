import React, { Component } from 'react';
import Flippy, {FrontSide, BackSide} from 'react-flippy';

export default class About extends Component {
  render() {
    return (
      <div className="About" style={{width: '100vw',  textAlign: 'center'}}>
        <div style={{width: '100vw', height: '2px', backgroundColor: 'black'}}></div>
        <div style={{mx: '0 auto', marginTop: '10px', marginBottom: '40px'}}><h1>About</h1></div>

           
  <Flippy
    className="flippy"
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="vertical" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{paddingLeft: '50px', paddingRight: '50px', maxWidth: '1000px', display: 'inline-block', marginBottom: '30px', textAlign: 'justify', textJustify: 'inter-word'}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        backgroundColor: 'white'
      }}
    >
    <div className="flipFlop">
      I am a Bournemouth University computing student, currently in my second year of study, who will be specialising as a software Engineer in my final year. I have knowledge of several front-end and back-end 
          technologies and have found that I have a particular passion for back-end development.<br /><br /> The average grade that I have obtained so far on my degree is over 85%. My first year grade averaged 85.5% exactly, and I am currently on target to achieve a higher grade this year.
          <br /><br />
          <div style={{textAlign: 'center', fontWeight: 'bold'}}>
          Flip Me
          </div>
          </div>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: 'white'}}>
      <div className="flipFlop">
      I am hardworking and determined, with a long term desire to work in technology. Though my studies have taught me a lot about computing in general I am keen to get some real world experience and expand my practical skills.
      <br /><br />
      My personal interests include reading, writing and miniature painting. On a more active side I enjoy playing any kind of sport and long distance walking or running.
      <br /><br />
      I hope that this CV is of interest to you.
      </div>
    </BackSide>
  </Flippy>
  <div style={{height: '70px'}} />
  </div>
  
    )
  }
}
