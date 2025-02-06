import React from 'react'
import ProjectCard from './elements/ProjectCard'

const Projects = () => {
    return (
        <div className="w-full py-24 px-8 md:px-16 lg:px-24 bg-white flex flex-col items-center">
            <h2 className="text-center h3 mb-8 md:mb-14">💾 PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
                <ProjectCard
                    projectId="cool-compiler-lexer-parser"
                    imgSrc="/assets/lp_art.png"
                    projectTitle="Lexer & Parser for COOL Compiler"
                    technologies="C++, Bison, Flex, RegEx"
                />
                <ProjectCard
                    projectId="youtube-comments-dashboard"
                    imgSrc="/assets/yt_art.png"
                    projectTitle="Youtube Comments Dashboard"
                    technologies="React, TypeScript, Tailwind, Kafka, Python, FastAPI, MongoDB, Docker, K8s, Terraform, AWS, NLTK"
                />
                <ProjectCard
                    projectId="http-client-server"
                    imgSrc="/assets/http.png"
                    projectTitle="HTTP Client & Server"
                    technologies="C, Socket Programming, Linux"
                />
                <ProjectCard
                    projectId="lenet-acceleration"
                    imgSrc="/assets/lenet.png"
                    projectTitle="LeNet-5 Neural Network GPU Acceleration"
                    technologies="C, CUDA, Nsight-Compute"
                />
                <ProjectCard
                    projectId="linux-operating-system"
                    imgSrc="/assets/linux_os.png"
                    projectTitle="Linux-like Operating System"
                    technologies="C, x86 Assembly, Linux"
                />
                <ProjectCard
                    projectId="stock-sentiment-api"
                    imgSrc="/assets/stock_api.png"
                    projectTitle="Stock Sentiment API"
                    technologies="Python, FastAPI, NLTK, Pandas, Numpy, BeautifulSoup, Docker, AWS Lambda"
                />
                <ProjectCard
                    projectId="airport-route-finder"
                    imgSrc="/assets/route_finder.png"
                    projectTitle="Airport Route Finder"
                    technologies="C++, CMake, Docker"
                />
                <ProjectCard
                    projectId="inspeech"
                    imgSrc="/assets/inspeech.png"
                    projectTitle="InSpeech Mobile App"
                    technologies="Flutter, Firebase, Speech-to-Text, Web Speech API, OCR"
                />
                <ProjectCard
                    projectId="fanua"
                    imgSrc="/assets/fanua.png"
                    projectTitle="Fanua Mobile App"
                    technologies="Flutter, Flask, Firebase, Realtor API, Docker, AWS EC2"
                />
            </div>
        </div>
    )
}

export default Projects