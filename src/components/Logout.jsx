import React from 'react'
import { Link } from 'react-router-dom'
function Logout() {
  return (
    <div className='logoutbody mt-0'>
    <div className='out1'>
        <h3>Are you leaving?</h3>
        <div className='out2'>
        <Link to='/Dashboard'><button>Cancel</button></Link>
       <Link to='/'> <button>Logout</button></Link>
        </div>
        </div>
        </div>
  )
}

export default Logout