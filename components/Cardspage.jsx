import React from 'react'
import Cards from './Cards'

function Cardspage() {
  return (
    <div className='h-auto flex flex-col p-10 md:p-20 ml-10 mr-10 lg:p-30 gap-10 lg:flex-row items-center justify-evenly'>
        <Cards link={"https://img.icons8.com/ios/50/test-account.png"} text1={"New to Maersk.com?"} text2={"Sign up to book, manage and pay your shipments online, and access a suite of products and services designed to simplify your supply chain."} buttontext={"Register Now"}/>
        <Cards link={"https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/1A1A1A/external-lifeguard-web-security-flatart-icons-outline-flatarticons.png"} text1={"How to get started"} text2={"Whether you need to find prices, place a booking, submit documents, or track your cargo, our step-by-step guides will help you find your way around."} buttontext={"Learn More"}/>
        <Cards link={"https://img.icons8.com/ios/50/1A1A1A/guarantee--v1.png"} text1={"Become a logistics expert"} text2={"Discover insights, introductory videos, explanatory articles and gain the confidence you need to optimise your supply chain."} buttontext={"Learn More"}/>
    </div>
  )
}

export default Cardspage