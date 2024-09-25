import React from "react";

function Cards({link,text1,text2,buttontext}) {
  return (
    <div className="outline outline-1 h-auto w-full flex flex-col items-center justify-center p-5 sm:min-h-[150px] lg:min-h-[350px] xl:min-h-[220px] rounded-sm">
      <div className="w-full h-1/3 flex items-center flex-row justify-start">
        <img
          width="50"
          height="50"
          src={link}
          alt="test-account"
        />
        <div className="flex top-0 ">
          <p className="text-xl p-2 text">{text1}</p>
        </div>
        
      </div>
      <div className="w-full h-1/3 flex items-center p-2 ml-5">{text2}</div>
      <div className="w-full h-1/3"><button className="bg-[#00243D] text-white p-2 rounded-sm ml-5">{buttontext}</button></div>
    </div>
  );
}

export default Cards;
