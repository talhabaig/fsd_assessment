"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Content from "./Content";
import Contact_footer from "./Contact_footer";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      {!submitted ? (
        <div className="flex justify-center items-center min-h-[100vh]">
          <div className="flex gap-5">
            <span className="text-reddishbrown text-[20px] font-semibold leading-7">
              Thank you for connecting with us <br /> Our Team Member Will
              Contact You Soon !
            </span>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-[22px] py-[10px]  text-[16px] font-bold leading-normal text-white bg-oceanBlue border-2 self-stretch"
            >
              Go Back
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-[100vh] min-w-[100%] flex flex-col gap-[25rem]">
          <Hero>
            <Content setSubmitted={setSubmitted} />
          </Hero>
          <Contact_footer />
        </div>
      )}
    </>
  );
}
