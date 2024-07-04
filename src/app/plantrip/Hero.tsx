import SvgImage from "@/components/SvgImage";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full">
      <SvgImage
        src="/hero_contact_us.png"
        alt="explore malysia"
        className=""
        width="100%"
      />
      <div className="flex justify-center items-center w-full px-4 lg:mt-[-10rem]">
        <div className="p-8 bg-white ">
          <div className="flex flex-col lg:flex-row gap-[33px] ">
            <div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4 ">
                <div className="flex flex-col gap-1">
                  <span className="text-oceanBlue text-[14px] font-semibold leading-5 ">
                    Departure
                  </span>
                  <input
                    className="px-[22px] py-[10px] lg:px-[5px] 2xl:px-[40px] border-2 self-stretch placeholder-custom"
                    type="text"
                    placeholder="Search city"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-oceanBlue text-[14px] font-semibold leading-5 ">
                    Dates
                  </span>
                  <input
                    className="px-[22px] py-[10px] lg:px-[5px] 2xl:px-[40px]  border-2 self-stretch placeholder-custom"
                    type="text"
                    placeholder="Anytime"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-oceanBlue text-[14px] font-semibold leading-5 ">
                    Destination
                  </span>
                  <input
                    className="px-[22px] py-[10px] lg:px-[5px] 2xl:px-[40px] border-2 self-stretch placeholder-custom"
                    type="tel"
                    placeholder="Search city"
                  />
                </div>
              </div>
            </div>
            <button
              className="px-[22px] py-[10px] lg:px-[15px] 2xl:px-[30px] 2xl:text-[18px] lg:py-[0] lg:h-[3rem] lg:mt-[1.4rem] lg:text-[10px] text-[16px] font-bold leading-normal text-white bg-royalblue  border-2 self-stretch"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
