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

        <Post1 heading = "Buffalo" content = 'Buffalo is the latest project ive been working on. It is a meal planning app built using React Native for the frontend and Firebase for the backend. Check out the code base on my github!' 
       link = "https://github.com/tritan89/buffalo" linkText = "Buffalo on Github"/>
      
        <Post1 heading = "BattleSnake" content = 'This project was done during a hackathon by myself and Carson Jennings on March 11, 2023. During this competition we successfully implemented an snake that could navigate to collect food and avoid going head to head with snakes of equal or greater length. You can read the full write up on my github!' 
       link = "https://github.com/tritan89/snakey" linkText = "Battlesnake Writeup"/>

       
       
      

        
        
    </div>
  )
}

export default projects
