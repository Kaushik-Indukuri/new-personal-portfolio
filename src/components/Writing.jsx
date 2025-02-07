import React, { useState, useEffect } from 'react';
import ArticleCard from './elements/ArticleCard';
import { Loader2 } from 'lucide-react';

const Writing = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setLoading(true);
                setError(null);

                // Replace with your GitHub repository details
                const owner = 'kaushik-indukuri';
                const repo = 'personal-blog-posts';
                
                // Fetch the index file instead of scanning the directory
                const response = await fetch(
                    `https://raw.githubusercontent.com/${owner}/${repo}/main/index.json`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch articles index');
                }

                const data = await response.json();
                const articlesData = data.articles;
                
                // Sort articles by date (most recent first)
                const sortedArticles = articlesData.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                });

                setArticles(sortedArticles);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <p className="text-red-500">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="w-full py-24 px-8 sm:px-16 md:px-16 lg:px-36 flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="w-full flex-col justify-start items-center gap-14 flex">
                <div className="text-zinc-800 h3">📑 WRITING</div>
                <div className="w-full flex-col justify-start items-start gap-10 sm:gap-9 md:gap-7 flex">
                    {articles.map((article) => (
                        <ArticleCard
                            key={article.blogId}
                            blogId={article.blogId}
                            articleTitle={article.title}
                            date={article.date}
                            readTime={article.readTime}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Writing;