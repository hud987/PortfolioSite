import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';

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
          github | mhudachek@purdue.edu
        </div>
        <Row style={{height: 90, justifyContent: 'center'}}>
          <Col sm={4} style={{
            borderRadius:3, 
            marginRight: 20, 
            display: 'flex', 
            justifyContent: 'center', 
            padding: 30,
            backgroundColor: 'rgba(255, 255, 255, .1)'}}
          >
            <div><img src={bikesafety} alt="bike safety"/></div>
            <h2>Bike Safety App</h2>
          </Col>
          <Col sm={4} style={{marginLeft: 20,backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>text
          </Col>
        </Row>

      </div>

    )
  }
}