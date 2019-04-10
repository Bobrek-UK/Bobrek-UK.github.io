import React, { Component } from 'react'
import styled from 'styled-components';
import java from './java.jpg';
import csharp from './Csharp.png';
import html from './html.png';
import css from './css.png';
import oracle from './oracle.png';
import react from './react.png';
import git from './Git.png';
import js from './js.png';
import php from './PHP.png';
import unity from './unity.jpg';
import cisco from './cisco.png';

const Card = styled.div`
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const Sprite =  styled.img`
width: 5em;
height: 5em;
display: inline-block;
`;

export default class Skills extends Component {
  render() {
    return (
        <div className="Skills" style={{width: '100vw', textAlign: 'center'}}>
        <div style={{width: '100vw', height: '2px', backgroundColor: 'black'}}></div>
        <div style={{mx: '0 auto', marginTop: '10px'}}><h1>Skills</h1></div>
        <div>I have intermediate knowledge of the following technologies:</div><br />
        <div style={{display: 'inline-block', textAlign: 'center'}}>
        <Card className = "card">
        <h5 className = "cardHeader">Java</h5>
        <Sprite src={java} />
        </Card>
        <Card className = "card">
        <h5 className = "cardHeader">C#</h5>
        <Sprite src={csharp} />
        </Card>
        <Card className = "card">
        <h5 className = "cardHeader">HTML</h5>
        <Sprite src={html} />
        </Card>
        <Card className = "card">
        <h5 className = "cardHeader">CSS</h5>
        <Sprite src={css} />
        </Card>
        <Card className = "card">
        <h5 className = "cardHeader">Oracle</h5>
        <Sprite src={oracle} />
        </Card>
        </div>
        <br /><br />
        <div>I have foundation knowledge of the following technologies:</div>
        <br />
        
        <div style={{display: 'inline-block', textAlign: 'center'}}>
        <Card className = "card">
        <h5 className = "cardHeader">React</h5>
        <Sprite src={react} />
        </Card>
        <Card className = "card">
        <h5 className = "cardHeader">Git</h5>
        <Sprite src={git} />
        </Card>
        <Card className = "card">
        <h5 className = "cardHeader">JavaScript</h5>
        <Sprite src={js} />
        </Card>
        <Card className = "card">
        <h5 className = "cardHeader">PHP</h5>
        <Sprite src={php} />
        </Card>
        <Card className = "card">
        <h5 className = "cardHeader">Unity</h5>
        <Sprite src={unity} />
        </Card>
        <Card className = "card">
        <h5 className = "cardHeader">Cisco</h5>
        <Sprite src={cisco} />
        </Card>
        </div>
        <br /><br />
        </div>
    )
  }
}
