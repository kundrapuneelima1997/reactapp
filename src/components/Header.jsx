import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='head2'>
       <div className="head1 ">
       <Link to= '/Dashboard'><h1 className='home'>Home</h1></Link>
       <Link to = '/Orders'> <h1>Products</h1></Link>
        <Link to ='/Services'><h1>Services</h1></Link>
        <Link to = '/Contact'><h1>Contacts</h1></Link><br/><br/><br/>
        <Link to = '/Logout'><h2>Log out</h2></Link>

       </div>
    </div>
  )
}

export default Header