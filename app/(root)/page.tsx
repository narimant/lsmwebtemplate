import LatestCourses from '@/components/template/root/LatestCourses'
import MainArticle from '@/components/template/root/MainArticle'
import MainCategorySection from '@/components/template/root/MainCategorySection'
import MainPageComment from '@/components/template/root/MainPageComment'
import MainPageTemplate from '@/components/template/root/MainPageTemplate'
import React from 'react'



export default function Home() {
  return (
    <main className="mt-16">
     <MainPageTemplate />
     <MainCategorySection />
     <LatestCourses />
     <MainPageComment />
     <MainArticle />
    </main>
  )
}
