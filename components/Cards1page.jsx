import React from 'react'
import Cards1 from './Cards1'
import img1 from "../public/videos/se0.jpg"
import img2 from "../public/videos/se1.png"
import img3 from "../public/videos/se3.png"

function Cards1page() {
  return (
    <div className='flex items-center p-10 md:p-20 ml-10 mr-10 lg:p-30 gap-10 flex-col lg:flex-row justify-center h-auto'>
        <Cards1 imagelink={img1} heading={"Transportation Services"} para={"Learn how Maersk Offers small and large businesses the oppourtunity to Grow"}/>
        <Cards1 imagelink={img2} heading={"Supply chain and Logistics"} para={"We focus on solving your supply chain needs from end to end, taking the complexity out of container shipping for you"}/>
        <Cards1 imagelink={img3} heading={"Digital Solutions"} para={"Our tailored online services take the complexity out of shipping by letting you instantly book, manage and track shipments, submit Verified Gross Mass information and much more."}/>

    </div>
  )
}

export default Cards1page