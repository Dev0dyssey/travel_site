import React, { Component } from 'react'
import image1 from '../images/img_block_explore.jpg'
import image2 from '../images/img_block_experience.jpg'
import image3 from '../images/img_block_travel.jpg'
import image4 from '../images/img_block_placestostay.jpg'

export default class Bottom extends Component {
    render() {
        return (
            <>
                <div className = "row no-gutters bottom-text">
                    <div className = "col">
                        <img src = {image1} alt='person exploring'/>
                    </div>
                    <div className = "col my-auto">
                        <div className = "styling">
                            <h3 style={{color: '#C60062'}}>Explore</h3>
                            <p>Proin porttitor, nisl eu bibendum pharetra, risus velit consectetur neque, vitae hendrerit mauris augue sed tellus.</p>
                        </div>
                    </div>
                    <div className = "col">
                        <img src = {image2} alt='people exploring'/>
                    </div>
                    <div className = "col my-auto">
                        <div className = "styling">
                            <h3 style={{color: '#EF8512'}}>Experience</h3>
                            <p>Proin porttitor, nisl eu bibendum pharetra, risus velit consectetur neque, vitae hendrerit mauris augue sed tellus.</p>
                        </div>
                    </div>
                </div>
                <div className = "row no-gutters bottom-text">
                    <div className = "col my-auto">
                        <div className = "styling">
                            <h3 style={{color: '#2E8086'}}>Travel</h3>
                            <p>Proin porttitor, nisl eu bibendum pharetra, risus velit consectetur neque, vitae hendrerit mauris augue sed tellus.</p>
                        </div>
                    </div>
                    <div className = "col">
                        <img src = {image3} alt='yellow minibus'/>
                    </div>
                    <div className = "col my-auto">
                        <div className = "styling">
                            <h3 style={{color: '#1D5E82'}}>Experience</h3>
                            <p>Proin porttitor, nisl eu bibendum pharetra, risus velit consectetur neque, vitae hendrerit mauris augue sed tellus.</p>
                        </div>
                    </div>
                    <div className = "col">
                        <img src = {image4} alt='person jumping on bed'/>
                    </div>
                </div>
            </>
        )
    }
}
