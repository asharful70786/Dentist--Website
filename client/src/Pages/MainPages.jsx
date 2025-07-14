
import HeroSection from './HeroSection'
import AboutSection from './About'
import Services from './Services'
import Testimonial from '../components/Testimonial'
import Location from '../components/Location'
import Quick_call from '../components/Quickcall'


function MainPages() {
  return (
  <div className='w-full'>
     <HeroSection/>
   <AboutSection/>
   <Services/>
   <Quick_call/>
   <Testimonial/>
   <Location/>
  
  </div>
  )
}

export default MainPages