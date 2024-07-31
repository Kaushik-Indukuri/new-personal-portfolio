import React from 'react'
import ProjectCard from './elements/ProjectCard'

const Projects = () => {
    return (
        <div className="w-full py-24 px-8 md:px-16 lg:px-24 bg-white flex flex-col items-center">
            <h2 className="text-center h3 mb-8 md:mb-14">💾 PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
                <ProjectCard
                    projectId="youtube-comments-dashboard"
                    imgSrc="./src/assets/yt_art.png"
                    projectTitle="Youtube Comments Dashboard"
                    technologies="React, TypeScript, Tailwind, MongoDB, Kafka, Python, FastAPI, Docker, K8s, Terraform, Github Actions"
                />
                <ProjectCard
                    projectId="http-client-server"
                    imgSrc="./src/assets/project4.png"
                    projectTitle="HTTP Client & Server"
                    technologies="C, Socket Programming, Linux"
                />
                <ProjectCard
                    projectId="lenet-acceleration"
                    imgSrc="./src/assets/project6.png"
                    projectTitle="LeNet-5 Neural Network GPU Acceleration"
                    technologies="C, CUDA, Nsight-Compute"
                />
                <ProjectCard
                    projectId="linux-operating-system"
                    imgSrc="./src/assets/project3.png"
                    projectTitle="Linux Operating System"
                    technologies="C, x86 Assembly, Linux"
                />
                <ProjectCard
                    projectId="stock-sentiment-api"
                    imgSrc="./src/assets/project1.png"
                    projectTitle="Stock Sentiment API"
                    technologies="Python, FastAPI, Pandas, Numpy, BeautifulSoup, Docker, AWS Lambda"
                />
                <ProjectCard
                    projectId="airport-route-finder"
                    imgSrc="./src/assets/project5.png"
                    projectTitle="Airport Route Finder"
                    technologies="C++, CMake, Docker"
                />
                <ProjectCard
                    projectId="inspeech"
                    imgSrc="./src/assets/inspeech.png"
                    projectTitle="InSpeech Mobile App"
                    technologies="Flutter, Firebase, Speech-to-Text, Web Speech API, OCR"
                />
                <ProjectCard
                    projectId="fanua"
                    imgSrc="./src/assets/Fanua.png"
                    projectTitle="Fanua Mobile App"
                    technologies="Flutter, Flask, Firebase, Realtor API, Docker, AWS EC2"
                />
            </div>
        </div>
    )
}

export default Projects