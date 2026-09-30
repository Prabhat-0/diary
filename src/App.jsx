import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import { Route,Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"

function App() {
  
  return (
    <div className="m-0 p-0 box-border">
      <Navbar/>
        <Routes >
          <Route path="/" element={<HomePage/>}/>
          <Route path="/contactUs" element={<ContactPage/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/testimonials" element={<Testimonials/>}/>

        </Routes>
      <Footer/>
    </div>
  )
}

export default App
