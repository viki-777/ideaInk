import { Lightbulb, LightbulbOff } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full bg-cblack flex justify-between md:px-56 px-5 md:py-8 py-5'>
        <Link href="/">
        <div className='flex items-center'>
            
            <Lightbulb className="flex text-primary " size={30} />
        
            <h1 className='flex  md:text-4xl text-3xl font-semibold text-primary'>ideaInk</h1>
        </div>
        </Link>
        <div className='flex items-center'>
            
            <a className='md:text-xl text-lg font-semibold text-primary mx-5'>About</a>
            
            
            <a className='md:text-xl text-lg font-semibold text-primary'>Contact</a>
            
        </div>
        
       
   </div>
  )
}

export default Header