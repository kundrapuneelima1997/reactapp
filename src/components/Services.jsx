
import Header from './Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import Navbars from './Navbars';
 import React, { useRef } from 'react';
 const Services = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
      const container = containerRef.current;
      const scrollAmount = 300; // Adjust scroll amount as needed
      container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
      });
  };

  return (
      <div className="ser">
       <Row>
        <Col sm={12}>
        <Navbars/></Col>
       </Row>
          <Row>
            <Col sm={2}><Header/></Col>
             <Col sm={10} className='blank'>
         <div className="containerFluid serv1">
           
           <div className='ser2'>
           <h1>Our Services</h1>
           </div>
           </div>
            
         <div className="ser3">
            <h1>What we offer</h1>
         </div>
            <div className="gallery-wrapper">
            <button className="scroll-btn left-btn" onClick={() => scroll('left')}>&lt;</button>
            <div className="gallery-container" ref={containerRef}>
                <div className="gallery">
                <img src="https://templates.hibootstrap.com/jeel/default/assets/images/offer/offer2.jpg" alt=" 3" />
                    <img src="https://templates.hibootstrap.com/jeel/default/assets/images/offer/offer3.jpg" alt=" 4" />
                    <img src="https://templates.hibootstrap.com/jeel/default/assets/images/offer/offer1.jpg" alt=" 5" />
                    <img src="https://templates.hibootstrap.com/jeel/default/assets/images/offer/offer4.jpg" alt="1" />
                    <img src="https://templates.hibootstrap.com/jeel/default/assets/images/offer/offer5.jpg" alt=" 2" />
                    <img src="https://templates.hibootstrap.com/jeel/default/assets/images/offer/offer2.jpg" alt=" 3" />
                    <img src="https://templates.hibootstrap.com/jeel/default/assets/images/offer/offer3.jpg" alt=" 4" />
                    <img src="https://templates.hibootstrap.com/jeel/default/assets/images/offer/offer1.jpg" alt=" 5" />
                   
                </div>
            </div>
            <button className="scroll-btn right-btn" onClick={() => scroll('right')}>&gt;</button>
        </div>
          <div className="ser4">
            
          </div>
            
            </Col>
           
            </Row>
    </div>
     
  )
}

export default Services