import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (

    

    <div class='container-fluid loginbody'>
        <div className='main'>
            <div className='block'>
                <h1>Taanvi.</h1>
                <h4>UserName</h4>
                <input type="text" placeholder='Enter your User Name' /><br/><br/>
                <h4>Password</h4>
                <input type="Password" placeholder='Enter your Password' />
            </div>
            <div className='signup'>
                    <Link to='/Dashboard'><button>Log in</button></Link><br/><br/><br/><br/>
                    <Link to='/Signup'><h3>Sign up?</h3></Link>
                    
            </div>
        </div>
       

        </div>
       
  )
}

export default Login