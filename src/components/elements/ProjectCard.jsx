import React from 'react'

const ProjectCard = ({ imgSrc, projectTitle, technologies }) => {
    return (
        <div className="flex-col justify-start items-start gap-6 inline-flex">
            <img className="w-80 h-80" src={imgSrc} />
            <div className="h-16 flex-col justify-start items-start gap-2 flex">
                <div className="w-80 h2">{projectTitle}</div>
                <div className="w-80 body-2">{technologies}</div>
            </div>
        </div>
    )
}

export default ProjectCard