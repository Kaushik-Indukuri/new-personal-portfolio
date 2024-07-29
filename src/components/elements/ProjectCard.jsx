import React from 'react'
import { Link } from 'react-router-dom';

const ProjectCard = ({ projectId, imgSrc, projectTitle, technologies }) => {
    return (
        <a href={`/projects/${projectId}`} className="transform transition-transform duration-300 hover:scale-95">
            <div className="flex-col justify-start items-start gap-6 inline-flex">
                <img className="w-80 h-80" src={imgSrc} />
                <div className="h-16 flex-col justify-start items-start gap-2 flex">
                    <div className="w-80 h2">{projectTitle}</div>
                    <div className="w-80 body-2">{technologies}</div>
                </div>
            </div>
        </a>
    )
}

export default ProjectCard