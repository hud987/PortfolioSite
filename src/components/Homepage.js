import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

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
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h1 style={{fontSize: 60}}>Michael Hudachek</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          Email | GitHub | LinkedIn
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
            <div style={{paddingTop: 20}}><h6 style={{color: 'black'}}>Mobile application to warn drivers of nearby bicyclists</h6></div>
            <div style={{paddingTop: 20, display: 'flex', justifyContent: 'center'}}><Button style={{color: 'black'}}>GitHub</Button><div></div></div>
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
            <div style={{paddingTop: 20}}><h6 style={{color: 'black'}}>Mobile application to warn drivers of nearby bicyclists</h6></div>
            <div style={{paddingTop: 20, display: 'flex', justifyContent: 'center'}}>
              <Button style={{color: 'black'}}>GitHub</Button>
              <Button style={{color: 'black'}}>Check It Out</Button>
            </div>
            </div>
          </Col>
        </Row>

      </div>

    )
  }
}