import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <> 
    <div className='flex justify-between text-white bg-black px-4 items-center'>
    <div>
      <Link href={"/"}><img className='h-16 sepia hue-rotate-90 saturate-200' src='items/logo.png'/></Link>
    </div>
    <div>
    <ul className='flex gap-3'>
        <li className=' hover:text-yellow-300 text-green-300 cursor-pointer'><Link href={"/"}>Home</Link></li>
        <li className=' hover:text-yellow-300 text-green-300 cursor-pointer'><Link href={"/about"}>About Me</Link></li>
        <li className=' hover:text-yellow-300 text-green-300 cursor-pointer'><Link href={"/achivements"}>Achivements</Link></li>
    </ul>
    </div>
    </div>
    </>

  )
}

export default Navbar
