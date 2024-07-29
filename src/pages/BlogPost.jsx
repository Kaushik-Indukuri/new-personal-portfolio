import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { postId } = useParams();

    // In a real application, you would fetch the blog post content based on the postId
    // This is just a mock-up for demonstration purposes
    const post = {
        id: postId,
        title: 'Sample Blog Post',
        date: 'May 1, 2023',
        author: 'John Doe',
        content: `
      This is a sample blog post content. In a real application, this would be much longer
      and probably formatted with Markdown or rich text.

      You can add multiple paragraphs, code snippets, images, and more to your blog posts.

      The postId parameter from the URL is: ${postId}
    `,
    };

    return (
        <article className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <div className="text-gray-600 mb-4">
                <span>{post.date}</span> • <span>{post.author}</span>
            </div>
            <div className="prose lg:prose-xl">
                {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                ))}
            </div>
        </article>
    );
};

export default BlogPost;