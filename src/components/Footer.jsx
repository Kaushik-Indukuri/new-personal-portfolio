import React from 'react'

const Footer = () => {
    return (
        <div className="w-full px-36">
            <div className="w-full py-12 flex flex-col items-center border-t-2 border-gray-300 gap-5">
                <h2 className="ftr-txt my-1">
                    Get in Touch
                </h2>
                <p className="text-center body-2">
                    Have any suggestions or interested in working on a project <br></br>
                    Go ahead, I'd love to connect with you
                </p>
                <div className="flex justify-center items-center gap-5 text-3xl">
                    <a href="https://www.linkedin.com/in/kaushik-indukuri/" target="_blank" className="text-zinc-800 hover:text-zinc-600">
                        <span class="iconify mdi--linkedin"></span>
                    </a>
                    <a href="https://github.com/kaushik-Indukuri" target="_blank" className="text-zinc-800 hover:text-zinc-600">
                        <span class="iconify mdi--github"></span>
                    </a>
                    <a href="https://www.instagram.com/kaushik.indukuri/" target="_blank" className="text-zinc-800 hover:text-zinc-600">
                        <span class="iconify mdi--instagram"></span>
                    </a>
                    <a href="mailto:kvi3@illinois.com" className="text-zinc-800 hover:text-zinc-600">
                        <span class="iconify mdi--email"></span>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Footer