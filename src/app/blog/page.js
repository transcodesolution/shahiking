import React from 'react'
import Hero from './components/Hero'
import OurBlog from './components/OurBlog'
import FAQ from './components/FAQ'
import GetInTouch from '@/components/common/GetInTouch'

export default function page() {
  return (
   <React.Fragment>
      <Hero/>
      <OurBlog/>
      <FAQ/>
      <GetInTouch/>
    </React.Fragment>
  )
}
