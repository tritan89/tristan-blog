import React from 'react'

import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const resume = () => {
  return (
    <div>
        
   
    <Hero heading = "My Resume"  message=''/>
    
    <div className='grid h-screen place-items-center' ><Image src='/resumejan2023-1.png' alt='my resume' width={600} height={900}/></div>
    
    <Navbar/>
    
    
</div>
  )
}

export default resume
