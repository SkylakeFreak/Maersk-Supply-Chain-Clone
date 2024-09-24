import React from 'react'
import Image from 'next/image'
import img1 from "../public/videos/maersksmall.png"

function Second() {
  return (
    <div className='md:h-[400px] h-[500px] flex items-center justify-center w-full'>
        <div className='flex h-full w-full md:flex-row flex-col-reverse items-center justify-center' >
            <div className=' h-full w-full flex items-left gap-5 justify-center flex-col'>
                <p className='text-2xl font-bold font-sans'>The Network Of The Future</p>
                <div className='gap-2 flex flex-col'>
                <p>Learn more about the Network of the Future, an innovative network powered by leaner loops with fewer port calls per service, an extensive shuttle network, and industry-leading hubs.</p>
                <p>With the new East West network, our ambition is to deliver a flexible and well-connected ocean network that aims to provide unmatched and industry-leading reliability above 90 percent (as measured by SeaIntel) when the new network is fully phased in.</p>
                </div>
                
            </div>
            <div className='h-full w-full flex items-center justify-center'>
                <Image src={img1} className='ml-2 mr-2' alt='temp'></Image>

            </div>
        </div>
    </div>
  )
}

export default Second