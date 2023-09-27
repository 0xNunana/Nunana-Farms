import React from 'react'
import { headnav } from '@/Util/headnav'

const Header = () => {
  return (
    <div className='bg-white sticky top-5  rounded-md px-5 py-2 z-30 flex justify-between items-center mx-4'>
<div>Name</div>
<div className='hidden md:inline-flex space-x-3'>

    {headnav.map((head,index)=>
<div className='bg-gray-300/50 p-2 rounded-md' key={index}>
    <p>{head.name}</p>
</div>
    )}


</div>
<div className='hidden md:inline-flex bg-green-300 p-2 rounded-md'>info@nunanafarms.com</div>
<div className='md:hidden'>
  menu
</div>
    </div>
  )
}

export default Header