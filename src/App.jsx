import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import RootLayout from "./components/RootLayout"
import Featurespagee from "./pages/Featurespagee"
import ReadStudies from "./pages/ReadStudies"
import FAQ from "./pages/FAQ"
import ContactUsPage from "./pages/ContactUsPage"
import Blogpage from "./pages/Blogpage"
import PortfolioPage from "./pages/PortfolioPage"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
       <Route path="/" element={<Home/>}></Route>
       <Route path ="/about" element={<About/>}></Route>
       <Route path ="/pricing" element={<Pricing/>}></Route>
       <Route path ="/features" element ={<Featurespagee/>}></Route>
       <Route path ="/portfolio" element = {<PortfolioPage/>}></Route>
       <Route path ="/readstudies" element = {<ReadStudies/>}></Route>
       <Route path ="/contact" element = {<ContactUsPage/>}></Route>
       <Route path ="/faq" element = {<FAQ/>}></Route>
       <Route path ="/blog" element = {<Blogpage/>}></Route>
  </Route>

))
function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
