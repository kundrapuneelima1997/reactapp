import React from 'react';
import Col from 'react-bootstrap/Col';
import Header from './Header'; 
import Navbars from './Navbars';
import Row from 'react-bootstrap/Row';
import { Link  } from 'react-router-dom'

import { PieChart } from '@mui/x-charts/PieChart';

function Dashboard(){
  return (
    <div className='dashboard'>
      <Navbars/>
      <Row>
        <Col sm={2}>
           <Header/>
        </Col>
        <Col sm={10} className='dashcontent'>
        <div className="containerFluid dash1 ">
           
           <div className='das1'>
           {/* <img src="https://templates.hibootstrap.com/jeel/default/assets/images/blog/blog-shape1.png" className='ani1' alt="" /> */}
           <h1>Keep Calm And Make A Self-Care Plan</h1>
           
           </div>
           </div>
          <div className="dash2">
            <div className="dash2img">
            <img src="https://templates.hibootstrap.com/jeel/default/assets/images/know/know-shape5.png" width='450px' height='500px' alt="1" />
            </div>
            <div className="dash2h1">
            <h1>Know More About Us</h1><br/>
           
            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elitporro quiae.</p> */}
       <ul>
                
                <li>
                <div className="la">
                  <div className="ma">
                    <img src="https://templates.hibootstrap.com/jeel/default/assets/images/know/know-icon4.png" alt="" />
                 </div>
                 <div className="mi">
                    <h2>Award-winning Company</h2>
                       <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                  </div>
                     </div>
                </li>
             
             
            <li>
            <div className="la">
            <div className="ma">
              <img src="https://templates.hibootstrap.com/jeel/default/assets/images/know/know-icon5.png" alt="" />
              </div>
              <div className="mi">
              <h2>15+ Years Of Experience</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
              </div>
              </div>
              </li>
            
            <li>
            <div className="la">
            <div className="ma">
              <img src="https://templates.hibootstrap.com/jeel/default/assets/images/know/know-icon6.png" alt="" />
              </div>
              <div className="mi">
              <h2>Top Beauty Provider</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
              </div>
              </div>
              </li>
            
      </ul>
      </div>
      </div>
      <div className="chart">
      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 500, label: 'Storevisit A'  },
            { id: 1, value: 1000, label: 'Products B' },
            { id: 2, value: 700, label: 'Services C' },
          ],
        },
      ]}
      width={700}
      height={200}
      colors={['#B1D8B7', '#2F5233', '#94C973']}
    />
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
          <div className="dash3">
            <div className="dash3h">
            
            <h1>Our New Skin Care Product For You</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
               <Link to= '/Orders' className='link1'><button>View products</button></Link>
               
             </div>
            <img src="https://templates.hibootstrap.com/jeel/default/assets/images/skin-main2.jpg" height='300px'alt="4" />
          </div>
          
         
        </Col>
        </Row>
  
      
      

 
     
         
          
        
        
      

    
      </div>
    
  )
}

export default Dashboard