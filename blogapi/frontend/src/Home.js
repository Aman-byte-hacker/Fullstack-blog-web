import React from "react"
import "./home.css"
import Client from "./Client"
import Footer from "./Footer"
import Navbar from "./Navbar"
const Home=()=>{
    return(
        <>
        <Navbar/>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img height="530px" src="https://www.bigcommerce.com/blog/wp-content/uploads/2020/05/585CD_Ecommerce-Dev-Agencies_Blog-Hero_2000x730_@2x.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Welcome to CycloIndia</h5>
        <p>You can see tech related blogs everyday there</p>
      </div>
    </div>
    <div className="carousel-item">
      <img height="530px" src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        </div>
    </div>
    <div className="carousel-item">
      <img height="530px" src="https://images.unsplash.com/photo-1521737451536-00a86f630f3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<article>
        <div className="text-center mt-4">
            <p style={{fontSize:"26px",fontFamily:"sans-serif",borderBottom:"2px solid orange",display:"inline"}} className="text-center  p-1 mb-3">What We Provide</p>
        </div>
    
        <div className="container">
            <div className="row">
                <div className="col">
            <div class="row mt-3 animate__animated animate__fadeIn">
                    <div class="col-lg-3 col-md-4 col-sm-6 my-3 mx-auto">
                        <div class="card border">
                            <img class="card-image-top" style={{width: "100%",height: "200px"}} src="https://cdn.dribbble.com/users/2401141/screenshots/5487982/developers-gif-showcase.gif" alt="Randomimage"/>
                            <div class="card-body">
                                <div class="text-center">
                                    <h5 class="card-title">Ecommerce Web</h5>
                                </div>
                                <div style={{width:"100%",height:"76px"}}>
                                    <small class="card-text">We provide you full stack Ecommerce Website with all type of Functionalities </small>
                                </div>
  
                            </div>
                            <div class="card-footer text-center">
                                <a href="tel:7375865792"><button class="btn btn-success col-lg-12" type="submit">Call Us</button>
                            </a></div>
                        </div>
                       
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 my-3 mx-auto">
                        <div class="card border">
                            <img class="card-image-top" style={{width: "100%",height: "200px"}} src="https://cdn.dribbble.com/users/2401141/screenshots/5487982/developers-gif-showcase.gif" alt="Randomimage"/>
                            <div class="card-body">
                                <div class="text-center">
                                    <h5 class="card-title">Blogging Website</h5>
                                </div>
                                <div style={{width:"100%",height:"76px"}}>
                                    <small class="card-text">If you want a fully working blogging website with best SEO call Call us</small>
                                </div>
  
                            </div>
                            <div class="card-footer text-center">
                                <a href="tel:7375865792"><button class="btn btn-success col-lg-12" type="submit">Call Us</button>
                            </a></div>
                        </div>
                       
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 my-3 mx-auto">
                        <div class="card border">
                            <img class="card-image-top" style={{width: "100%",height: "200px"}} src="https://cdn.dribbble.com/users/2401141/screenshots/5487982/developers-gif-showcase.gif" alt="Randomimage"/>
                            <div class="card-body">
                                <div class="text-center">
                                    <h5 class="card-title">Penetration Testing</h5>
                                </div>
                                <div style={{width:"100%",height:"76px"}}>
                                    <small class="card-text">We also pentest website and can find vulnerabilities in that</small>
                                </div>
  
                            </div>
                            <div class="card-footer text-center">
                                <a href="tel:7375865792"><button class="btn btn-success col-lg-12" type="submit">Call Us</button>
                            </a></div>
                        </div>
                       
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 my-3 mx-auto">
                        <div class="card border">
                            <img class="card-image-top" style={{width: "100%",height: "200px"}} src="https://cdn.dribbble.com/users/2401141/screenshots/5487982/developers-gif-showcase.gif" alt="Randomimage"/>
                            <div class="card-body">
                                <div class="text-center">
                                    <h5 class="card-title">Training</h5>
                                </div>
                                <div style={{width:"100%",height:"76px"}}>
                                    <small class="card-text">We also train developers,hackers to develop their skills. Wanna do a Training then don't hesitate to call</small>
                                </div>
  
                            </div>
                            <div class="card-footer text-center">
                                <a href="tel:7375865792"><button class="btn btn-success col-lg-12" type="submit">Call Us</button>
                            </a></div>
                        </div>
                       
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 my-3 mx-auto">
                        <div class="card border">
                            <img class="card-image-top" style={{width: "100%",height: "200px"}} src="https://cdn.dribbble.com/users/2401141/screenshots/5487982/developers-gif-showcase.gif" alt="Randomimage"/>
                            <div class="card-body">
                                <div class="text-center">
                                    <h5 class="card-title">Cloud Hosting</h5>
                                </div>
                                <div style={{width:"100%",height:"76px"}}>
                                    <small class="card-text">We host your website in some named hosting services like DigitalOcean</small>
                                </div>
  
                            </div>
                            <div class="card-footer text-center">
                                <a href="tel:7375865792"><button class="btn btn-success col-lg-12" type="submit">Call Us</button>
                            </a></div>
                        </div>
                       
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 my-3 mx-auto">
                        <div class="card border">
                            <img class="card-image-top" style={{width: "100%",height: "200px"}} src="https://cdn.dribbble.com/users/2401141/screenshots/5487982/developers-gif-showcase.gif" alt="Randomimage"/>
                            <div class="card-body">
                                <div class="text-center">
                                    <h5 class="card-title">Desgins</h5>
                                </div>
                                <div style={{width:"100%",height:"76px"}}>
                                    <small class="card-text">We provide you best desgines and thumbnails for your videos in hd quality</small>
                                </div>
  
                            </div>
                            <div class="card-footer text-center">
                                <a href="tel:7375865792"><button class="btn btn-success col-lg-12" type="submit">Call Us</button></a>
                            </div>
                        </div>
                       
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
</article>
<Client/>
<Footer/>
        </>
    )
}

export default Home