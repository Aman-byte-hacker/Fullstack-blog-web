import React from "react"
import Api from "./Api"
import {NavLink,Switch,Link,Route,BrowserRouter as Router} from "react-router-dom"
import "./index.css"
import Navbar from "./Navbar"
import Home from "./Home"
import Client from "./Client"
import Footer from "./Footer"
const App=()=>{
  return(
    <>
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/blogs" component={Api}/>
        <Route exact path="/clients" component={Client}/>
        <Route exact path="/footer" component={Footer}/>
        <Route component={Error}/>
      </Switch>
    </>
  )
}

export default App