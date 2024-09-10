import React from 'react'
import { Link } from 'react-router-dom'
function Logout() {
 
  return (
    <div className='logoutbody '>
      <img src="https://templates.hibootstrap.com/jeel/default/assets/images/blog/blog-shape1.png" className='ani1' alt="" />
    <div className='out1'>
        <h3>Are you leaving?</h3>
        <div className='out2'>
        <Link to='/Dashboard'><button>Cancel</button></Link>
       <Link to='/'> <button>Logout</button></Link>
       <img src="https://templates.hibootstrap.com/jeel/default/assets/images/blog/blog-shape1.png" alt="" />
        </div>
        </div>
        </div>
  )
}

export default Logout