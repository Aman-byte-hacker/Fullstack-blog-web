import React from "react"
import "./footer.css"
const Footer=()=>{
    return(
        <>
<div class=" my-5">

  <footer
          class="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}}
          >

    <section
             class="d-flex justify-content-between p-4"
             style={{backgroundColor: "#6351ce"}}
             >
     
      <div class="me-5 text-center">
        <span className="text-center">Call us at : 7375865792</span>
      </div>
     

      <div>
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-github"></i>
        </a>
      </div>
      
    </section>
    

    
    <section class="">
      <div class="container text-center text-md-start mt-5">
      
        <div class="row mt-3">
         
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold">CycloIndia</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor:"#7c4dff",height:"2px"}}
                />
            <p className="text-capitalize">
              Here We provide full stack web dev and pentest services around 
              the world .
            </p>
          </div>
          
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold">Products</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px",backgroundColor: "#7c4dff",height:"2px"}}
                />
            <p>
              <a href="#!" class="text-white">Full stack Web</a>
            </p>
            <p>
              <a href="#!" class="text-white">Rest Api</a>
            </p>
            <p>
              <a href="#!" class="text-white">Penetration Testing</a>
            </p>
            <p>
              <a href="#!" class="text-white">Desgining</a>
            </p>
          </div>
          
         
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px",backgroundColor:"#7c4dff",height:"2px"}}
                />
            <p><i class="fas fa-home mr-3"></i> Alwar, Matsya Nagar,India</p>
            <p><i class="fas fa-envelope mr-3"></i> trytocode404@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> +91 7375865792</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          
        </div>
        
      </div>
    </section>
    

    
    <div
         class="text-center p-3"
         style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}
         >
      © 2021 Copyright:
      <a class="text-white" href="https://vyasbyte.pythonanywhere.com/about"
         >CycloIndia</a
        >
    </div>
  
  </footer>
  

</div>

        </>
    )
}

export default Footer