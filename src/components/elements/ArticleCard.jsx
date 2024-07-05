import React from 'react'

const ArticleCard = ({ articleTitle, date, readTime }) => {
    return (
        <div className="self-stretch pl-7 pr-12 py-7 bg-color-1 border border-color-2 justify-start items-start gap-2.5 inline-flex hover:cursor">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-5 inline-flex">
                <div className="self-stretch h2">{articleTitle}</div>
                <div className="self-stretch flex justify-between body-2">
                    <span>{date}</span>
                    <span>{readTime}</span>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard