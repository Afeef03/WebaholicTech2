"use Client"
import React from 'react'
import { Gallery } from './Gallery'


const Portfolio = () => {
    return (
        <section className='pt-16 md:pt-20 lg:pt-20'>
            <div className="relative">
                <h2 className="absolute top-0 left-0 w-full mt-75 text-4xl font-bold" style={{
                    width: '100%',
                    textAlign: 'center',
                    top: '45%',
                    fontSize: '50px'
                }} id="AboutCompany">Portfolio</h2>
                <h2 className="text-9xl opacity-10 text-uppercase" style={{ fontWeight: 'bold' }} id="about-us-1">Our Work!</h2>
            </div>
            <div className="container">
                <Gallery />
            </div>
        </section>
    )
}

export default Portfolio
