import React from 'react';
import Link from 'next/link';




type Props = {
  heading: string;
  message: string;
  showArrow: boolean;
}

const Hero : React.FC<Props> = ({heading, message, showArrow}) => {
  
  var curStyle = "invisible"
  var notResume = "p-5 text-white z-[2] mb-12 mt-[-10rem]"
   
  if (showArrow) {
    curStyle = "w-0 h-0 border-l-[50px] border-l-transparent border-t-[75px] border-t-white border-r-[50px] border-r-transparent"
    notResume = "p-5 text-white z-[2] mb-12 mt-[-10rem] space-y-10 space-x-20"
  }

  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] ' />
      <div className={notResume}>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl max-w-md'>{message}</p>
      
          
    <Link href="#bottom"
    className={curStyle} ></Link>
     
</div>
      
    </div>
    
  );
};


export default Hero;