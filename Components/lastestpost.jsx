import Image from 'next/image'
import React from 'react'

const Lastestpost = () => {
  return (
    <div className='bg-white w-full'>
        <h1 className='text-[#86775c] flex  justify-center items-center py-10 text-3xl font-semibold'>Prepare Your Child for a World of Opportunities with Educare</h1>
        <div className='max-w-[1030px] mx-auto'>
      <Image src='/images/Component 86.jpg' alt='latest post' width={0} height={0} sizes="1000vw" className="w-full h-[500px] object-contain" />
        </div>
        <div className='bg-[#FFF3E1] text-[#8A1538] flex p-3 justify-center text-lg'>
        <span>Education is the foundation of greatness; let’s build it together</span>
        
        <Image src='/images/contentimage.jpg' alt='contentimage' width={20} height={20} className='bg-[#FFF3E1]'/>
        <span>Learning today, leading tomorrow – the Educare way</span>
        <Image src='/images/contentimage.jpg' alt='contentimage' width={20} height={20}/>
        <span>Turning dreams into achievements through dedicated guidance</span>
        </div>
    </div>
  )
}

export default Lastestpost
