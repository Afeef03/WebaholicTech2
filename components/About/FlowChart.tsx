"use client"
import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { AiOutlineProject } from "react-icons/ai";
import { IoLogoFigma } from "react-icons/io5";
import { FaChalkboard } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
import { PiComputerTowerFill } from "react-icons/pi";
import { RiServerFill } from "react-icons/ri";
import { FaRocket } from "react-icons/fa";

const Flowchart = () => {

    const { ref, inView } = useInView({ threshold: 0 });
    return (
        <div ref={ref}>
            <div className="relative my-10">
                <h2 className="absolute top-0 left-0 w-full mt-75 text-4xl font-bold" style={{
                    width: '100%',
                    textAlign: 'center',
                    top: '45%'
                }} id="AboutCompany">How we start the project</h2>
                <h2 className="text-9xl opacity-10 text-uppercase" style={{ fontWeight: 'bold' }} id="about-us-1">Project Journey Map</h2>
            </div>
            <VerticalTimeline lineColor='black'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    date="2011 - present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<AiOutlineProject />}
                    visible={inView}
                >
                    <h3 className="vertical-timeline-element-title">Project Initiation</h3>
                    <p>
                        Discuss project goals, objectives, and requirements with stakeholders.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<FaChalkboard />}
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    visible={inView}
                >
                    <h3 className="vertical-timeline-element-title">Planning</h3>
                    <p>
                        Create a detailed project plan outlining tasks, timelines, and resources.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{ background: "rgb(243 151 33)", color: "#fff" }}
                    contentStyle={{ background: "rgb(243 151 33)", color: "#fff" }}
                    icon={<IoLogoFigma />}
                    visible={inView}
                >
                    <h1 className="vertical-timeline-element-title">Design Phase</h1>
                    <p>Develop project wireframes and design concepts.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: "rgb(243 151 33)", color: "#fff" }}
                    contentStyle={{ background: "rgb(243 151 33)", color: "#fff" }}
                    icon={<IoCodeSlashSharp />}
                    visible={inView}
                >
                    <h1 className="vertical-timeline-element-title">Development</h1>

                    <p>Implement the project according to the approved design and specifications.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: "rgb(243 151 33)", color: "#fff" }}
                    contentStyle={{ background: "rgb(243 151 33)", color: "#fff" }}
                    icon={<PiComputerTowerFill />}
                    visible={inView}
                >
                    <h1 className="vertical-timeline-element-title">
                        Testing
                    </h1>

                    <p>Conduct thorough testing to identify and resolve any issues.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: "rgb(25 151 3)", color: "#fff" }}
                    contentStyle={{ background: "rgb(25 151 3)", color: "#fff" }}
                    icon={<RiServerFill />}
                    visible={inView}
                >
                    <h1 className="vertical-timeline-element-title">
                        Deployment
                    </h1>
                    <p>Deploy the project to the production environment.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: "rgb(25 151 3)", color: "#fff" }}
                    contentStyle={{ background: "rgb(25 151 3)", color: "#fff" }}
                    icon={<FaRocket />}
                    visible={inView}
                >
                    <h1 className="vertical-timeline-element-title">
                        Launch
                    </h1>

                    <p>Officially launch the project and make it accessible to users.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </div>
    )
}

export default Flowchart