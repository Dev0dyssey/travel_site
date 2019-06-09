import React, { Component } from 'react'
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Top />
                <Middle />
                <Bottom />
                <Footer />
            </div>
        )
    }
}