import Image from 'next/image'
import React from 'react'
import FaqAccordion from './FaqAccordion'

export default function FAQ() {
  return (
    <div className='bg-secondary h-full relative z-0 py-10'>
       <Image 
        src="/Image/blogpage/faq_bg.webp" 
        alt="Faq background" 
        width={1920}
        height={802}
        className="h-200 w-full object-cover absolute inset-0 z-10 overflow-hidden"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className='relative z-10'>
                <h1 className='display-heading text-primary font-semibold text-center py-2'>Frequently Asked Questions</h1>
                <p className='body-md text-black text-center mt-2'>Find answers to common questions about our products and brand</p>
            </div>
            <div className='relative z-10'>
                <FaqAccordion/>
            </div>
        </div>
    </div>
  )
}
