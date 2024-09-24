import Image from "next/image";
import Main from "../components/Main"
import Second from "@/components/Second";

export default function Home() {
  return (
    <main className="h-screen bg-[#FFFFFF]">
      <Main/>
      <Second/>

    </main>
  );
}
