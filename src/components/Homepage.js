import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

//128 x 128
import bikesafety from '../images/bikesafety.png'
import buglogger from '../images/buglogger.png'

export default class Homepage extends Component {
  render() {
    return (
      
      <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h1>**PIC HERE**</h1>
        </div>
        <div style={{color: 'black', display: 'flex', justifyContent: 'center'}}>
          <h1 style={{fontSize: 60}}>Michael Hudachek</h1>
        </div>
        <div style={{color: 'black',display: 'flex', justifyContent: 'center'}}>
        <a href='mailto:mhudach@purdue.edu' style={{color: 'black'}}> Email</a>&nbsp;|&nbsp;<a href='https://github.com/hud987/' style={{color: 'black'}}>GitHub</a>&nbsp;|&nbsp;<a href='https://www.linkedin.com/in/michael-hudachek-4bb67812a/' style={{color: 'black'}}>LinkedIn</a>
        </div>
        <Row style={{paddingTop: 50, height: 90, justifyContent: 'center'}}>
          <Col sm={5} style={{
            borderRadius:3, 
            marginRight: 20, 
            display: 'flex', 
            justifyContent: 'center',
            padding: 30,
            backgroundColor: 'rgba(255, 255, 255, .1)'}}
          >
            <div>
            <div style={{display: 'flex', justifyContent: 'center'}} ><img src={bikesafety} alt="bike safety"/></div>
            <div style={{paddingTop: 20, display: 'flex', justifyContent: 'center'}}><h2 style={{color: 'black'}}>Bike Safety App</h2></div>
            <div style={{paddingTop: 20}}><h6 style={{color: 'black'}}>Mobile app to warn drivers of nearby bicyclists</h6></div>
            <div style={{paddingTop: 20, display: 'flex', justifyContent: 'center'}}>
            <Button onClick={() => {window.location='https://github.com/hud987/BikeSafetyApp'}} variant="dark" style={{backgroundColor: '#212529'}}>GitHub</Button>
            </div>
            </div>
          </Col>
          <Col sm={5} style={{
            borderRadius:3, 
            marginRight: 20, 
            display: 'flex', 
            justifyContent: 'center',
            padding: 30,
            backgroundColor: 'rgba(255, 255, 255, .1)'}}
          >
            <div>
            <div style={{display: 'flex', justifyContent: 'center'}} ><img src={buglogger} alt="bike safety"/></div>
            <div style={{paddingTop: 20, display: 'flex', justifyContent: 'center'}}><h2 style={{color: 'black'}}>Bug Logger</h2></div>
            <div style={{paddingTop: 20}}><h6 style={{color: 'black'}}>MERN web app to track project bugs</h6></div>
            <div style={{paddingTop: 20, display: 'flex', justifyContent: 'center'}}>
              <Row>
              <Col></Col>
              <Col>
              <Button onClick={() => {window.location='https://github.com/hud987/BugLogger'}} variant="dark" style={{backgroundColor: '#212529'}}>GitHub</Button>
              </Col>
              <Col>
              <Button onClick={() => {window.location='https://morning-mountain-28085.herokuapp.com/'}} variant="dark" style={{backgroundColor: '#212529'}}>Visit</Button>
              </Col>
              <Col></Col>
              </Row>
              </div>
            </div>
          </Col>
        </Row>

      </div>

    )
  }
}