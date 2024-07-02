import React from 'react'
import Hero from './Hero'
import Content from './Content'
import Contact_footer from './Contact_footer'


export default function page() {
  return (
    <div className='min-h-[100vh] min-w-[100%] flex flex-col gap-[25rem]'>
      <Hero><Content/></Hero>
      <Contact_footer/>
    </div>
  )
}
