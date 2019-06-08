import React, { Component } from 'react'

export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
            <span className="navbar-brand">Explore</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-fill w-50">
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
            </nav>
        )
    }
}
