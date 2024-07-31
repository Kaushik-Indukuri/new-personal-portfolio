import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, ScrollRestoration, Navigate } from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import HomePage from './pages/HomePage'
import WritingPage from './pages/WritingPage'
import ProjectDetail from './pages/ProjectDetail'
import BlogPost from './pages/BlogPost'



const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <App />
        <ScrollRestoration />
      </>

    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'projects/:projectId',
        element: <ProjectDetail />,
      },
      {
        path: 'writing',
        element: <WritingPage />,
      },
      {
        path: 'writing/:blogId',
        element: <BlogPost />,
      },
      {
        path: '*',
        element: <Navigate to="/" />, // This will catch all undefined routes and redirect to the home page
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
