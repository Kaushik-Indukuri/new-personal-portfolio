import React from 'react'

const Header = () => {
    return (
        <div className="w-full h-auto px-8 sm:px-16 md:px-16 lg:px-36 py-12 md:py-24 flex flex-col justify-center items-center gap-2.5">
            <div className="flex flex-col xl:flex-row justify-start items-center gap-9">
                <div className="flex flex-col justify-start items-start gap-6 md:gap-10">
                    <div className="w-full h1 text-2xl md:text-4xl text-center xl:text-left">
                        Hello! I'm Kaushik
                    </div>
                    <div className="w-full body-1 leading-relaxed md:leading-loose text-xl md:text-2xl px-0 sm:px-8 md:px-16 xl:px-0 text-center xl:text-left">
                        I'm a fourth-year student at UIUC pursuing a degree in Computer Engineering. I'm interested in parallel programming, compilers, and distributed systems and am always looking for new opportunities in these fields.
                    </div>
                    <div className="w-full body-2 text-center xl:text-left">
                        Resume is available here.
                    </div>
                </div>
                <img className="w-auto h-auto mt-8 lg:mt-0" src="./src/assets/portfolio_header.png" alt="Profile" />
            </div>
        </div>
    )
}

export default Header