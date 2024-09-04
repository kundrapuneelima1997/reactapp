import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header'; 
import { Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
// import Card from 'react-bootstrap/Card';

import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { BarChart } from '@mui/x-charts/BarChart';
import Navbars from './Navbars';
  



function Dashboard(){
  return (
    <div className='dashboard'>
    
      <Navbars/>
     
      <Container fluid>
      <Row> 
        <Col sm={2}>
        <Header/>
        </Col>
        <Col sm={10} className='dashcontent'>
        
          <Row>
          <Col sm={9}>

<div className='income'>
    <div className="overview2">
           <h1>Overview</h1>
       <div className="dropdown">
           <Dropdown>
          <Dropdown.Toggle variant=" mt-3" id="dropdown-basic" >
          Dropdown Button
           </Dropdown.Toggle>

          <Dropdown.Menu>
           <Dropdown.Item href="#/action-1">This week</Dropdown.Item>
          <Dropdown.Item href="#/action-2">last month</Dropdown.Item>
          <Dropdown.Item href="#/action-3">6 months</Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
        </div>
       </div><br/>
       <div className="chart">
        {/* <Card>
         <Card.Body>
        <Card.Title><InsertChartOutlinedRoundedIcon/>Income</Card.Title>
        <Card.Subtitle className='subtitle'><h1>5000K</h1></Card.Subtitle>
        <Card.Text>
         
         
         </Card.Text>
         <Card.Link href="#"></Card.Link>
         <Card.Link href="#"></Card.Link>
         </Card.Body>
          </Card>

          <Card>
         <Card.Body>
        <Card.Title><SupervisorAccountOutlinedIcon/>Customers</Card.Title>
        <Card.Subtitle  className='subtitle'><h1>16,400</h1></Card.Subtitle>
        <Card.Text>
         
         
         </Card.Text>
         <Card.Link href="#"></Card.Link>
         <Card.Link href="#"></Card.Link>
         </Card.Body>
          </Card> */}
    </div>
    </div>
    <div className="income2">
      <div className="text1">
        <h2>Welcome 435 customers<br/> with a personal message </h2>
       
       <div className="main1">
        <div className="img1"> 
          <div className="a1">
          <img src="https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?t=st=1724825488~exp=1724829088~hmac=9df6fd94114fec40aa52559cdc9ac7e5ea95ff8241569fa33517eeb47a076403&w=740" alt="" />
          <h4>Navi</h4>
          </div>
          <div className="a2">
          <img src="https://img.freepik.com/premium-photo/woman-with-flowered-shirt-yellow-shirt-with-flower-it_1273271-4333.jpg?w=740" alt="" />
          <h4>Yesu</h4>
          </div>
          <div className="a3">
          <img src="https://img.freepik.com/free-photo/portrait-beautiful-woman-autumn-time_329181-161.jpg?t=st=1724826073~exp=1724829673~hmac=2bf3e1cb78cc41bf0e84385a72128cd6a378a97ab23582746246961acfb33791&w=740" alt="" />
          <h4>Neelu</h4>
          </div>
          </div>
          
          <div className="img2">
            <div className="a4">
           <img src="https://img.freepik.com/free-photo/young-couple-love-love-story-autumn-forest-park_1328-1983.jpg?t=st=1724826189~exp=1724829789~hmac=862bb6ddde32265f2ee1953a46748ec4641d4cd129706612e4d1c5796f5302f5&w=740" alt="" />
           <h4>Vani</h4>
           </div>
           <div className="a5">
          <img src="https://img.freepik.com/free-photo/happy-excited-tourist-shooting-landmarks_1262-18852.jpg?t=st=1724826097~exp=1724829697~hmac=07eb342744fa42151fcb752adb9ee36b764617357a51de528cb8924c36cf207e&w=740" alt="" />
          <h4>Manvi</h4>
          </div>
          <div className="a6">
          <ArrowCircleRightOutlinedIcon/><br/>
          <p>view all</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className="barchats">
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['2021', '2022', '2023'] }]}
      series={[{ data: [4, 3, 5] }, { data: [4, 5, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
    </div>
 
          </Col>
          <Col sm={3}>
          <div className="comment">
          <h1>Comments</h1>
            {/* <Card >
            
            <Card.Img src="https://img.freepik.com/premium-photo/young-beautiful-woman-is-performing-manicures-beauty-parlor_1218867-51036.jpg?w=900" />
         <Card.Body>
          
         <StarBorderPurple500Icon/>   <StarBorderPurple500Icon/>   <StarBorderPurple500Icon/>   <StarBorderPurple500Icon/> 
        
            <Card.Title>Best parlour</Card.Title>
             <Card.Text>
                
        </Card.Text>
       
       
      </Card.Body>
      </Card><br/>
      <div className="card1">
      <Card >
            <Card.Img src="https://img.freepik.com/free-photo/front-view-smiley-woman-taking-pictures_23-2148375066.jpg?t=st=1724752146~exp=1724755746~hmac=c5f86838235f35feee849846033b775bb34572d7477097ff0d67d221a781d9c0&w=740" />
         <Card.Body>
         <StarBorderPurple500Icon/>    <StarBorderPurple500Icon/>    <StarBorderPurple500Icon/>    <StarBorderPurple500Icon/>
            <Card.Title>worth the money</Card.Title>
             <Card.Text>
                
        </Card.Text>
       
       
      </Card.Body>
      </Card>
      </div><br/>
      <div className="card2">
      <Card >
            <Card.Img src="https://img.freepik.com/premium-photo/woman-photographer-with-camera-takes-pictures-outdoors_984237-11846.jpg?w=740" />
         <Card.Body>
         <StarBorderPurple500Icon/>    <StarBorderPurple500Icon/>    <StarBorderPurple500Icon/>    <StarBorderPurple500Icon/>
            <Card.Title>I am obssessed with the products</Card.Title>
             <Card.Text>
                
        </Card.Text>
       
       
      </Card.Body>
      </Card><br/>
      </div> */}
      <div className="card3">
      {/* <Card >
            <Card.Img src="https://img.freepik.com/free-photo/brunette-girl-walking-through-park-autumn_1157-17764.jpg?t=st=1724752460~exp=1724756060~hmac=ef33aa6ceb9e289f1b977689aeec25e106754874a9e22fdb31920acb99bd1041&w=740" />
         <Card.Body>
         <StarBorderPurple500Icon/>    <StarBorderPurple500Icon/>    <StarBorderPurple500Icon/>
            <Card.Title>Good Service</Card.Title>
             <Card.Text>
                
        </Card.Text>
       
       
      </Card.Body>
      </Card> */}
      </div><br/>
      <button>View all</button>
    </div>
          </Col>
          </Row>
        
        </Col>

      </Row>
      </Container>
      </div>
    
  )
}

export default Dashboard