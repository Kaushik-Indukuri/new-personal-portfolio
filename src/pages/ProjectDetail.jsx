import { data } from 'autoprefixer';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TriangleAlert } from 'lucide-react';


const ProjectDetail = () => {
    const { projectId } = useParams();

    const getProjectDetails = (id) => {
        const projects = {
            'cool-compiler-lexer-parser': {
                title: "Lexer & Parser for COOL Compiler",
                date: "Oct 2024",
                description: (
                    <>
                        <p className="mb-5">
                            In this compiler project, I developed a robust front-end implementation for the Classroom Object-Oriented Language (COOL). The project focused on building two critical components of a compiler's front-end: a lexer and a parser, which together transform source code into an Abstract Syntax Tree (AST) representation.
                        </p>

                        <p className='mb-5'>
                        The lexer, implemented using Flex, handles the initial phase of compilation by breaking down source code into meaningful tokens. I extended the basic COOL language specification to support additional features including hexadecimal number literals and Python-style multi-line strings. My implementation includes sophisticated error handling mechanisms for various edge cases such as unterminated strings, invalid characters, and EOF conditions in comments. The lexer also maintains line number tracking for precise error reporting and utilizes a string table implementation for efficient token management.
                        </p>

                        <p className='mb-5'>
                        The parser component, built using Bison, implements COOL's context-free grammar and constructs an Abstract Syntax Tree representation of the program. A key challenge was handling the inherent ambiguity in COOL's let expressions, which I resolved using careful precedence declarations. The parser includes robust error recovery mechanisms that allow it to continue processing input after encountering syntax errors, particularly in class definitions, feature declarations, and let bindings. I also implemented support for C-style for loops as an extension to the original COOL grammar
                        </p>

                        <p className="mb-10">
                            You can find the source code on GitHub <a href="https://github.com/Kaushik-Indukuri/cool-lexer-parser" className="text-blue-600 hover:underline">here</a>
                        </p>
                    </>
                ),
                technologies: "C++, Bison, Flex, RegEx",
                image: "/assets/lp_detail.png",
            },
            'youtube-comments-dashboard': {
                title: "Youtube Comments Dashboard",
                date: "Jul - Aug 2024",
                description: (
                    <>
                        <p className="mb-5">
                            This web platform provides comprehensive insights into the comments of YouTube videos. By inputting a YouTube video link, users can explore a wide range of metrics and visualizations, enabling them to understand viewer engagement and sentiment better. The platform leverages modern cloud infrastructure and scalable microservices to deliver real-time analytics.
                        </p>
                        <p className="mb-5">
                            <strong>Key Features:</strong>
                            <ul>Like/Dislike Ratio: Understand the general viewer sentiment towards the video</ul>
                            <ul>Engagement Ratio: Analyze the ratio of comments, likes, and threads to total viewers, indicating viewer engagement</ul>
                            <ul>Sentiment Distribution: Categorize comments as positive, negative, or neutral</ul>
                            <ul>Intent Classification: Classify comments into feedback, requests, and complaints</ul>
                            <ul>Keyword Cloud: Visualize the most frequently seen keywords in the comments</ul>
                            <ul>Comments by Region: A pie chart showing the geographic distribution of commenters</ul>
                            <ul>Sentiment Distribution Over Time: Track how sentiment changes over the video's lifespan</ul>
                            <ul>Comments Posted Over Time: Monitor the volume of comments over time</ul>
                        </p>
                        <p className="mb-5">
                            <strong>Architecture and Workflow:</strong>
                            <ul>1. Frontend (React + Tailwind): The frontend sends the video link to a backend API endpoint, which triggers the Kafka producer and initiates the data processing pipeline.</ul>
                            <ul>2. Backend API and Kafka Producer: The Kafka producer fetches the video's comments and metadata from the YouTube Data API. The producer streams the retrieved comment data to various Kafka topics set up on AWS EC2 clusters. Topics are created for each type of analysis: sentiment, intent, keyword, geographic, and temporal.</ul>
                            <ul>3. Kafka Consumers for Data Analysis: Each Kafka consumer subscribes to a designated topic to perform specific analyses. The consumers are Python services that use the NLTK library to perform the appropriate functions.</ul>
                            <ul>4. Containerization and Orchestration (Docker + Kubernetes): Each consumer is containerized with Docker, allowing for a consistent environment across deployments. Kubernetes orchestrates the containers, ensuring that consumers scale based on the load (e.g., spikes in comments)</ul>
                            <ul>5. Data Storage (MongoDB): After analysis, each consumer writes the processed data to MongoDB. Sentiment scores, keywords, intents, geographic distributions, and temporal insights are stored in collections within MongoDB. The frontend queries MongoDB for real-time analytics display.</ul>
                            <ul>6. Infrastructure Setup (Terraform on AWS): Terraform is used to set up and manage the infrastructure on AWS, specifically EC2 instances that host the Kafka clusters.</ul>
                        </p>
                        <p className="mb-10">
                            You can find the source code on GitHub <a href="https://github.com/Kaushik-Indukuri/youtube-comments-dashboard" className="text-blue-600 hover:underline">here</a>
                        </p>
                    </>
                ),
                technologies: "React, TypeScript, Tailwind, Python, Kafka, Node.js, Docker, K8s, Terraform, NLTK",
                image: "/assets/yt_detail.png",

            },
            'http-client-server': {
                title: "HTTP Client & Server",
                date: "Jan 2024",
                description: (
                    <>
                        <p className="mb-5">
                            This project consists of two components: a HTTP client and a HTTP/1.1 compliant server.
                        </p>

                        <p className='mb-5'>
                            The client uses a socket to establish a TCP connection with the server. The socket is the communication endpoint used to interact with the server. The client can then transmit HTTP GET requests over the established connection. The socket facilitates this data transfer. When the server responds, the client reads the data from the socket and writes to a specified local file.
                        </p>

                        <p className='mb-5'>
                            The server implements a basic stream socket that handles HTTP GET requests. The server initializes a listening socket and binds it to a port specified by the command-line argument. The server then listens for incoming connections and for each connection, the server forks a new process:
                            <ul>- The child process handles the request, closes the listening socket, and processes the HTTP request</ul>
                            <ul>- The parent process continues to accept new connections</ul>

                            A signal handler is set up to reap zombie child processes to prevent accumulation of defunct processes. It parses incoming requests to extract the HTTP method, path, and protocol. It then attempts to open the requested file from the local filesystem and send the file contents back to the client.
                        </p>

                        <p className="mb-10">
                            You can find the source code on GitHub <a href="https://github.com/Kaushik-Indukuri/http-client-server" className="text-blue-600 hover:underline">here</a>
                        </p>
                    </>
                ),
                technologies: "C, Socket Programming, Linux",
                image: "/assets/http_detail.png",
            },
            'lenet-acceleration': {
                title: "LeNet-5 Neural Network GPU Acceleration",
                date: "Dec 2023",
                description: (
                    <>
                        <p className="mb-5">
                            Fashion-MNIST is a dataset comprising 70,000 grayscale images of 28x28 pixels each, spread across ten different clothing categories such as T-shirts, trousers, and sneakers. It serves as a more challenging alternative to the classic MNIST dataset of handwritten digits, providing a modern benchmark for machine learning algorithms. This project utilizes a Convolutional Neural Network (CNN) to classify Fashion-MNIST images into their respective clothing categories. By leveraging advanced GPU parallel computing techniques, the CNN can categorize images with significantly lower computation time compared to traditional CPU-based methods.
                        </p>
                        <p className="mb-5">
                            To optimize performance, I used CUDA based parallel computing to accelerate the LeNet-5 CNN model. The LeNet-5 architecture consists of two convolutional layers, two subsampling layers, and three fully connected layers. By parallelizing the convolutional and subsampling layers, I achieved a 45% reduction in computation time compared to CPU-based implementations. I utilized the Nsight-Compute profiler to analyze the GPU kernel performance and identify bottlenecks in memory access and thread synchronization.

                        </p>
                        <p className="mb-5">
                            Some key techniques I used were accessing constant memory to retrieve the filter weights and shared memory to cache intermediate results. I also applied matrix unrolling to break down matrices into more manageable segments as well as to minimize the cost of loop overhead, such as branching on the termination condition and updating counter variables.
                        </p>
                        <p className="mb-10">
                            You can find the source code on GitHub <a href="https://github.com/Kaushik-Indukuri/lenet-5-gpu-acceleration" className="text-blue-600 hover:underline">here</a>
                        </p>
                    </>
                ),
                technologies: "C, CUDA, Nsight-Compute",
                image: "/assets/lenet_detail.png",
            },
            'linux-operating-system': {
                title: "Linux-like Operating System",
                date: "Apr - May 2023",
                description: (
                    <>
                        <p className="mb-5">
                            I engineered a bare-bones Linux operating system that features an EXT2 filesystem, global descriptor table (GDT), and interrupt functionality, enabling robust system calls for file and I/O operations. Additionally, it includes device drivers for keyboard, mouse, and VGA display, managed through the Intel 8259 Programmable Interrupt Controller (PIC).
                        </p>
                        <p className="mb-5">
                            I developed the EXT2 filesystem, which included creating inodes, directory entries, and block allocation algorithms to manage file storage and retrieval efficiently. I configured the GDT to define the segments of memory used by the kernel and user applications, ensuring proper memory protection and organization. I implemented an interrupt descriptor table (IDT) to handle hardware and software interrupts and interrupt service routines (ISRs) for various system events, such as hardware interrupts from the PIC.

                        </p>
                        <p className="mb-5">
                            I also scripted device drivers for the keyboard, mouse, and VGA display. These drivers were responsible for
                            <ul> <strong>Keyboard Input:</strong> Capturing keystrokes, handling key press/release events, and providing a buffer for character input.</ul>
                            <ul> <strong>Mouse Input:</strong>  Tracking mouse movements, handling button clicks, and integrating with the graphical display.</ul>
                            <ul> <strong>VGA Display:</strong> Managing screen resolution, color depth, and rendering text/graphics on the screen.</ul>
                            <ul> <strong>Intel 8259 PIC Integration:</strong> Configuring the PIC to handle hardware interrupts, allowing the system to respond to hardware events such as keyboard and mouse inputs.</ul>
                        </p>
                        <p className="mb-10">
                            You can find the source code on GitHub <a href="https://github.com/Kaushik-Indukuri/linux-like-os" className="text-blue-600 hover:underline">here</a>
                        </p>
                    </>
                ),
                technologies: "C, x86 Assembly, Linux",
                image: "/assets/os_detail.png",
            },
            'stock-sentiment-api': {
                title: "Stock Sentiment API",
                date: "Jan 2023",
                description: (
                    <>
                        <p className="mb-5">
                            The Stock Sentiment API provides users with the most positive or negative news articles related to a specified stock. By analyzing article titles, it helps users gauge market sentiment and make informed investment decisions. The API is designed to assist traders, investors, and financial analysts by offering insights into the public sentiment surrounding specific stocks.
                        </p>
                        <p className="mb-5">
                            The service uses BeautifulSoup to scrape news articles from various financial websites, collecting article titles and links. Pandas is used to process and clean the scraped data before the NLTK library and numpy are applied to calculate the polarity of article titles and normalize the scores between -1 and 1. This determines whether the sentiment was positive, negative, or neutral. A RESTful API was developed with the FastAPI framework to allow users to query for the most positive or negative news articles given an input stock. The API was deployed on AWS Lambda using Docker, ensuring scalability and cost-effectiveness with a serverless architecture.
                        </p>
                        <p className="mb-5">
                            The API has garnered over 10,000 unique users and currently maintains an average of 100 monthly active users. The service has sub 600ms latency and is publicly accessible on the RapidAPI marketplace <a href="https://rapidapi.com/kinduvarma/api/stock-sentiment-api/playground/apiendpoint_48c05d23-9be9-4271-ac53-2c01cb52179d" className="text-blue-600 hover:underline">here</a>
                        </p>
                        <p className="mb-10">
                            You can find the source code on GitHub <a href="https://github.com/Kaushik-Indukuri/stock-sentiment-api" className="text-blue-600 hover:underline">here</a>
                        </p>
                    </>
                ),
                technologies: "Python, FastAPI, Pandas, Numpy, BeautifulSoup, Docker, AWS Lambda",
                image: "/assets/stock_detail.png",
            },
            'airport-route-finder': {
                title: "Airport Route Finder",
                date: "Dec 2022",
                description: (
                    <>
                        <p className="mb-5">
                            Pathfinding algorithms are widely used in various domains such as logistics, robotics, network routing, and geographic information systems. The Airport Route Finder implements these pathfinding algorithms in a CLI to allow users to:
                        </p>
                        <p className="mb-5">
                            <ul>- Search for the shortest path between two destinations using Dijkstra’s algorithm.</ul>
                            <ul>- Verify if a path exists between two airports using the Breadth-First Search (BFS) algorithm.</ul>
                            <ul>- Identify Eulerian paths within the airport graph using the Eulerian path identification algorithm.</ul>
                        </p>
                        <p className="mb-5">
                            The CLI was developed in C++ to clean and merge data from two CSV datasets: airports and routes. It extracts airport codes and coordinates from the airport.csv dataset, and source and destination airport codes from the routes.csv dataset. An adjacency matrix is used to represent a graph, where nodes represent airports and edges represent routes between them. The weight of each edge is calculated as the distance between the connected airport nodes. The algorithms traverse this graph to find the shortest path, verify path existence, and identify Eulerian paths.
                        </p>
                        <p className="mb-10">
                            You can find the source code on GitHub <a href="https://github.com/Kaushik-Indukuri/flight-path-optimizer?tab=readme-ov-file" className="text-blue-600 hover:underline">here</a>
                        </p>
                    </>
                ),
                technologies: "C++, CMake, Docker",
                image: "/assets/routes_detail.png",
            },
            'inspeech': {
                title: "InSpeech",
                date: "Mar 2021",
                description: (
                    <>
                        <p className="mb-5">
                            Inspired by a family member with a speech impediment, I sought a solution to improve their presentation skills with personalized feedback. InSpeech was born to serve students and white-collar employees to enhance their presentation skills with speech analytics and teleprompting features.
                        </p>
                        <p className="mb-5">
                            The app allows users to record their presentation and then analyzes duration, speaking tone, volume, pace, and frequency of filler words. Users can save their presentations and review detailed analytics and transcripts on the dashboard. The teleprompter feature allows users to practice their presentation at a controlled pace. It uses Optical Character Recognition (OCR) to convert an image into text, displaying the script for the user to read through the teleprompter.
                        </p>
                        <p className="mb-5">
                            Through research, I identified three key traits of effective speech: consistent words per minute, loud volume, and a confident tone. Finding an API to extract these traits from voice data led us to the Web Speech API. We developed InSpeech using Flutter for a seamless user interface and Firebase for backend services, including user authentication and data storage. Speech analysis was achieved using the Web Speech API and we implemented an OCR model using FirebaseML Kit to convert images of documents to text.
                        </p>
                        <p className="mb-10">
                            You can find the source code on GitHub <a href="https://github.com/Kaushik-Indukuri/inspeech" className="text-blue-600 hover:underline">here</a> and a Devpost submission with a demo video <a href="https://devpost.com/software/inspeech" className="text-blue-600 hover:underline">here</a>.
                        </p>
                    </>
                ),
                technologies: "Flutter, Firebase, Speech-to-Text, Web Speech API",
                image: "/assets/inspeech_detail.png",
            },
            'fanua': {
                title: "Fanua",
                date: "Jan - Feb 2021",
                description: (
                    <>
                        <p className="mb-5">
                            Fanua is a mobile application designed to connect investors interested in co-investing in properties. The app offers a comprehensive messaging system and sophisticated property search filters, enabling users to effortlessly locate investment opportunities and communicate with potential co-investors directly within the platform.
                        </p>
                        <p className="mb-5">
                            The application's user interface is built using Flutter, allowing for a seamless and responsive user experience across both android and iOS platforms. A Python web server is employed to handle data retrieval and analysis. This server interacts with the Realtor API to fetch real estate data, which is then processed and analyzed to provide insightful information to users. Firebase is integrated for its robust messaging services and user authentication capabilities. This ensures secure and efficient communication between users without the need for page refreshes, enhancing the real-time interaction experience. The application uses advanced filtering mechanisms to query and update property data based on user requests, providing tailored search results and investment opportunities.

                        </p>
                        <p className="mb-5">
                            Some major challenges I encountered were implementing a real-time messaging system and querying and dynamically updating data from the Realtor API. I had to ensure messages were updated instantly without requiring users to refresh the app and conducted extensive troubleshooting to handle user requests such as applying complex property filters.
                        </p>
                        <p className="mb-10">
                            You can find the source code on GitHub <a href="https://github.com/Kaushik-Indukuri/fanua" className="text-blue-600 hover:underline">here</a> and a Devpost submission with a demo video <a href="https://devpost.com/software/fanua-real-estate" className="text-blue-600 hover:underline">here</a>.
                        </p>
                    </>
                ),
                technologies: "Flutter, Flask, Firebase, Realtor API, Docker, AWS EC2",
                image: "/assets/fanua_detail.png",
            },
        };

        return projects[id] || null;
    };

    const project = getProjectDetails(projectId);

    if (!project) {
        return <div className='flex flex-col gap-5 items-center py-24'>
            <TriangleAlert size={90} strokeWidth={1} />
            <h1 className='text-3xl font-light'>Project not found</h1>
        </div>;
    }

    return (
        <div className="flex flex-col md:flex-row gap-12  w-full py-24 px-8 sm:px-16 md:px-16 lg:px-36">
            <div className="flex-1 leading-7">
                <h1 className="text-3xl lg:text-4xl font-semibold mb-2">{project.title}</h1>
                <h2 className="text-xl text-gray-600 mb-5">{project.date}</h2>

                <div>{project.description}</div>

                <a href="/projects">
                    <button className="rounded-full border border-[#333333] px-5 py-1.5 text-gray-800 hover:bg-[#333333] hover:text-white transition duration-300">
                        Return to Projects
                    </button>
                </a>
            </div>

            <div className="flex-1">
                <img src={project.image} alt="Project Image" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default ProjectDetail;