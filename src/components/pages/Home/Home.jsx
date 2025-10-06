import React from 'react'
import Lanyard from '../Lanyard/Lanyard'
import HeroText from '../HeroText/HeroText'

export default function Home() {
  return (
    <div className='bg-black'>
        <Lanyard/>
        <HeroText className='mt-[10rem]' />
    </div>

  )
}
