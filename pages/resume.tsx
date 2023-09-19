import React from 'react'

import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const resume = () => {
  return (
    <div>
        
   
    <Hero heading = "My Resume"  message='' showArrow={true}/>
    <div id="bottom" className=''> </div>
    {/* <div className='grid h-screen place-items-center' ><Image src='/resumejan2023-1.png' alt='my resume' width={600} height={900}/></div> */}
    <iframe src='/Resume_improving.pdf' className='w-full h-screen' />
    <Navbar/>
    
    
</div>
  )
}

export default resume
