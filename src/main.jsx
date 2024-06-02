import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

const router = createBrowserRouter([
  {
    path: '/',
    element : <App />,
    children : [
      {
        path : "",
        element: <Home />
      },{
        path : 'about',
        element: <About />
      },{
        path : 'contact',
        element : <Contact />
      },{
        path : 'projects',
        element : <Projects />
      }
    ] 
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
