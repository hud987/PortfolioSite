import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';

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
          <Col sm={4} style={{marginRight: 20,backgroundColor: 'rgba(255, 255, 255, .3)'}}>text</Col>
          <Col sm={4} style={{marginLeft: 20,backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>text
          </Col>
        </Row>

      </div>

    )
  }
}