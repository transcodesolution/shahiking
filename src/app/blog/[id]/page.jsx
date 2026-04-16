import BlogContent from '@/components/blogDetail/BlogContent'
import BlogHero from '@/components/blogDetail/BlogHero'
import BlogSection from '@/components/blogDetail/BlogSection'
import { blogContentData, blogDetailData } from '@/data/ui/blog'
import React from 'react'
import GetInTouch from '@/components/common/GetInTouch'
import BlogFaq from '@/components/blogDetail/BlogFaq'

export default function page() {
  return (
    <div>
        <BlogHero/>
        <BlogSection item={blogDetailData[0]}/>
        <BlogContent item={blogContentData}/>
        <BlogFaq/>
        <GetInTouch/>
    </div>
  )
}
