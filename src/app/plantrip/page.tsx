import React from "react";
import Hero from "./Hero";
import Content from "./Content";

export default function page() {
  return (
    <div className="w-full">
      <Hero />
      <div className="xs:mt-[2rem] md:mt-[7rem] flex items-center justify-center">
        <Content />
      </div>
    </div>
  );
}
