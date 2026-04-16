import Image from 'next/image'
import React from 'react'
import ContactForm from './ContactForm'
import ContactInformation from './ContactInformation'

export default function Hero() {
  return (
    <div className='py-12 relative z-0'>
        <Image 
        src="/Image/blogpage/blog_detail_content.webp" 
        alt="Hero Background" 
        width={1920}
        height={1663}
        className="w-full h-full object-cover absolute inset-0 z-10 overflow-hidden opacity-15"
        />
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
            <h1 className='text-[64px] font-semibold text-primary font-heading'>Contact Us</h1>
            <p className='body-md text-black max-w-175 mx-auto'>Have questions about our healthy and vegan products? Want to partner with us? Reach out and our team will get back to you as soon as possible.</p>
        </div>
        <div>
            <ContactForm/>
            <ContactInformation/>
        </div>
      </div>
    </div>
  )
}
