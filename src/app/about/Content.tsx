"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ExploreMalysia from "../home/ExploreMalysia";
import ExperienceSpeaks from "../home/ExperienceSpeaks";
import axios from "axios";

interface IApiResponse {
  visionAndMission: {
    text: string;
    mission: string;
    vision: string;
  };
  halalTravelExperience: {
    text: string;
    title: string;
  };
}
export default function Content() {
  const pathname = usePathname();
  const [data, setData] = useState<IApiResponse | null>(null);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}about-us`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <div className="pb-24 px-8">
      <div className="p-8 bg-white max-w-[1062px] xs:h-[610px] md:h-[430px] m-auto md:mt-[-3rem] xs:mt-0 z-1 relative">
        <div className="flex justify-center items-center mb-16">
          <img src="/Vision&mission.png" alt="vision&mission" />
        </div>
        <div className="text-desertsand flex justify-center items-center flex-col ">
          <span>{data?.visionAndMission?.mission}</span>
        </div>
        <br />
        <br />
        <div className="text-desertsand flex justify-center items-center flex-col ">
          <span> {data?.visionAndMission?.vision} </span>
        </div>
      </div>

      <div className="sm:px-12 lg:px-28 pb-16 sm:pb-28 pt-12 ">
        <div className="3xl:container 3xl:max-w-[1500px] 3xl:mx-auto flex-col gap-2 lg:gap-0 lg:flex-row flex items-end justify-between">
          <div className="basis-[47.7%] flex flex-col gap-[38px] items-start">
            <div className="flex flex-col gap-[19px] items-start">
              <div className="text-charcoalblack font-playfair-display text-[24px] lg:text-[48px] font-bold lg:leading-[62px] leading-[36px] capitalize">
                {data?.halalTravelExperience?.title}
              </div>
              <p className="text-charcoalblack font-lato text-[18px] font-normal leading-[28px]">
                {data?.halalTravelExperience?.text}
              </p>
            </div>

            <Link href="/plantrip" className={` ${pathname === "/plantrip"}`}>
              <button className="text-white flex items-center justify-center gap-[10px] py-3 px-[22px] bg-khaki transition-none">
                <span className="font-lato text-[20px] font-bold leading-normal">
                  Plan your trip
                </span>
              </button>
            </Link>
          </div>
          <div className=" basis-[42.5%] sm:flex sm:justify-center sm:items-center sm:w-full">
            <img src="/Unitedstate.png" alt="state" />
          </div>
        </div>
      </div>
      <ExploreMalysia />
      <ExperienceSpeaks />
    </div>
  );
}
