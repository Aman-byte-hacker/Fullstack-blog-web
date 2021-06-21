import React, { useEffect, useState } from 'react'
import Navbar  from './Navbar'
const Api=()=>{
    
    const [blogs,setBlogs] = useState([]) 
    
    const getblogs = async() => {
        const response = await fetch('http://127.0.0.1:8000/api/blog/')
        // var data = await response.json()
        // console.log(data)
        setBlogs(await response.json())
    }

    useEffect(()=>{
        getblogs()
    })
   
    return(
        <>
            
            {
                blogs.map((elem)=>{
                    {
                        return(
                            
                            <>
                            <Navbar/>
                               
                                <div style={{marginTop:"100px",padding:"12px"}} className="text-center container border">
                                    <div className="me-1">
                                        <p>Written By :<img style={{width:"50px",height:"50px",borderRadius:"50%"}} src={elem.authorimage} alt="image"/> {elem.author} </p>
                                        <p>on {elem.date} & {elem.time}</p>
                                    </div>
                                    <p style={{fontSize:"20px"}}><span style={{color:"yellowgreen",fontWeight:"bold"}}>{elem.id}</span>: {elem.title}</p>
                                    <img style={{width:"500px",height:"300px"}} src={elem.image1}/>
                                    <p style={{fontSize:"20px"}}>{elem.description}</p>
                                    <img style={{width:"500px",height:"300px"}} src={elem.image2}/>
                                    <p style={{fontSize:"20px"}}>{elem.description2}</p>
                                    
                                    <a target="__blank" className="text-center text-capitalize" href={elem.link1}>Click on the Link for more details</a>

                                    <div className="text-center">
                                        <p style={{borderBottom:"1px solid green",display:"inline"}}>Happy Learning...</p>
                                    </div>
                                </div>
                             
                                
                            </>
                        )
                    }
                })
            }
        </>
    )
}

export default Api