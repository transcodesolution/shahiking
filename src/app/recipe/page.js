import React from 'react'
import RecipeDetails from './components/RecipeDetails'
import Testimonials from '@/components/common/Testimonials'
import Recipes from '../(home)/components/Recipes'
import RelatedProducts from '@/components/product/RelatedProducts'
import GetInTouch from '@/components/common/GetInTouch'

export default function page() {
  return (
    <React.Fragment>
       <RecipeDetails/> 
       <Testimonials bg='bg-white'/>
       <Recipes/>
       <RelatedProducts/>
       <GetInTouch/>
    </React.Fragment>
  )
}
