import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

//128 x 128
import bikesafety from '../images/bikesafety.png'
import buglogger from '../images/buglogger.png'
import profile from '../images/selfie.png'
import sdn from '../images/sdn.png'

export default class Homepage extends Component {
  render() {
    return (
      
      <div>
        <div style={{paddingTop: 30, display: 'flex', justifyContent: 'center'}}>
          <img src={profile} alt="profile"/>
        </div>
        <div style={{color: 'black', textAlign: 'center'}}>
          <h1 style={{fontSize: 60}}>Michael Hudachek</h1>
        </div>
        <div style={{color: 'black',display: 'flex', justifyContent: 'center'}}>
        <a href='mailto:mhudach@purdue.edu' style={{color: 'black'}}> Email</a>&nbsp;|&nbsp;<a href='https://github.com/hud987/' style={{color: 'black'}}>GitHub</a>&nbsp;|&nbsp;<a href='https://www.linkedin.com/in/michael-hudachek-4bb67812a/' style={{color: 'black'}}>LinkedIn</a>
        </div>
        <Row style={{paddingTop: 20, display: 'flex', textAlign: 'center'}}>
          <Col ></Col>
          <Col sm={5} style={{
            margin: 10,
            padding: 20,
            borderRadius:3, 
            marginRight: 20, 
            display: 'flex', 
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, .1)'}}
          >
            <div>
            <div style={{display: 'flex', justifyContent: 'center'}} ><img src={bikesafety} alt="bike safety"/></div>
            <div style={{paddingTop: 20, display: 'flex', justifyContent: 'center'}}><h2 style={{color: 'black'}}>Bike Safety App</h2></div>
            <div style={{paddingTop: 10}}><h6 style={{color: 'black'}}>Mobile app to warn drivers of nearby bicyclists</h6></div>
            <div style={{paddingTop: 0}}><h6 style={{color: 'black'}}>React-Native | Firebase</h6></div>
            <div style={{paddingTop: 10, display: 'flex', justifyContent: 'center'}}>
            <Button onClick={() => {window.location='https://github.com/hud987/BikeSafetyApp'}} variant="dark" style={{backgroundColor: '#212529'}}>GitHub</Button>
            </div>
            </div>
          </Col>
          <Col sm={5} style={{
            margin: 10,
            padding: 20,
            borderRadius:3, 
            marginRight: 20, 
            display: 'flex', 
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, .1)'}}
          >
            <div>
            <div style={{display: 'flex', justifyContent: 'center'}} ><img src={buglogger} alt="bike safety"/></div>
            <div style={{paddingTop: 20, display: 'flex', justifyContent: 'center'}}><h2 style={{color: 'black'}}>Bug Logger</h2></div>
            <div style={{paddingTop: 10}}><h6 style={{color: 'black'}}>Web app to track project bugs</h6></div>
            <div style={{paddingTop: 0}}><h6 style={{color: 'black'}}>React | MongoDB | Nodejs</h6></div>
            <div style={{paddingTop: 10, display: 'flex', justifyContent: 'center'}}>
              <Row>
              <Col>
              <Button onClick={() => {window.location='https://github.com/hud987/BugLogger'}} variant="dark" style={{backgroundColor: '#212529'}}>GitHub</Button>
              </Col>
              <Col>
              <Button onClick={() => {window.location='https://morning-mountain-28085.herokuapp.com/'}} variant="dark" style={{backgroundColor: '#212529'}}>Visit</Button>
              </Col>
              </Row>
              
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>

        <Row style={{paddingTop: 10,display: 'flex', textAlign: 'center'}}>
          <Col ></Col>
          <Col sm={5} style={{
            margin: 10,
            padding: 20,
            borderRadius:3, 
            marginRight: 20, 
            display: 'flex', 
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, .1)'}}
          >
            <div>
            <div style={{display: 'flex', justifyContent: 'center'}} ><img src={sdn} alt="SDN"/></div>
            <div style={{paddingTop: 20, display: 'flex', justifyContent: 'center'}}><h2 style={{color: 'black'}}>Distributed Router Sim</h2></div>
            <div style={{paddingTop: 10}}><h6 style={{color: 'black'}}>This Web App simulates a distributed router network to easily demonstrate routing algorithms</h6></div>
            <div style={{paddingTop: 0}}><h6 style={{color: 'black'}}>React-Native | JavaScript</h6></div>
            <div style={{paddingTop: 10, display: 'flex', justifyContent: 'center'}}>
            <Row>
              <Col>
              <Button onClick={() => {window.location='https://github.com/hud987/DistributedRouters'}} variant="dark" style={{backgroundColor: '#212529'}}>GitHub</Button>
              </Col>
              <Col>
              <Button onClick={() => {window.location='https://thawing-crag-42208.herokuapp.com/'}} variant="dark" style={{backgroundColor: '#212529'}}>Visit</Button>
              </Col>
              </Row>
            </div>
            </div>
          </Col>
          <Col sm={5} style={{
            margin: 10,
            padding: 20,
            borderRadius:3, 
            marginRight: 20, 
            display: 'flex', 
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, .0)'}}
          >
          </Col>
          <Col></Col>
        </Row>

      </div>

    )
  }
}