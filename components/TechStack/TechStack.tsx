import React from 'react'
import IconReactjsLine from '../icons/IconsReacthjsLine'
import { TbBrandWix } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import Card from './Card'



const TechStack = () => {
    const cardsData = [
        {
            icons: <IconReactjsLine fontSize={'60px'} color='#1DA1F2' />,
            content: 'React enhances web development, ensuring fast, interactive, and dynamic user interfaces. Trusted by Facebook, it\'s industry-preferred for robust, modern websites.',
            documentationLink: 'https://reactjs.org/docs/getting-started.html'
        },
        {
            icons: <TbBrandWix fontSize={'60px'} color='black' />,
            content: 'Wix empowers businesses by offering a user-friendly platform for creating professional websites. Elevate your brand, attract customers, and boost sales effortlessly with Wix versatile tools and customizable features.',
            documentationLink: 'https://support.wix.com/en/'
        },
        {
            icons: <DiNodejs fontSize={'90px'} color='#68A063' />,
            content: 'Node.js revolutionizes web development, enabling scalable and efficient server-side applications. Empower your tech stack, handle concurrent requests, and build robust, high-performance solutions with Node.js.',
            documentationLink: 'https://nodejs.org/en/docs/'
        },
        {
            icons: <SiTailwindcss fontSize={'60px'} color='#22BBBD' />,
            content: 'Tailwind CSS is a game-changer in web design, providing a streamlined approach for quick and tailored development. It ensures your website looks stunning, adapts seamlessly to various screens, and stands out in the digital landscape.',
            documentationLink: 'https://tailwindcss.com/docs'
        },
        {
            icons: <FaWordpress fontSize={'60px'} color='#1DA1F2' />,
            content: 'WordPress simplifies website creation with an intuitive platform. Ideal for any purpose, it offers versatility and ease, making it a top choice globally. From blogs to e-commerce, WordPress streamlines online success, delivering a powerful yet accessible tool for diverse digital needs.',
            documentationLink: 'https://wordpress.org/support/'
        },
        {
            icons: <TbBrandReactNative fontSize={'60px'} color='#61dafb' />,
            content: 'React Native revolutionizes mobile app development, allowing businesses to create cross-platform applications with a single codebase. Delivering native-like performance, it accelerates the development cycle and ensures a consistent user experience across iOS and Android platforms.',
            documentationLink: 'https://reactnative.dev/docs/getting-started'
        },
        // Add more cards as needed
    ];

    return (
        <div className='py-8 container my-10'>
            <div className="relative my-5">
                <h2 className="absolute top-0 left-0 w-full mt-75 text-4xl font-bold" style={{
                    width: '100%',
                    textAlign: 'center',
                    top: '45%'
                }} id="AboutCompany">We Work With Lastest Tech</h2>
                <h2 className="text-9xl opacity-10 text-uppercase" style={{ fontWeight: 'bold' }} id="about-us-1">TechStack We USe</h2>
            </div>
            <div className="tech-stacks grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
                {cardsData.map((card, index) => (
                    <Card icons={card.icons} content={card.content} documentationLink={card.documentationLink} key={index} />
                ))}
            </div>


        </div>
    )
}

export default TechStack
