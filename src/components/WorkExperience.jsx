import React from 'react'
import WorkCard from './elements/WorkCard';

const WorkExperience = () => {
    return (
        <div className="w-full h-auto px-8 sm:px-16 md:px-16 lg:px-36 py-10">
            <div className="flex items-center py-8">
                <div className="flex-grow border-t-2 border-gray-300"></div>
                <div className="flex items-center justify-center -mt-px">
                    <div className="border-l-2 border-gray-300 h-8"></div>
                    <div className="h4 px-5">✏️ WORK </div>
                    <div className="border-r-2 border-gray-300 h-8"></div>
                </div>
                <div className="flex-grow border-t-2 border-gray-300"></div>
            </div>
            <div className="w-full h-auto flex-col  justify-center items-center gap-10 inline-flex py-10">
                <WorkCard
                    logoSrc="/assets/iti_logo.png"
                    title="Software Engineer Intern @ Information Trust Institute"
                    description="Integrating Keycloak to account authentication and provisioning system for additional security layer and implementing OpenID Connect protocol for single-sign on"
                />
                <WorkCard
                    logoSrc="/assets/uscellular_logo.png"
                    title="Integration API Development Intern @ UScellular"
                    description="Architected and developed a RESTful micro-service with Spring Boot and Apache Camel, allowing consumers to setup a security question during account creation. Migrated 100k+ JMS messages from Oracle DB to Open MQ"
                />
                <WorkCard
                    logoSrc="/assets/winfo_logo.png"
                    title="Software Test Engineer Intern @ Winfo Solutions"
                    description="Implemented a feature using Java Access Bridge and Accessibility API to facilitate interactions with Java applets in Oracle E-Business Suite, allowing for testing of third-party EBS integrations"
                />
            </div >
        </div>
    )
}

export default WorkExperience