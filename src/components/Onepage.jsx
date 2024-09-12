import React from 'react'
import { useParams } from 'react-router-dom'
import { productsData } from '../Data/Products';
function Onepage() {
    const {id} = useParams()
    const dataVal = productsData.find((e)=>e.id === id);
    console.log(id)
    
  return (
    <div>
        <img src={dataVal.image} alt="" />
        <p>{dataVal.id}</p>
        <p>Price:{dataVal.Price}</p>
        <p>Name:{dataVal.ProductName}</p>
    </div>
  )
}

export default Onepage