"use client"
import Image from "next/image";
import Logisticssolution from "@/components/Logisticssolution";
import Cards1page from "@/components/Cards1page";
import Cardspage from "@/components/Cardspage";
import { useState } from "react";
import Main from "../components/Main"
import Second from "@/components/Second";
import Sliderpage from "@/components/Sliderpage";

export default function Home() {
  const [scrollpos,setscrollpos]=useState(true);
  return (
    <main onScrolltop className="h-screen">
      <Main scrollpos={scrollpos}/>
      <Second/>
      <Cardspage/>
      <Logisticssolution/>
      <Cards1page/>
      <Sliderpage/>

    </main>
  );
}
