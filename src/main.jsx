import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// here, we'll not render <App /> as we have move towards react router, so we'll have to use react-router-dom here i.e. RouterProvider
// RouterProvider ek prop leta hai which is "router" or tbhi kaam krta hai 

// now, we'll make router by two methods
// first, by using createBrowserRouter which will take an array, in which we'll put the list of all the objects we want =>

  // const router = createBrowserRouter([
  //   //object 1=> for main path
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "",
  //         element: <Home />
  //       },
  //       {
  //         path: "about",
  //         element: <About />
  //       },
  //       {
  //         path: "contact",
  //         element: <Contact />
  //       }
  //     ]
  //   }
  // ])

// method 2 for making router, little bit easy than method 1 (we'll use same method, i.e. createBrowserRouter)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path= "contact" element={<Contact />}/>
      <Route path = "user/:userid" element={<User />}/> 
      <Route 
      loader={githubInfoLoader}
      path= "github" 
      element={<Github />}/>
    </Route>
  )
)

// colon ke baad jo userid likha hai, that is called as parameter, and iska access automatically milega mujhe in rendering element( or component), i.e. in User.jsx



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)