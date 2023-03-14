import React from 'react';
import Link from 'next/link';




type Props = {
  heading: string;
  content: string;
  link: string;
  linkText : string
}

const Post1 : React.FC<Props> = ({heading,content, link, linkText}) => {
    return(     <div className=' grid justify-center h-full'>
       
    <h2 className='text-5xl font-bold py-5 '>{heading}</h2>
    <p className='  text-xl text max-w-lg py-5'>{content}  </p>
    <Link  href={link} 
    className='focus:outline-none text-white text-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>
        {linkText}</Link>
   </div>

)
}

export default Post1
