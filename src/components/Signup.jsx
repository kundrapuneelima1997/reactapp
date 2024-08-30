import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div className="container-fluid loginbody">
    <div class='main'>
    <div className='block2'>
        
        <h4>Enter your Name</h4>
        <input type="text" placeholder='Enter your Name' /><br/><br/>
        <h4>Enter your email id</h4>
        <input type="text" placeholder='Email id' /><br/><br/>
        <h4>Create user name</h4>
        <input type="text" placeholder='Create User Name' /><br/><br/>
        
        
         <h4> Create Password</h4>
         <input type="Password" placeholder='Create your Password' /><br/><br/>
         <h4>Confirm pasword</h4>
         <input type="Password" placeholder='Confirm password' /><br/><br/>
         </div>
         <div className='signup1'>
         <button><Link to='/'>Sign up</Link></button>
           
            
         </div>

    </div>
    </div>
  )
}

export default Signup
