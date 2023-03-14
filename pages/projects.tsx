import React from 'react'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Post1 from '@/components/Post1'
const projects = () => {
  return (
    <div>
        <Hero heading = "My Projects"  message='' showArrow={true}/>
       
        <Navbar/>

        <Post1 heading = "buffalo" content = 'Buffalo is the latest project ive been working on. It is a meal planning app built using React Native for the frontend and Firebase for the backend. Check out the code base on my github!' 
       link = "https://github.com/tritan89/buffalo" linkText = "Buffalo on Github"/>
      
       <div className=' grid justify-center h-full'>
       
        <h2 className='text-5xl font-bold py-5 '>Buffalo</h2>
        <p className='  text-xl text max-w-lg py-5'>Buffalo is the latest project ive been working on. It is a meal planning app built using React Native for the frontend and Firebase for the backend. Check out the code base on my github!  </p>
        <Link  href={"https://github.com/tritan89/buffalo"} className='focus:outline-none text-white text-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Buffalo on Github</Link>
       </div>

       <div className=' grid justify-center h-full'>
       <div id="bottom" className=''> </div>
        <h2 className='text-5xl font-bold py-5 '>BattleSnake</h2>
        <p className='  text-xl text max-w-lg py-5'>This project was done during a hackathon by myself and Carson Jennings on March 11, 2023. During this competition we successfully implemented an snake that could navigate to collect food and avoid going head to head with snakes of equal or greater length. You can read the full write up on my github!  </p>
        <Link  href={"https://github.com/tritan89/snakey"} className='focus:outline-none text-white text-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Battlesnake Writeup</Link>
       </div>
       
      

        
        
    </div>
  )
}

export default projects
