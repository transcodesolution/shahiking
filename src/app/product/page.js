import React from 'react'
import Hero from './components/Hero'
import OurProduct from './components/OurProduct'
import GetInTouch from '@/components/common/GetInTouch'

export default function page() {
  return (
    <React.Fragment>
      <Hero />
      <OurProduct/>
      <GetInTouch/>     
    </React.Fragment>
  )
}