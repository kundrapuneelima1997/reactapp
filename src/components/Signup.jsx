import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div className="container-fluid loginbody">
    <div class='main'>
    <div className='block2'>
        
        <h4>Enter your Name</h4>
        <input type="text"  /><br/>
        <h4>Enter your email id</h4>
        <input type="text"  /><br/>
        <h4>Create user name</h4>
        <input type="text"  /><br/>
        
        
         <h4> Create Password</h4>
         <input type="Password"  /><br/>
         <h4>Confirm pasword</h4>
         <input type="Password"  /><br/>
         </div>
         <div className='signup1'>
         <button><Link to='/' className='link1'>Sign up</Link></button>
           
            
         </div>

    </div>
    </div>
  )
}

export default Signup
