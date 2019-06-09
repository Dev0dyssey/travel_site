import React, { Component } from 'react'
import logoFooter from '../images/logo_footer.svg'

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <p>
                    © Copyright New Mind | tellUs 2019
                    <img src={logoFooter} alt="footer logo"/>
                </p>
            </div>
        )
    }
}
