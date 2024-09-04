import React from 'react'

function Navbars() {
  return (
    
         
  <div className="container-fluid topnavbar" >
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <img src="https://img.freepik.com/free-vector/botanical-capital-letter-t-vector_53876-127459.jpg?t=st=1724747183~exp=1724750783~hmac=0946293efa5d7a9287120af0305bd63e6bb39c511860ad4f18f70d7ac9f0affc&w=740" width={80} height={80} alt="Bootstrap"  />
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    </nav>
  </div>

    
  )
}

export default Navbars