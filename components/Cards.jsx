import React from "react";

function Cards() {
  return (
    <div className="outline outline-1 h-auto w-full flex flex-col items-center justify-center p-5 rounded-sm">
      <div className="w-full h-1/3 flex items-center flex-row justify-start">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/test-account.png"
          alt="test-account"
        />
        <div className="flex top-0 ">
          <p className="text-xl p-2 text">New to Maersk.com?</p>
        </div>
        
      </div>
      <div className="w-full h-1/3 flex items-center p-2 ml-5">Sign up to book, manage and pay your shipments online, and access a suite of products and services designed to simplify your supply chain.</div>
      <div className="w-full h-1/3"><button className="bg-[#00243D] text-white p-2 rounded-sm ml-5">Register Now</button></div>
    </div>
  );
}

export default Cards;
