"use client";
import React, { useState, useRef } from "react";
import Menu from "../components/Menu"

function Test() {
  const [check, setcheck] = useState(true);
  const [tracking, settracking] = useState(true);
  const [schedules, setschedules] = useState(false);
  const [offices, setoffices] = useState(false);
  const [menuslider, setmenuslider] = useState(false);
  const [close, setclose] = useState(false);
  return (
    <div className="flex w-full md:mb-0 mb-10">
      <div className="flex flex-col w-full">
        {close && (
          <div
            id="togglemenu"
            className={`bg-black fixed text-white h-full w-[80vw] right-0 z-20 opacity-90 ${
              menuslider ? "animate-slideIn" : "animate-slideOut"
            }`}
          >
            <div className="p-3">
              <button
                onClick={() => {
                  setmenuslider(false);
                  setTimeout(() => {
                    setclose(false);
                  }, 700);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-9"
                >
                  <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col mt-4 p-5">
          <div id="logo" className="flex flex-row h-10 w-full">
            <img className="h-10 w-60" src="/videos/logo.png" alt="" />
            <div className="flex w-full ml-10 mr-10">
              <div
                id="logo"
                className="hidden xl:flex justify-start gap-10 w-full"
              >
                <p>Price</p>
                <p>Book</p>
                <p>Tracking</p>
                <p>Schedules</p>
                <p className="text-nowrap">Logistic Solutions</p>
                <div className="flex justify-end gap-10 w-full">
                  <p>Price</p>
                  <p>Book</p>
                  <p>Tracking</p>
                  <p>Schedules</p>
                </div>
              </div>
            </div>

            {!menuslider && (
              <div id="logo" className="flex xl:hidden mb-5">
                <button
                  onClick={() => {
                    setmenuslider(true);
                    setclose(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-7"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm6 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        <div id="mainbox" className="flex mt-5 flex-row w-full relative">
          <img className="object-cover z-0" src="videos/bg.jpg" alt="" />
          <div className="absolute flex justify-center items-center h-full w-full">
            <div className="h-full w-full flex flex-col text-left bg-black bg-opacity-40 p-5">
              <p className="text-white mt-10 font-sans text-4xl">
                See How Truly Integrated Logistics Delivers
              </p>
              <p className="text-white mt-5">
                With truly integrated logistics theres always a new way to keep
                your goods moving and your business growing.
              </p>
            </div>
            <div className="h-full md:flex w-full relative hidden justify-center">
              <Menu tracking={tracking} schedules={schedules} offices={offices} settracking={settracking} setschedules={setschedules} setoffices={setoffices}/>

              
            </div>
          </div>
        </div>
        <div
          id="changemute"
          className="bg-white md:hidden ml-10 mr-10 h-[300px] items-center justify-center flex mb-10 -mt-40 relative rounded-lg shadow-2xl"
        >
          <Menu tracking={tracking} schedules={schedules} offices={offices} settracking={settracking} setschedules={setschedules} setoffices={setoffices}/>
        </div>
      </div>
    </div>
  );
}

export default Test;
