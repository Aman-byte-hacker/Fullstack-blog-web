import React from "react"
import argen from"./img/Argentinafreelance.jpeg"
import uk from "./img/Uk.jpeg"
import {NavLink,Route,BrowserRouter as Router,Link} from "react-router-dom"
import philli from "./img/phillipnes.png"
import Api from "./Api"
const Client=()=>{
    return(
        <>
            <div className="text-center mt-4 mb-3">
                <p style={{fontSize:"26px",fontFamily:"sans-serif",borderBottom:"2px solid orange",display:"inline"}} className="text-center  p-1 mb-3">Our Clients</p>
            </div>
                <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row mt-3">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div class="card border">
                                    <img class="card-image-top" style={{width: "100%",height: "200px"}} src={argen} alt="Randomimage"/>
                                    <div class="card-body">
                                        <div class="text-center">
                                            <h5 class="card-title">From Argentina</h5>
                                        </div>
                                        <p style={{fontSize:"20px",textAlign:"center"}} className="card-text">Aman vyas with Lucas Percival</p>                                        
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div class="card border">
                                    <img class="card-image-top" style={{width: "100%",height: "200px"}} src={uk} alt="Randomimage"/>
                                    <div class="card-body">
                                        <div class="text-center">
                                            <h5 class="card-title">From Uk</h5>
                                        </div>
                                        <p style={{fontSize:"20px",textAlign:"center"}} className="card-text">Aman vyas with Roger Brown</p>                                        
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div class="card border">
                                    <img class="card-image-top" style={{width: "100%",height: "200px"}} src={philli} alt="Randomimage"/>
                                    <div class="card-body">
                                        <div class="text-center">
                                            <h5 class="card-title">From Phillipnes</h5>
                                        </div>
                                        <p style={{fontSize:"20px",textAlign:"center"}} className="card-text">Aman vyas with Enn Cacho</p>                                        
                                    </div>
                                
                                </div>
                            </div>
                            <div className="text-center">
                                <Link to="/blogs"><button style={{backgroundColor:"#120E43"}} className="btn text-white shadow mt-3 p-2.5" type="submit">Read Blogs</button></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
               
        </>
    )
}

export default Client