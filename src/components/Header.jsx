
import React from 'react'
import { Link  } from 'react-router-dom'
function Header() {

  return (

    <div className='head2'>

       <div className="head1 ">
       <Link to= '/Dashboard' className='link1'><h1  className='home'>Home</h1></Link>
       <Link to= '/Orders' className='link1'><h1 >Orders</h1></Link>
        <Link to ='/Services' className='link1' ><h1>Services</h1></Link>
        <Link to = '/Contact' className='link1'><h1>Contacts</h1></Link><br/><br/><br/>
        <Link to = '/Logout' className='link1'><h2>Log out</h2></Link>

       </div>
    </div>
  )
}

export default Header