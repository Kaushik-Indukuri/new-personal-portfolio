import React from 'react'
import ArticleCard from './elements/ArticleCard';


const Writing = () => {
    return (
        <div className="w-full py-24 px-36 bg-white flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="flex-col justify-start items-center gap-14 flex">
                <div className="text-zinc-800 h3">📑 WRITING </div>
                <div className="flex-col justify-start items-start gap-7 flex">
                    <ArticleCard
                        articleTitle="Hector: An Efficient Programming and Compilation Framework for Implementing Relational Graph Neural Networks in GPU Architectures"
                        date="Oct 1, 2022"
                        readTime="5 min"
                    />
                    <ArticleCard
                        articleTitle="Hector: An Efficient Programming and Compilation Framework for Implementing Relational Graph Neural Networks in GPU Architectures"
                        date="Oct 1, 2022"
                        readTime="5 min"
                    />
                    <ArticleCard
                        articleTitle="Hector: An Efficient Programming and Compilation Framework for Implementing Relational Graph Neural Networks in GPU Architectures"
                        date="Oct 1, 2022"
                        readTime="5 min"
                    />
                </div>
            </div>
        </div>
    )
}

export default Writing