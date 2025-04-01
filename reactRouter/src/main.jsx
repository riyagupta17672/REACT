import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'

/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
}
])
*/

// Second Method

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element= {<Layout />}>
      <Route path= '' element= {<Home />} />
      <Route path= 'about' element= {<About />} />
      <Route path= 'contact' element= {<Contact />} />
      <Route path= 'user/:userId' element= {<User />} />
      <Route path= 'github' element= {<Github />} />
    </Route>
  )
) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>,
)
