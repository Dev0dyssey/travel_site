import React, { Component } from 'react'
import Navbar from './navbar';
import '../Styles/style.css'

export default class top extends Component {
    render() {
        return (
            <>
            <div className="Top">
                <Navbar />
                <span className="top-text">
                Explore the breathtaking mountain ranges
                </span>
            </div>
            </>
        )
    }
}
