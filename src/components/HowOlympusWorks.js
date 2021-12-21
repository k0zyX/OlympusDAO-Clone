import React from 'react'
import "../styles/HowOlympusWorks.css"
import Image from "../images/how_image_1.png"

import LeftArrow from "../images/arrowLeft.png"
function HowOlympusWorks() {
    return (
        <section className='how-olympus-works-section'>
            <h2>How Olympus Works</h2>
            <div className="container">
                <div className="row">
                    <div className="left-col">
                        <h5><span className='number'>1</span> Treasury Revenue </h5>
                        <h3>Bonds & LP fees</h3>
                        <p>Bond sales and LP Fees increase Treasury Revenue and lock in liquidity and help control OHM supply</p>
                    </div>
                    <div className="right-col">
                        <img src={Image} alt="" className='image'/>
                    </div>
                </div>
                
                <div className="row-2">
                    <img src={LeftArrow} alt="" className='arrow'/>
                    <div className="content">
                        <div className="left-col">
                        <img src={Image} alt="" className='image'/>
                        </div>
                        <div className="right-col">
                            <h5><span className='number'>1</span> Treasury Revenue </h5>
                            <h3>Bonds & LP fees</h3>
                            <p>Bond sales and LP Fees increase Treasury Revenue and lock in liquidity and help control OHM supply</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default HowOlympusWorks
