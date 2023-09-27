import React from 'react'
import { carddata } from '@/Util/carddata'
import Image from 'next/image'

const ServiceSection = () => {
  return (
    <div className='grid sm:grid-cols-3 gap-2 mx-auto w-[95%] max-sm:mb-5 sm:mb-20'>
      {carddata.map((card,index)=>(
        <div key={index} className='hidden sm:flex justify-center relative '>
          <div className='inline-flex relative'> 
          <Image src={card.imageurl} height={500} width={500} alt='nav' className='rounded-2xl max-sm:h-30 max-sm:w-30 '/>
           <div className='absolute rounded-2xl inset-0 bg-black opacity-20'/>
          </div>


          {/* <div className='relative sm:hidden'> 
          <Image src={card.imageurl} height={400} width={400} alt='nav' className='rounded-lg '/>
           <div className='absolute inset-0 bg-black opacity-20'/>
          </div>
           */}
<div className='absolute left-12 bottom-2  '>
  <p className='text-white font-bold'>{card.title}</p>
</div>
        </div>
      ))}

      {/* mobile */}

      {carddata.map((card,index)=>(
        <div key={index} className='flex bg-red-300 justify-center h-[150px]  relative sm:hidden'>
          <div className='inline-flex relative w-full'> 
          <Image src={card.imageurl} height={250} width={250} alt='nav' className='rounded-lg w-full object-cover'/>
           <div className='absolute inset-0 bg-black opacity-20'/>
          </div>


          {/* <div className='relative sm:hidden'> 
          <Image src={card.imageurl} height={400} width={400} alt='nav' className='rounded-lg '/>
           <div className='absolute inset-0 bg-black opacity-20'/>
          </div>
           */}
<div className='absolute left-12 bottom-2  '>
  <p className='text-white font-bold'>{card.title}</p>
</div>
        </div>
      ))}

     
    </div>
  )
}

export default ServiceSection