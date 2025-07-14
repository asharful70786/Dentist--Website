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
import Cosmetic from "./components/Cosmetic"
import Implants from "./components/Implants"
import Orthodontics from "./components/Orthodontics"
import Pediatric from "./components/Pediatric"
import Root_canal from "./components/Root-canal"
import Laser from "./components/Laser"
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

        {/* services nested Routes */}
        <Route path="cosmetic" element={<Cosmetic/>} />
         <Route path="implants" element={<Implants/>} />
          <Route path="orthodontics" element={<Orthodontics/>} />
           <Route path="pediatric" element={<Pediatric/>} />
            <Route path="root-canal" element={<Root_canal/>} />
             <Route path="laser" element={<Laser/>} />
            
        
      </Routes>
       <Footer  />
    </div>
  )
}

export default App