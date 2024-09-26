import React from 'react'
import Image from 'next/image'

function Cards1({imagelink,heading,para,redirect}) {
  return (
    <div className='lg:w-1/3 text-center flex h-auto md:min-h-[440px] flex-col outline outline-1'>
        <Image className=' max-h-[230px]' src={imagelink}></Image>
        <div className='flex flex-col gap-2 justify-center h-auto p-5'>
        <p className='text-xl text-left '>{heading}</p>
        <p className='text-left'>{para}</p>
        </div>
        

    </div>
  )
}

export default Cards1