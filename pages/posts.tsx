import React from 'react'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
const projects = () => {
  return (
    <div>
        <Hero heading = "My Posts"  message='These are some of the projects i&apos;ve been woking on to expand my skills. 'showArrow={false}/>
        <Navbar/>
        
    </div>
  )
}

export default projects
