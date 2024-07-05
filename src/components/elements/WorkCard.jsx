import React from 'react'

const WorkCard = ({ logoSrc, title, description }) => {
    return (
        <div className="w-full flex items-center py-6 px-16 gap-11">
            <img className="w-36 h-36 relative" src={logoSrc} />
            <div className="flex-grow ">
                <h2 className="h2 mb-2.5">
                    {title}
                </h2>
                <p className="body-2">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default WorkCard