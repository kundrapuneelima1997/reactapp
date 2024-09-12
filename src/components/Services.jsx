
import Header from './Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import Navbars from './Navbars';
 import React, { useRef } from 'react';
 import Card from 'react-bootstrap/Card';
 import Button from 'react-bootstrap/Button';
 import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
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
                <img src="https://templates.hibootstrap.com/jeel/default/assets/images/offer/offer2.jpg" alt=" 3"  className='jig'/>
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
        <div className="ser5">
            <h1>Our beauty services</h1>
        </div>
          <div className="ser4">
          <Card className='spy' >
      <Card.Img className='pic1' variant="top" src="https://templates.hibootstrap.com/jeel/default/assets/images/services/services1.jpg" />
      <Card.Body>
        <Card.Title>Beauty Center</Card.Title>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable
        </Card.Text>
        <Button >View more</Button>
      </Card.Body>
    </Card>

    <Card className='spy'>
      <Card.Img className='pic1' variant="top" src="https://templates.hibootstrap.com/jeel/default/assets/images/services/services2.jpg" />
      <Card.Body>
        <Card.Title>Spa Center</Card.Title>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable
        </Card.Text>
        <Button >View more</Button>
      </Card.Body>
    </Card>
    <Card className='spy'>
      <Card.Img className='pic1' variant="top" src="https://templates.hibootstrap.com/jeel/default/assets/images/services/services3.jpg" />
      <Card.Body>
        <Card.Title>Massage</Card.Title>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable
        </Card.Text>
        <Button >View more</Button>
      </Card.Body>
    </Card>
          </div>
            <div className="ser6">
            <Card className='spy'>
      <Card.Img className='pic1' variant="top" src="https://templates.hibootstrap.com/jeel/default/assets/images/services/services4.jpg" />
      <Card.Body>
        <Card.Title>Stone therapy</Card.Title>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable
        </Card.Text>
        <Button >View more</Button>
      </Card.Body>
    </Card>
    <Card className='spy'>
      <Card.Img className='pic1' variant="top" src="https://templates.hibootstrap.com/jeel/default/assets/images/services/services6.jpg" />
      <Card.Body>
        <Card.Title>Stone therapy</Card.Title>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable
        </Card.Text>
        <Button >View more</Button>
      </Card.Body>
    </Card>
    <Card className='spy'>
      <Card.Img className='pic1' variant="top" src="https://templates.hibootstrap.com/jeel/default/assets/images/services/services7.jpg" />
      <Card.Body>
        <Card.Title>Stone therapy</Card.Title>
        <Card.Text>
        It is a long established fact that a reader will be distracted by the readable
        </Card.Text>
        <Button >View more</Button>
      </Card.Body>
    </Card>
            </div>
            <div className="ser7 ">
                <div className="rin ">
                      <div className="bore">
                        <h1>It Needs Professional Hands To Get Rid Of Your Daily Stress Off</h1>
                        <br/><br/>
                        <button>Make An Appointment</button>
                      </div>
                </div>
            </div>
            <br/>
            <div className="special">
              <h1>Meet Our Top Specialist</h1>
              
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quas adipisci earum</p>
            </div>
           <div className="ser8">
            <div className="doc1">
              <img src="https://templates.hibootstrap.com/jeel/default/assets/images/banner/banner-shape6.png" alt="" />
              <h4>Tanvi</h4>
              <p>Chief Beautician</p>
            </div>
            <div className="doc2">
              <img src="https://templates.hibootstrap.com/jeel/default/assets/images/banner/banner-shape6.png" alt="" />
              <h4>Padma </h4>
              <p>Stone Therapist</p>
            </div>
            <div className="doc3">
              <img src="https://templates.hibootstrap.com/jeel/default/assets/images/banner/banner-shape6.png" alt="" />
              <h4> Bhumika </h4>
              <p>Spa Specialist</p>
            </div>
           </div>
           <br/><br/>
           <div className="ser9">
              <h1>Reviews From Our Clients</h1>
              <div className="review">
                <p>The beauty parlour excels in delivering high-quality services with a focus on client satisfaction. The staff demonstrates advanced technical skills and professionalism,  consistently exceptional experience. The sophisticated environment further enhances the overall service.</p>
                
                <h2>4.5</h2>
                <h1><StarOutlinedIcon/> <StarOutlinedIcon/> <StarOutlinedIcon/> <StarOutlinedIcon/></h1>
              </div>
           </div>
           <div className="fig">
            <h1>face pack</h1>
           </div>
            </Col>
           
            </Row>
    </div>
     
  )
}

export default Services