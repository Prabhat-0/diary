import { div } from "framer-motion/client"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Contact from "./components/ContactUs"
import Footer from "./components/Footer"
import MainRoute from "./routes/MainRoute"
import { Route,Routes } from "react-router-dom"

function App() {
  
  return (
    <div className="m-0 p-0 box-border">
      <Navbar/>
        <Routes >
          <Route path="/" element={<MainRoute/>}/>
            
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/testimonials" element={<Testimonials/>}/>

        </Routes>
      <Footer/>
    </div>
  )
}

export default App
