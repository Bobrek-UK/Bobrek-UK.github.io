import React, { Component } from 'react'

export default class Employment extends Component {
  render() {
    return (
        <div className="Employment" style={{width: '100vw', height: '500px', textAlign: 'center'}}>
        <div style={{width: '100vw', height: '2px', backgroundColor: 'black'}}></div>
        <div style={{mx: '0 auto', marginTop: '10px'}}><h1>Employment</h1></div>
        <div>Co-op Swanage, Customer Team Member: 2017-Present<p>Some guff about working at co-op</p></div>
        <div>iConvey, telesales customer advisor: 2015-2017<p>some guff about iConvey</p></div>
        </div>
    )
  }
}
