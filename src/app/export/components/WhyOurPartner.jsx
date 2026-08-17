import Image from 'next/image'
import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { BsBoxSeam } from 'react-icons/bs'
import { MdOutlineEditNote, MdOutlineFactory, MdOutlineSupportAgent, MdOutlineVerified } from 'react-icons/md'

export default function WhyOurPartner() {
  return (
    <div className='py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
         <div>
            <h1 className='text-primary display-heading font-semibold text-center'>Why Partner With Shahiking Foods?</h1>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-6 xl:gap-8 pt-5 mt-5'>
            <div className='border border-black p-4 rounded-2xl flex flex-col gap-2 items-center transition-all duration-300 group hover:bg-secondary hover:border-primary hover:shadow-lg cursor-pointer'>
                <div className='w-15 h-15 rounded-full bg-[#012D1D0D] border border-black flex justify-center items-center group-hover:border-primary group-hover:text-primary'>
                    <MdOutlineVerified className='w-6 h-6'/>
                </div>
                <h6 className='text-[18px] font-semibold text-center'>Premium Quality Products</h6>
                <p className='body-sm text-[#414844] text-center'>Every product is carefully sourced, processed, and packed to preserve freshness, nutrition, and exceptional taste.</p>
            </div>

            <div className='border border-black p-4 rounded-2xl flex flex-col gap-2 items-center transition-all duration-300 group hover:bg-secondary hover:border-primary hover:shadow-lg cursor-pointer'>
                <div className='w-15 h-15 rounded-full bg-[#012D1D0D] border border-black flex justify-center items-center group-hover:border-primary group-hover:text-primary'>
                    <BsBoxSeam className='w-6 h-6'/>
                </div>
                <h6 className='text-[18px] font-semibold text-center'>Export Ready Packaging</h6>
                <p className='body-sm text-[#414844] text-center'>Our packaging solutions ensure longer shelf life and safe transportation for global shipments.</p>
            </div>

            <div className='border border-black p-4 rounded-2xl flex flex-col gap-2 items-center transition-all duration-300 group hover:bg-secondary hover:border-primary hover:shadow-lg cursor-pointer'>
                <div className='w-15 h-15 rounded-full bg-[#012D1D0D] border border-black flex justify-center items-center group-hover:border-primary group-hover:text-primary'>
                    <MdOutlineFactory className='w-6 h-6'/>
                </div>
                <h6 className='text-[18px] font-semibold text-center'>Consistent <span className='block'>Supply</span> </h6>
                <p className='body-sm text-[#414844] text-center'>Efficient production and supply chain management for reliable deliveries throughout the year.</p>
            </div>

            <div className='border border-black p-4 rounded-2xl flex flex-col gap-2 items-center transition-all duration-300 group hover:bg-secondary hover:border-primary hover:shadow-lg cursor-pointer'>
                <div className='w-15 h-15 rounded-full bg-[#012D1D0D] border border-black flex justify-center items-center group-hover:border-primary group-hover:text-primary'>
                    <MdOutlineEditNote className='w-6 h-6'/>
                </div>
                <h6 className='text-[18px] font-semibold text-center'>Private Label Manufacturing</h6>
                <p className='body-sm text-[#414844] text-center'>Build your own healthy food brand with customized packaging, branding, and labeling solutions.</p>
            </div>

            <div className='border border-black p-4 rounded-2xl flex flex-col gap-2 items-center transition-all duration-300 group hover:bg-secondary hover:border-primary hover:shadow-lg cursor-pointer'>
                <div className='w-15 h-15 rounded-full bg-[#012D1D0D] border border-black flex justify-center items-center group-hover:border-primary group-hover:text-primary'>
                    <BiWorld className='w-6 h-6'/>
                </div>
                <h6 className='text-[18px] font-semibold text-center'>International Quality Standards</h6>
                <p className='body-sm text-[#414844] text-center'>We maintain strict hygiene, quality control, and food safety practices throughout production.</p>
            </div>

            <div className='border border-black p-4 rounded-2xl flex flex-col gap-2 items-center transition-all duration-300 group hover:bg-secondary hover:border-primary hover:shadow-lg cursor-pointer'>
                <div className='w-15 h-15 rounded-full bg-[#012D1D0D] border border-black flex justify-center items-center group-hover:border-primary group-hover:text-primary'>
                    <MdOutlineSupportAgent className='w-6 h-6'/>
                </div>
                <h6 className='text-[18px] font-semibold text-center'>Dedicated Export Support</h6>
                <p className='body-sm text-[#414844] text-center'>Our experienced export team assists you from inquiry to final delivery, ensuring a smooth buying experience.</p>
            </div>
         </div>
        </div>
    </div>
  )
}
