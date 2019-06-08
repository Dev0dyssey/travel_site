import React, { Component } from 'react'
import logo from '../images/logo_icon.png';

export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" >
            <span className="navbar-brand">
                <img src={logo} alt="logo"></img>
            </span>
            <span className="navbar-brand">
                <i class="fas fa-bars fa-2x"></i>
            </span>

            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontFamily: `'Poppins', 'sans-serif'`, fontWeight: '700'}}>
                <ul className="navbar-nav nav-fill w-50">
                <li className="nav-item active">
                    <span className="nav-link" href="#">EXPLORE <span className="sr-only">(current)</span></span>
                </li>
                <li className="nav-item active">
                    <span className="nav-link" href="#">STAY <span className="sr-only">(current)</span></span>
                </li>
                <li className="nav-item active">
                    <span className="nav-link" href="#">EXPERIENCE</span>
                </li>
                <li className="nav-item active">
                    <span className="nav-link" href="#">TRAVEL</span>
                </li>
                <li className="nav-item active">
                    <span className="nav-link" href="#">ABOUT</span>
                </li>
                </ul>
            </div>
            <div>
                <i className="fas fa-search fa-2x" style={{color: 'white'}}></i>
            </div>

            </nav>
        )
    }
}
