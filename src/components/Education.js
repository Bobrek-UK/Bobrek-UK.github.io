import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
        <div className="Education" style={{width: '100vw', height: '500px', textAlign: 'center'}}>
        <div style={{width: '100vw', height: '2px', backgroundColor: 'black'}}></div>
        <div style={{mx: '0 auto', marginTop: '10px'}}><h1>Education</h1></div>
        <div>Bournemouth University (Current): BSc Software Engineering 2nd Year - Distinction Level<p>This course is due to finish in July 2020</p></div>
        <div>The Purbeck School: A-Levels in English Literature, Mathematics and Physics</div>
        </div>
    )
  }
}
