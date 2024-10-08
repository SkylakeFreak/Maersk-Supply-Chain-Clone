import React from "react";

function Menu({tracking,offices,schedules,settracking,setschedules,setoffices}) {
  return (
    <div
      id="changemute"
      className="bg-white md:mt-40 rounded-lg absolute flex flex-col max-w-[400px] min-w-[300px] max-h-[300px] p-5 h-auto w-[32vw]"
    >
      <div id="buttons" className="flex flex-row gap-3 font-sans mt-3">
        <div>
          <button
            onClick={() => {
              settracking(true);
              setschedules(false);
              setoffices(false);
            }}
          >
            Tracking
          </button>
          {tracking && (
            <p
              id="changemute"
              className="bg-black cursor-pointer w-full h-[2px] mt-2"
            ></p>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              settracking(false);
              setschedules(true);
              setoffices(false);
            }}
          >
            Schedules
          </button>
          {schedules && (
            <p id="changemute" className="bg-black w-full h-[2px] mt-2"></p>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              settracking(false);
              setschedules(false);
              setoffices(true);
            }}
          >
            Local offices
          </button>
          {offices && (
            <p id="changemute" className="bg-black w-full h-[2px] mt-2"></p>
          )}
        </div>
      </div>
      {tracking && (
        <div className="h-full m-3 flex p-2 flex-col">
          <div className="flex flex-row mt-2 mb-2 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM4.5 3.757a5.5 5.5 0 1 0 6.857-.114l-.65.65a.707.707 0 0 0-.207.5c0 .39-.317.707-.707.707H8.427a.496.496 0 0 0-.413.771l.25.376a.481.481 0 0 0 .616.163.962.962 0 0 1 1.11.18l.573.573a1 1 0 0 1 .242 1.023l-1.012 3.035a1 1 0 0 1-1.191.654l-.345-.086a1 1 0 0 1-.757-.97v-.305a1 1 0 0 0-.293-.707L6.1 9.1a.849.849 0 0 1 0-1.2c.22-.22.22-.58 0-.8l-.721-.721A3 3 0 0 1 4.5 4.257v-.5Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              type="text"
              className="border-b-[1px] font-sans border-gray-400 text-left hover:border-b-2 outline outline-none"
              placeholder="B/L or Container Number"
            />
          </div>

          <button className="p-2 font-sans w-20 text-white rounded-md mt-4 bg-blue-950">
            Track
          </button>
        </div>
      )}
      {schedules && (
        <div className="p-2">
          <div className="mb-2 mt-2">
            <p className="ml-2">From</p>
            <div className="flex flex-row  p-2 items-center gap-2">
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-[20px] w-[20px] min-h-[20px] min-w-[20px]"
              >
                <path d="M416 256s96-96 96-160c0-53-43-96-96-96s-96 43-96 96c0 29.4 20.2 65.5 42.1 96H320c-53 0-96 43-96 96s43 96 96 96h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H188.6c-6.2 9.6-12.6 18.8-19 27.2-10.7 14.2-21.3 26.9-30 36.8H416c53 0 96-43 96-96s-43-96-96-96h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zM149.9 448c21.9-30.5 42.1-66.6 42.1-96 0-53-43-96-96-96S0 299 0 352c0 64 96 160 96 160s3.5-3.5 9.2-9.6c.4-.4.7-.8 1.1-1.2 3.3-3.5 7.1-7.8 11.4-12.8l.6-.6c9.4-10.8 20.7-24.6 31.6-39.8zM96 384c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
              </svg>
              <input
                type="text"
                className="border-b-[1px] font-sans border-gray-400 text-left hover:border-b-2 outline outline-none"
                placeholder="Origin"
              />
            </div>
          </div>
          <div className="">
            <p className="ml-2">To</p>
            <div className="flex flex-row  p-2 items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[20px] w-[20px] min-h-[20px] min-w-[20px]"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                type="text"
                className="border-b-[1px] font-sans border-gray-400 text-left hover:border-b-2 outline outline-none"
                placeholder="Destination"
              />
            </div>
            <button className="p-2 m-2 font-sans w-20 text-white rounded-md mt-4 bg-blue-950">
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
