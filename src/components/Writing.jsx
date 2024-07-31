import React from 'react'
import ArticleCard from './elements/ArticleCard';


const Writing = () => {
    return (
        <div className="w-full py-24 px-8 sm:px-16 md:px-16 lg:px-36 flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="w-full flex-col justify-start items-center gap-14 flex">
                <div className="text-zinc-800 h3">📑 WRITING </div>
                <div className="w-full flex-col justify-start items-start gap-10 sm:gap-9 md:gap-7 flex">
                    <ArticleCard
                        blogId="ece408"
                        articleTitle="ECE408: Why Applied Parallel Programming is My Favorite Course at UIUC"
                        date="May 18, 2024"
                        readTime="7 min"
                    />
                </div>
            </div>
        </div>
    )
}

export default Writing