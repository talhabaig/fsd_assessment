"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Hero() {
  const pathname = usePathname();
  return (
    <div className="w-full">
      <div className="relative">
        <img
          src="/hero-images/home-hero.png"
          alt=""
          className="w-full h-full cover"
        />
        <div className="bg-softBeige flex justify-center items-center shrink-0 px-2 sm:px-4 lg:px-[20px] py-2 sm:pt-3 sm:pb-7 md:pb-12 lg:pt-[19.394px] lg:pb-[74.606px] 3xl:pt-[22px] 3xl:pb-[80px] gap-1 sm:gap-3 lg:gap-[20px] absolute bottom-[3px] sm:bottom-[10px] lg:bottom-[20px] left-[12%] xs:left-[21%] sm:left-[23%] md:left-[26%] lg:left-[27%] xl:left-[32%] 3xl:left-[33%]">
          <Link href="/plantrip" className={` ${pathname === "/plantrip"}`}>
            <button className="text-white py-3 px-3 sm:px-4 lg:py-[20px] lg:px-[25px] 3xl:py-[25] 3xl:px-[32px] flex items-center justify-center gap-[10px] bg-oceanBlue transition-none text-xs sm:text-sm md:text-[18px] lg:text-[20px] 3xl:text-[22px]">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span className="text-white font-lato font-bold uppercase leading-normal">
                Plan your trip
              </span>
            </button>
          </Link>
          <Link href="/tracktrip" className={` ${pathname === "/tracktrip"}`}>
            <button className="flex justify-center items-center gap-[10px] py-[10px] px-3 sm:px-4 md:py-[13px] lg:py-[21px] lg:px-[25px] border-2 border-darygray text-darygray hover:bg-oceanBlue hover:text-white transition-none 3xl:py-[25px] 3xl:px-[32px]">
              <span className="font-lato text-xs sm:text-sm md:text-[18px] lg:text-[20px] 3xl:text-[22px] font-bold leading-normal uppercase">
                Track trip
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
