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
                {/* <a className='nav-link' href="#">
                <i class="fas fa-bars fa-2x" style={{color: 'white'}}></i>
                </a> */}
                <span className = "nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-bars fa-2x" style={{color: 'white'}}></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Book a Tour</a>
                        <a className="dropdown-item" href="#">Settings</a>
                    </div>
                </span>
            </span>

            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontFamily: `'Poppins', 'sans-serif'`, fontWeight: '700'}}>
                <ul className="navbar-nav nav-fill w-50">
                <li className="nav-item active">
                    <a className="nav-link" href="#">EXPLORE <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">STAY <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">EXPERIENCE</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">TRAVEL</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">ABOUT</a>
                </li>
                </ul>
            </div>
            <div>
                <a class="nav-link" href="#">
                    <i className="fas fa-search fa-2x" style={{color: 'white'}}></i>
                </a>
            </div>

            </nav>
        )
    }
}
