import { div } from "framer-motion/client"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"


function App() {
  
  return (
    <div className="m-0 p-0 box-border">
      <Navbar/>
      <Hero/>
      <Services/>
      <Testimonials/>
    </div>
  )
}

export default App
