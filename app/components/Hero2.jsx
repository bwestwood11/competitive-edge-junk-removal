import React from 'react'
import Image from 'next/image'
import dumpster from '../../public/dumpster.jpg'

const Hero2 = () => {
  return (
    <div className='relative h-screen'>
        <div className='absolute inset-0'>
       <Image 
       
       src={dumpster}
       alt='/'
       priority
       fill/>
  </div>
  <div className='relative z-10 flex flex-col'>
<h1 className='text-8xl'>Junk Removal</h1>
</div>

      </div>
  )
}

export default Hero2