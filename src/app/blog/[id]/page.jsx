import BlogContent from '@/components/blogDetail/BlogContent'
import BlogHero from '@/components/blogDetail/BlogHero'
import BlogSection from '@/components/blogDetail/BlogSection'
import { blogContentData, blogDetailData, blogMetadata } from '@/data/ui/blog'
import React from 'react'
import GetInTouch from '@/components/common/GetInTouch'
import BlogFaq from '@/components/blogDetail/BlogFaq'

export async function generateMetadata({
  params,
}) {

  const blog = blogMetadata.find(
    (item) => item.id === params.id
  );

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.metaTitle,

    description: blog.metaDescription,

    alternates: {
      canonical:
        `https://shahiking.in/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.metaTitle,

      description: blog.metaDescription,

      url:
        `https://shahiking.in/blog/${blog.slug}`,

      type: "article",

      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: blog.metaTitle,

      description: blog.metaDescription,

      images: [blog.image],
    },
  };
}


export default function page({params}) {

  const blog = blogMetadata.find(
    (item) => item.id === params.id
  );

  if (!blog) {
    return <div>Blog Not Found</div>;
  }
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
