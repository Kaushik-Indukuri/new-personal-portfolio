import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { useLocation } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, ScrollRestoration, Navigate } from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import HomePage from './pages/HomePage'
import WritingPage from './pages/WritingPage'
import ProjectDetail from './pages/ProjectDetail'
import BlogPost from './pages/BlogPost'

const TrackPageView = () => {
  const location = useLocation()

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-HGPBC7BKJ3', {
        page_path: location.pathname,
      })
    }
  }, [location])

  return null
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <App />
        <ScrollRestoration />
        <TrackPageView />
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
        element: <Navigate to="/" />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
