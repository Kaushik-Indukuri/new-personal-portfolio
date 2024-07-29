import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import HomePage from './pages/HomePage'
import WritingPage from './pages/WritingPage'
import ProjectDetail from './pages/ProjectDetail'



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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
