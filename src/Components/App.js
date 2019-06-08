import React, { Component } from 'react'
import Top from './top';
import Middle from './Middle';

export default class App extends Component {
    render() {
        return (
            <div>
                <Top />
                <Middle />
            </div>
        )
    }
}