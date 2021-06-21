import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Api from "./Api"
import Home from "./Home"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import "./index.css"
ReactDOM.render(
  <>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </>,document.getElementById('root')
)