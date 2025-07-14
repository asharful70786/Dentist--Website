import { Button } from "@/components/ui/button"
import {Routes , Route} from 'react-router-dom'
import NavBar from "./components/NavBar"

import "./App.css"
import MainPages from "./Pages/MainPages"
import About from "./components/About"
import Services from "./Pages/Services"
import Contact from "./components/Contact"
import Testimonial from "./components/Testimonial"
import Location from "./components/Location"
import Gallery from "./components/Gallery"
import Appointment from "./components/Appointment"
import Footer from "./components/Footer"
import ScrollToTop from "./Pages/ScrollToTop"
function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center w-full">
      <NavBar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainPages/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/testimonials" element={<Testimonial/>} />
        <Route path="/location" element={<Location/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/appointment" element={<Appointment/>} />
      </Routes>
       <Footer  />
    </div>
  )
}

export default App