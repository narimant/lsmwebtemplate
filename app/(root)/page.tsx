import MainCategorySection from '@/components/template/root/MainCategorySection'
import MainPageTemplate from '@/components/template/root/MainPageTemplate'
import React from 'react'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <MainPageTemplate />
     <MainCategorySection />
    </main>
  )
}
