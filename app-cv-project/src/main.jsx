import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        //errorElement: <ErrorPage/>,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/experience',
                element: <Experience />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)