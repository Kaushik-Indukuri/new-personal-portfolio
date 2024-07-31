import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { blogId } = useParams();

    // In a real application, you would fetch the blog post content based on the postId
    // This is just a mock-up for demonstration purposes
    const getBlogPost = (id) => {
        const posts = {
            'ece408': {
                title: "ECE408: Why Applied Parallel Programming is My Favorite Course at UIUC",
                date: "May 18, 2024",
                read_time: "7 min",
                content: `
                As a student at the University of Illinois at Urbana-Champaign (UIUC), I’ve had the opportunity to take a variety of fascinating and challenging courses. Among them, ECE408: Applied Parallel Programming stands out as my favorite. For the first time, I felt like I wasn't just learning algorithms and concepts to replicate them. I remember something my professor said during a lecture that has stuck with me to this day: "parallel programming is a coder's nightmare because implementing parallel models doesn't guarantee better performance; it's all on the coder to explore the design space and find the appropriate optimizations." I thoroughly enjoyed this process of analyzing and solving computational problems within this class.

                **An Introduction to Parallel Programming**
                Parallel programming is the process of dividing a task into smaller sub-tasks that can be executed at the same time using compute resources such as threads. In a world where data is growing exponentially and computational power is a significant bottleneck, parallel programming offers a solution to improve our computational capability. This approach is fundamental in fields such as scientific computing, machine learning, and big data analytics.

                **CUDA Execution Model**
                In ECE408, we primarily learn CUDA, a programming model and application programming interface that allows software to use NVIDIA graphics processing units (GPUs) for general-purpose processing. These GPUs are designed for parallel processing and their architecture consists of several key components that work together to achieve high performance. Some of the key components include:
                - Threads: the smallest unit of execution that can be scheduled by the GPU
                - CUDA Cores: the basic processing units that execute a single thread at a time
                - Streaming Multiprocessors (SMs): responsible for managing and executing a batch of threads and contains multiple CUDA cores along with individual shared memory
                - Warp Scheduler: Schedules and dispatches warps (groups of 32 threads) to CUDA cores to execute within each SM

                The CUDA execution model involves running highly parallel computations on the GPU while leaving serial or modestly parallel tasks to the CPU. A CUDA kernel is executed as a grid of threads, where all threads run the same kernel code under the Single Processor Multiple Data (SPMD) model. Each thread is assigned a unique index, which it uses to compute memory addresses and make control decisions, allowing it to handle different parts of the data or computation independently.

                **Why ECE408 is Exceptional**
                With an overview of the basic technical aspects within parallel programming out of the way let's delve into why ECE408 is truly exceptional in my opinion. One of the most compelling aspects of the course are the projects and machine problems, which I believe are both relevant and challenging. My final project was to implement the forward pass of a LeNet-5 Convolutional Neural Network (CNN) and parallelize the computation with CUDA. Our task was to optimize the performance as much as possible and the students that achieved the lowest computation times received extra credit. 

                Working on this project was incredibly rewarding because it challenged me to think about how the CNN computed outputs and how I could apply techniques I learned throughout the semester to optimize these computations. The most interesting thing was that almost all of the optimizations I implemented such as shared memory matrix multiplication, reduction trees, atomics, and fixed point arithmetic actually increased the computation time. This is where I have to reference my professor's quote because I initially couldn't understand why the performance had decreased. After numerous office hours and extensive study, I eventually realized that the overhead from launching kernels and managing memory was too high for the optimizations to be effective, and that quote became deeply ingrained in my mind ever since. This process of learning was eye-opening and I believe it's what makes ECE408 such a standout course.

                **Conclusion**
                ECE408: Applied Parallel Programming is more than just a course; it’s an invaluable learning experience that tested my understanding of how to analyze problems. It has not only equipped me with essential skills but also inspired me to pursue a career in the exciting field of parallel computing. With the rise of gen AI and the increasing demand for both massively parallel systems and hardware, the knowledge and skills gained from this course are extremely relevant and sought after. For any student at UIUC that is interested in computational efficiency and the future of technology, ECE408 is a must-take course.
                
                `,
            },
        };

        return posts[id] || null;
    };

    const post = getBlogPost(blogId);

    if (!post) {
        return <div>Post not found</div>;
    }

    const renderText = (text) => {
        const parts = text.split(/(\*\*.*?\*\*)/);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong className="text-lg" key={index}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return (
        <article className="max-w-2xl mx-auto px-8 sm:px-16 xl:px-0 py-24">
            <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
            <div className="text-gray-600 mb-4">
                <span>{post.date}</span> • <span>{post.read_time}</span>
            </div>
            <div className="prose lg:prose-xl leading-7">
                {post.content.split('\n\n').map((block, blockIndex) => {
                    const lines = block.split('\n');
                    const isBulletList = lines.every(line => line.startsWith('- '));

                    if (isBulletList) {
                        return (
                            <ul key={blockIndex} className="list-disc pl-5 mb-5">
                                {lines.map((line, lineIndex) => (
                                    <li key={lineIndex}>{renderText(line.slice(2))}</li>
                                ))}
                            </ul>
                        );
                    } else {
                        return (
                            <p key={blockIndex} className="mb-5">
                                {lines.map((line, lineIndex) => (
                                    <React.Fragment key={lineIndex}>
                                        {lineIndex > 0 && <br />}
                                        {renderText(line)}
                                    </React.Fragment>
                                ))}
                            </p>
                        );
                    }
                })}
            </div>
            <a href="/writing">
                <button className="rounded-full border border-[#333333] px-5 py-1.5 text-gray-800 hover:bg-[#333333] hover:text-white transition duration-300">
                    Return to Writing
                </button>
            </a>
        </article>
    );
};

export default BlogPost;