import React from 'react'
import Lanyard from '../Lanyard/Lanyard'
import HeroText from '../HeroText/HeroText'
import Contact from '../../Layout/Footer/footer'

export default function Home() {
  return (
    <div className=''>
      <div>
        
        <Lanyard/>
        <HeroText  />
      </div>
       <footer id="contact"  className="footer">
        <Contact />
      </footer>
    </div>

  )
}
