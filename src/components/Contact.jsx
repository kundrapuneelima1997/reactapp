import React from 'react'
import Header from './Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Contact() {
  return (
    <div>
        <Row>
            <Col sm={2}> <Header/></Col>
            <Col sm={10}>
            <Row>
              <div className="contact">
              <Col sm={6}>
               <h1>Send Question</h1>
               <p>Your Name</p>
               <input type="text" /><br/>
               <p>Your Email</p>
               <input type="text" /><br/>
               <p>Your Message</p>
               <input type="text" /><br/>
               <button>Send Message</button>
              </Col>
              <Col sm={6}>
              <h1>Address</h1>
              <p>25 West 25th Street,Vizag, AP</p><br/>
              <h1>Phones</h1>
              <p>+267346374</p>
              <p>+653538494</p><br/>
              <h1>Email</h1>
              <p>taanvi.@gmail.com</p><br/>
              <h1>Working Hours</h1>
              <p>Mon-Fri: 10:00-18:00 PM</p><br/>
              <h1>Follow Us</h1>
              <p></p>
              </Col>
              </div>
            </Row>

            
            </Col>
        </Row>
    </div>
  )
}

export default Contact