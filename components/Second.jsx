import React from "react";
import Image from "next/image";
import img1 from "../public/videos/maersksmall.png";

function Second() {
  return (
    <div className="h-auto -mt-10 md:mt-0">
      <div className="flex flex-col-reverse lg:flex-row p-2 md:p-10 xl:ml-20 lg:gap-10 xl:gap-20 xl:mr-20">
        <div className="flex-1 flex items-center justify-left md:justify-center p-2 md:mr-2 xl:mr-10">
          <div className="p-5 md:p-0">
            <h1 className="font-sans text-3xl md:text-4xl mb-4">
              The Network of the Future
            </h1>
            <div className="gap-4 flex flex-col max-w-[600px]">
              <p>
                Learn more about the Network of the Future, an innovative
                network powered by leaner loops with fewer port calls per
                service, an extensive shuttle network and industry-leading
                hubs.
              </p>
              <p>
                With the new East West network, our ambition is to deliver a
                flexible and well-connected ocean network that aims to provide
                unmatched and industry-leading reliability above 90 percent as
                measured by SeaIntel when the new network is fully phased in.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 justify-end mt-5 w-full ">
              <button className=" w-full bg-[#00243D] h-10 text-white rounded-sm">
                Learn More
              </button>
              <button className="w-full bg-[#F7F7F7] h-10 outline outline-1 rounded-sm">
                Press Release
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 items-center flex justify-end md:justify-center p-2">
          <Image
            className=" md:max-w-[550px] lg:max-w-[450px] xl:max-w-[450px] mb-4 md:mb-0"
            src={img1}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Second;
