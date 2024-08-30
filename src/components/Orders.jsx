import React from 'react'
import Header from './Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import {productsData} from '../Data/Products';
// import { Link } from 'react-router-dom';
function Orders() {
  return (
    <div>
    <Row>
     <Col sm={2}><Header/></Col>
     <Col sm={10}>
     {/* <div className="main1">
      {
        productsData.map((item)=>{
          return(
            <div className="order1">
              <Link to={'/orders/${aitem.id}'}>
              <img src={item.img1}/>
              </Link>
              <p>{"name:"+" "+item.name}</p>
              <p>{"price:"+" "+item.price}</p>
            </div>

          )
        } */}
      

     
     
     
     </Col>
    </Row>
     
 </div>
  )
}

export default Orders