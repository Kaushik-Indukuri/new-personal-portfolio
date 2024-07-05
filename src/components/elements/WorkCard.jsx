import React from 'react'

const WorkCard = ({ logoSrc, title, description }) => {
    return (
        <div className="w-full flex flex-col md:flex-row items-center py-6 px-1 sm:px-8 md:px-16 gap-6 md:gap-11">
            <img className="w-24 h-24 md:w-36 md:h-36 relative mb-4 md:mb-0" src={logoSrc} alt={title} />
            <div className="flex-grow text-center md:text-left">
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