import React from 'react'
import Cards from './Cards'

function Cardspage() {
  return (
    <div className='h-auto flex flex-col p-10 md:p-20 ml-10 mr-10 lg:p-30 gap-10 lg:flex-row items-center justify-evenly'>
        <Cards/>
        <Cards/>
        <Cards/>
    </div>
  )
}

export default Cardspage