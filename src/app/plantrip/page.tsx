import React from "react";
import Hero from "./Hero";
import Content from "./Content";

export default function page() {
  return (
    <div className="w-full">
      <Hero />
        <Content />
    </div>
  );
}
