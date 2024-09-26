import React from 'react'

function Slider({link}) {
  return (
    <div className='h-60 p-10 m-2 min-w-[300px] hover:outline flex items-center justify-center outline-1'>
      <img className='h-60' src={link} alt="" />
    </div>
  )
}

export default Slider