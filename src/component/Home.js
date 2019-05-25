import React, { Component } from 'react'
import {BrowserRouter,Route } from 'react-router-dom'
import ReadData from './ReadData'
import NavBar from './NavBar'
import Index from './Index'
import About from './About'
import Param from './Param'

export default class Home extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <NavBar/>
                <Route path="/" exact component={Index} />
                <Route path="/DataOpp" exact component={ReadData} />
                <Route path="/About-us" exact component={About} />
                <Route path="/Param/:id" exact component={Param} />
               
            </div>
            </BrowserRouter>

        )
    }
}
