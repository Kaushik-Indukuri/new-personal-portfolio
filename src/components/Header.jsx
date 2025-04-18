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
                    I’m passionate about building—whether it’s tech, ideas, or communities—and embracing every opportunity to learn and grow. I spend my time seeking out moments that bring joy and connection. If this resonates with you, I’d love to connect!
                    </div>
                    <div className="w-full body-2 text-center xl:text-left">
                        <a href="https://drive.google.com/file/d/11KMkjP5brMhl3aSEoGMbq5_B67du001I/view?usp=sharing">Resume is available here</a>
                    </div>
                </div>
                <img className="w-auto h-auto mt-8 lg:mt-0" src="/assets/portfolio_header.png" alt="Profile" />
            </div>
        </div>
    )
}

export default Header
