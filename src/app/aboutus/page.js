import React from 'react'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Testimonials from '@/components/common/Testimonials'
import GetInTouch from '@/components/common/GetInTouch'

export default function page() {
  return (
    <React.Fragment>
       <Hero/>
       <OurStory/>
       <Testimonials/>
       <GetInTouch/>
    </React.Fragment>
  )
}
