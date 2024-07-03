import React from "react";
import Hero from "./Hero";
import Content from "./Content";

export default function page() {
  return (
    <div className="min-h-[100vh] min-w-[100%]">
      <Hero />
      <Content />
    </div>
  );
}
