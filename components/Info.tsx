import React from 'react'

const Info = () => {
  return (
    <div className='max-sm:my-16 sm:my-28'>
      
      <div className='w-[90%] sm:w-[60%] text-center flex justify-center items-center mx-auto'>
    <p className='text-4xl sm:text-7xl font-bold'>Comprehensive suite of solutions to maximise your <span className='text-green-300'>farm&apos;s potential.</span></p>

</div>
<div className='w-[95%] sm:w-[40%] text-center flex justify-center items-center mx-auto my-5' >
<p>Explore how our services are not just about the present, but about creating a legacy of resilient farms that contributr to ecological balance</p>
</div>
<div className='w-[90%] sm:w-[60%] text-center flex justify-center items-center mx-auto space-x-4 my-5'>
  <div className='bg-zinc-800 rounded-lg px-4 py-2 text-yellow-400'>
    <p>Explore our providers</p>
  </div>
  <div className='hidden sm:inline-flex bg-yellow-400 rounded-lg px-4 py-2'>
    <p>Need help?</p>
  </div>

</div>

      

    </div>
  )
}

export default Info