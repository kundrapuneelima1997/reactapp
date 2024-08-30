import React from 'react'
import Header from './Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {productsData} from '../Data/Products';
import { Link } from 'react-router-dom';
function Orders() {
  return (
    <div>
    <Row>
     <Col sm={2}><Header/></Col>
     <Col sm={10}>
        <div className='main2'> 
   
     {
      productsData.map((item)=>{
        return(


          <div className='main3'>
<Link to={`/orders/${item.id}`}>
<img src={item.image} alt={item.ProductName} /> 

</Link>

 <p>Name: {item.ProductName}</p>
 <p>Price: {item.Price}</p>
          </div>
        )
  
      })
     }

       
        </div>
     
     </Col>
    </Row>
     
    </div>
  )
}

export default Orders