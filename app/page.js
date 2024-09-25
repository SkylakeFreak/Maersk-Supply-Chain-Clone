"use client"
import Image from "next/image";
import Cardspage from "@/components/Cardspage";
import { useState } from "react";
import Main from "../components/Main"
import Second from "@/components/Second";

export default function Home() {
  const [scrollpos,setscrollpos]=useState(true);
  return (
    <main onScrolltop className="h-screen">
      <Main scrollpos={scrollpos}/>
      <Second/>
      <Cardspage/>

    </main>
  );
}
