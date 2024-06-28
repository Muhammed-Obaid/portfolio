import './App.scss'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AboutPage from './pages/aboutPage/AboutPage'
import ContactPage from './pages/contactPage/ContactPage'
import ProjectPage from './pages/projectPage/ProjectPage'

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </>
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
      {/* <div className=''>
        <Home />
      </div> */}
      {/* <div className="scroll">
      <Footer/>
     </div> */}
    </>
  )
}

export default App
