import React from 'react'

const Header = () => {
    return (
        <div className="w-full h-auto px-36 py-24 flex flex-col justify-center items-center gap-2.5">
            <div className="flex justify-start items-center gap-7">
                <div className="flex flex-col justify-start items-start gap-10">
                    <div className="w-full h1">
                        Hello! I’m Kaushik
                    </div>
                    <div className="w-full body-1">
                        I'm a fourth-year student at UIUC pursuing a degree in Computer Engineering. I'm interested in parallel programming, compilers, and parallel computer architecture and am always looking for new opportunities in these fields.
                    </div>
                    <div className="w-full body-2">
                        Resume is available here.
                    </div>
                </div>
                <img className="w-auto h-auto" src="./src/assets/portfolio_header.png" alt="Profile" />
            </div>
        </div>
    )
}

export default Header