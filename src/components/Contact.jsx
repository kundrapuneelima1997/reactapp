import React from 'react'
import Header from './Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Contact() {
  return (
    <div>
        <Row>
            <Col sm={2}> <Header/></Col>
            <Col sm={10}></Col>
        </Row>
    </div>
  )
}

export default Contact