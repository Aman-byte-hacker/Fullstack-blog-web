import React from "react"
import {Link} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "./navbar.css"
const Navbar=()=>{
    return(
        <>
            <nav id="nav-op" className="navbar navbar-expand-lg fixed-top navbar-dark bg-#120E43">
  <div className="container-fluid">
    <a className="navbar-brand text-success" href="#">CycloIndia</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/blogs">Blogs</Link>
        </li>
    
      </ul>
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Aman vyas</a>
        </li>
      </ul>  
      
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar