import React from 'react'
import ProjectCard from './elements/ProjectCard'

const Projects = () => {
    return (
        <div className="w-full p-6 md:p-12 lg:p-24 bg-white flex flex-col items-center">
            <h2 className="text-center h3 mb-8 md:mb-14">💾 PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
                <ProjectCard
                    imgSrc="./src/assets/iti_logo.png"
                    projectTitle="HTTP Client & Server"
                    technologies="C++, Socket Programming, Linux"
                />
                <ProjectCard
                    imgSrc="./src/assets/iti_logo.png"
                    projectTitle="HTTP Client & Server"
                    technologies="C++, Socket Programming, Linux"
                />
                <ProjectCard
                    imgSrc="./src/assets/iti_logo.png"
                    projectTitle="HTTP Client & Server"
                    technologies="C++, Socket Programming, Linux"
                />
                <ProjectCard
                    imgSrc="./src/assets/iti_logo.png"
                    projectTitle="HTTP Client & Server"
                    technologies="C++, Socket Programming, Linux"
                />
                <ProjectCard
                    imgSrc="./src/assets/iti_logo.png"
                    projectTitle="HTTP Client & Server"
                    technologies="C++, Socket Programming, Linux"
                />
                <ProjectCard
                    imgSrc="./src/assets/iti_logo.png"
                    projectTitle="HTTP Client & Server"
                    technologies="C++, Socket Programming, Linux"
                />
            </div>
        </div>
    )
}

export default Projects