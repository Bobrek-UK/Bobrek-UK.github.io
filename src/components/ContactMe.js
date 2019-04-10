import React, { Component } from 'react'

export default class ContactMe extends Component {
  render() {
    return (
        <div className="ContactMe" style={{width: '100vw', height: '500px', textAlign: 'center'}}>
        <div style={{width: '100vw', height: '2px', backgroundColor: 'black'}}></div>
        <div style={{mx: '0 auto', marginTop: '10px'}}><h1>Contact Me</h1></div>
        <div>Email address: r.crisp@hotmail.com<p>
          LinkedIn: (my linkedin link)</p></div>
        </div>
    )
  }
}
