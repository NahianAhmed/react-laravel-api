
import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'
export default class NavBar extends Component {
    render() {
        return (
            <div>


                <ul className="nav nav-tabs" id="navId">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/DataOpp" className="nav-link">Data Operation</Link>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/About-Us" className="nav-link"> About us</NavLink>
                    </li>
                </ul>


               


            </div>
        )
    }
}
