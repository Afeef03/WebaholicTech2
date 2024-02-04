import React from 'react'
import Image from "next/image";
import Link from "next/link";


const HomePortfolio = () => {
    return (
        <section className='py-16 md:py-20 lg:py-20 bg-gray-light dark:bg-bg-color-dark'>
            <div className="relative">

                <h2 className="absolute top-0 left-0 w-full mt-75 text-4xl font-bold" style={{
                    width: '100%',
                    textAlign: 'center',
                    top: '45%'
                }} id="AboutCompany">Projects We Worked On!</h2>
                <h2 className="text-9xl opacity-10 text-uppercase" style={{ fontWeight: 'bold' }} id="about-us-1">Our Work</h2>
            </div>
            <div className="flex justify-center">
                <p className="text-base !leading-relaxed text-body-color md:text-lg sm:w-full p-tag-services">
                    Elevate your brand with our web design prowess. Crafting digital excellence, we transform ideas into impactful online experiences. Explore our portfolio and discover how we create stunning websites that captivate and drive success for your business. Your journey to digital transformation starts here.
                </p>
            </div>
            <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:px-12 gap-2">
                    {/* ====1==== */}
                    <Link href={'https://glowing-licorice-f3d295.netlify.app/'} target='_blank'>
                        <div className="d_card" id="first">
                            <div className="content">
                                <h2 className="heading">Clinic Website</h2>
                                <p className="data-content">
                                    "Developed and deployed a React-based calculator app showcasing strong frontend development skills."{" "} <span className="text-primary font-bold">Click For Preview</span>
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* ====2==== */}
                    <Link href={'https://grilli-restaurent.netlify.app/'} target='_blank'>
                        <div className="d_card" id='second'>
                            <div className="content">
                                <h2 className="heading">Restaurent Website</h2>
                                <p className="data-content">
                                    "Developed and deployed a React-based calculator app showcasing strong frontend development skills."{" "} <span className="text-primary font-bold">Click For Preview</span>
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* ====3==== */}
                    <Link href={'https://college-templete-website.netlify.app/'} target='_blank'>
                        <div className="d_card" id='third'>
                            <div className="content">
                                <h2 className="heading">College Website</h2>
                                <p className="data-content">
                                    "Developed and deployed a React-based calculator app showcasing strong frontend development skills."{" "} <span className="text-primary font-bold">Click For Preview</span>
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* ====4==== */}
                    <div className="d_card">
                        <div className="content">
                            <h2 className="heading">Calculator App</h2>
                            <p className="data-content">
                                "Developed and deployed a React-based calculator app showcasing strong frontend development skills."{" "} <span className="text-primary font-bold">Click For Preview</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HomePortfolio
