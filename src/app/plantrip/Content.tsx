"use client"
import SvgImage from "@/components/SvgImage";
import React from "react";
import ExperienceSpeaks from "../home/ExperienceSpeaks";
import Link from "next/link";
import { usePathname } from "next/navigation";
const destinations = [
  {
    id: 1,
    src: "/explore-USA.png",
    alt: "explore malysia",
    title: "Visit United States",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.",
  },
  {
    id: 2,
    src: "/explore-indonesia.png",
    alt: "explore malysia",
    title: "Visit Indonesia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.",
  },
  {
    id: 3,
    src: "/explore-malysia3.png",
    alt: "explore malysia",
    title: "Visit Indonesia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.",
  },
  {
    id: 4,
    src: "/explore-turkey.png",
    alt: "explore malysia",
    title: "Visit United States",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.",
  },
];

export default function Content() {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex flex-col justify-center items-center md:items-center md:justify-around gap-[25rem] xs:gap-[30px] lg:gap-[22rem] xl:gap-[28rem]">
        <div className="text-[48px] font-bold capitalize text-[#452C1A] w-[40rem] xs:w-[15rem] xs:text-[20px] lg:text-[30px] lg:w-[22rem] xl:text-[48px] xl:w-[36rem] ">
          Experience Halal Travel Like Never Before
        </div>
        <Link href="/about" className={` ${pathname === "/about"}`}>
        <button className="text-khaki text-[20px] font-semibold px-[22px] py-[14px] border-2 border-[reddishbrown] xs:px-[10px] xs:py-[10px] xs:text-[10px] xl:text-[20px] xl:py-[14px] lg:px-[22px]">
          Explore more
        </button></Link>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap md:justify-between md:items-start gap-[22px] lg:gap-[34px] pt-[4rem] px-[6rem] xl:px-[10rem]">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="basis-[80%] md:basis-[47.8%] rounded-[6px] bg-darkslateblue relative"
          >
            <SvgImage
              src={destination.src}
              alt={destination.alt}
              className=""
              width="100%"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-eerieblack to-[rgba(255, 255, 255, 0)] to-[50%]" />
            <div className="absolute bottom-5 lg:bottom-[35px] xl:bottom-[50px] 2xl:bottom-[99.62px] left-0 w-full bg-transparent bg-opacity-50 px-4 md:px-6 lg:px-10">
              <div className="font-bold font-lato text-[18px] md:text-[22px] leading-[22px] lg:text-[32px] md:leading-[32px] lg:leading-[42px] text-white mb-4">
                {destination.title}
              </div>
              <div className="text-sm lg:text-[16px] font-normal leading-[20px] lg:leading-[26px] text-white font-lato">
                {destination.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[4rem] 3xl:flex 3xl:justify-end 3xl:mt-[8rem] ">
        <div className="xs:px-[6rem] xs:absolute md:absolute md:pl-[23rem] md:pr-[6rem] xl:pl-[26rem] 2xl:pl-[32.4rem] 3xl:pl-[0] 3xl:pr-[10rem]">
          <SvgImage
            src="/sascha-bosshard.png"
            alt="sascha"
            className=""
            width="100%"
          />
        </div>

        <div className="flex xs:leading-normal bg-white xs:px-[8px] xs:py-[10px]  xs:w-[15rem] xs:relative xs:top-[13rem] xs:left-[6rem] sm:top-[17rem] sm:left-[6rem] md:w-[25rem] md:px-[40px] md:top-[2rem] md:left-[6rem] lg:w-[26rem] xl:w-[38rem] xl:top-[2rem] 2xl:left-[10rem] 2xl:w-[40rem] 2xl:py-[18px] 3xl:left-[-43rem]">
          <div className="flex flex-col gap-6 xs:gap-2 md:gap-3 lg:gap-4">
            <div className="text-[48px] font-bold capitalize text-[#452C1A] font-playfair-display w-[40rem] xs:w-[15rem] xs:text-[16px] md:text-[30px] md:w-[22rem] xl:text-[48px] xl:w-[36rem] ">
              Experience Halal Travel Like Never Before
            </div>
            <div className="text-[20px] xs:leading-normal font-normal text-darygray capitalize font-lato leading-8 xs:text-[12px] xs:w-[14rem] lg:text-[18px] lg:w-[20rem] xl:text-[28px] xl:w-[33rem]">
              We are pioneers in the halal travel industry, dedicated to
              providing exceptional, culturally rich travel experiences that
              adhere to halal standards.
            </div>
            <Link href="/about" className={` ${pathname === "/about"}`}>
                <button className="flex items-center justify-center gap-[10px] py-2 px-4 lg:py-3 lg:px-[22px] bg-khaki transition-none">
                  <span className="text-white font-lato text-[16px] xs:text-[16px] md:text-[20px] font-bold leading-normal">
                    About us
                  </span>
                </button>
              </Link>
          </div>
        </div>
      </div>
      <div className="px-8 xs:mt-[16rem] md:mt-[10rem] lg:mt-[15rem] xl:mt-[7rem] 2xl:mt-[6rem]">
        <ExperienceSpeaks />
      </div>
    </div>
  );
}
