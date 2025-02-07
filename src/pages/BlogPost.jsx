import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TriangleAlert, Loader2 } from 'lucide-react';

const BlogPost = () => {
    const { blogId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                setError(null);

                // Replace these with your GitHub repository details
                const owner = 'kaushik-indukuri';
                const repo = 'personal-blog-posts';
                const path = `${blogId}.md`; // Assuming posts are stored as .md files

                // First, fetch the file metadata to get the SHA
                const metadataResponse = await fetch(
                    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
                    {
                        headers: {
                            // Add your GitHub token if needed
                            // 'Authorization': 'token your-github-token'
                        }
                    }
                );

                if (!metadataResponse.ok) {
                    throw new Error('Post not found');
                }

                const metadata = await metadataResponse.json();
                
                // Fetch the actual content
                const contentResponse = await fetch(metadata.download_url);
                if (!contentResponse.ok) {
                    throw new Error('Failed to fetch post content');
                }

                const content = await contentResponse.text();

                // Parse frontmatter from markdown content
                const { title, date, read_time, body } = parseFrontmatter(content);

                setPost({
                    title: title.slice(1, -1),
                    date: date,
                    read_time: read_time,
                    content: body
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [blogId]);

    // Helper function to parse frontmatter from markdown
    const parseFrontmatter = (content) => {
        const frontmatterRegex = /---\n([\s\S]*?)\n---\n([\s\S]*)/;
        const match = content.match(frontmatterRegex);

        if (!match) {
            return {
                title: 'Untitled',
                date: 'No date',
                read_time: 'Unknown',
                body: content
            };
        }

        const frontmatter = match[1];
        const body = match[2];

        // Parse YAML-style frontmatter
        const metadata = {};
        frontmatter.split('\n').forEach(line => {
            const [key, ...value] = line.split(':');
            if (key && value) {
                metadata[key.trim()] = value.join(':').trim();
            }
        });

        return {
            title: metadata.title || 'Untitled',
            date: metadata.date || 'No date',
            read_time: metadata.read_time || 'Unknown',
            body
        };
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Loader2 className="h-12 w-12 animate-spin" />
                <p className="mt-4 text-gray-600">Loading post...</p>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className='flex flex-col gap-5 items-center py-24'>
                <TriangleAlert size={90} strokeWidth={1} />
                <h1 className='text-3xl font-light'>{error || 'Post not found'}</h1>
            </div>
        );
    }

    return (
        <article className="max-w-3xl mx-auto px-8 sm:px-16 xl:px-0 py-24">
            <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
            <div className="text-gray-600 mb-8">
                <span>{post.date}</span> • <span>{post.read_time}</span>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
                <ReactMarkdown
                    components={{
                        img: ({ node, ...props }) => (
                            <img
                                {...props}
                                alt={props.alt || ''}
                                className="mx-auto"
                            />
                        ),
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={oneDark}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </div>
            <div className="mt-12">
                <a href="/writing">
                    <button className="rounded-full border border-[#333333] px-5 py-1.5 text-gray-800 hover:bg-[#333333] hover:text-white transition duration-300">
                        Return to Writing
                    </button>
                </a>
            </div>
        </article>
    );
};

export default BlogPost;