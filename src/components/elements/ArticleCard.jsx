import React from 'react'

const ArticleCard = ({ blogId, articleTitle, date, readTime }) => {
    return (
        <a href={`/writing/${blogId}`} className="block w-full">
            <div className="w-full pl-7 pr-12 py-7 bg-color-1 border border-color-2 hover:cursor-pointer">
                <div className="flex flex-col gap-5">
                    <h2 className="h2">{articleTitle}</h2>
                    <div className="flex justify-between body-2">
                        <span>{date}</span>
                        <span>{readTime}</span>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ArticleCard