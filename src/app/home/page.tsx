import Image from "next/image";
import Hero from "./Hero";
import Content from "./Content";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <Content/>
    </div>
  );
}
