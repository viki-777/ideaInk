import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full bg-cblack flex justify-center'>
    Header
        <Link href='/'> 
            <h1 className='uppercase text-5xl font-bold'>Home</h1>    
        </Link>
    </div>
  )
}

export default Header