import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SvgImage from "../../components/SvgImage";

export default function ExploreMalysia() {
  const pathname = usePathname();
  return (
    <div className="p-8 md:px-16 md:py-20 lg:px-28 lg:py-28">
      <div className="flex flex-col gap-[65px]">
        <div className="flex flex-col items-center gap-5">
          <div className="text-[#091E31] text-center font-playfair-display text-[48px] font-bold leading-[62px] capitalize">
            Explore the beauty of Malaysia
          </div>
          <Link href="/plantrip" className={` ${pathname === "/plantrip"}`}>
            <div className="flex items-center gap-[10px] text-[#1F5267] text-right font-lato text-[16px] leading-[24px] font-bold">
              <span className="">Read more</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
        </div>
        <div className="flex justify-between items-start gap-[34px]">
          <div className="basis-[47.8%] rounded-[6px] bg-[#1F5267] relative">
            <SvgImage
              src="/explore-malysia2.png"
              alt="explore malysia"
              className=""
              width="100%"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-[22px] bg-gradient-to-t from-[#18181B] to-[rgba(255, 255, 255, 0)] to-[45.01%]" />
            <div className="absolute bottom-5 md:bottom-8 left-0 w-full bg-transparent bg-opacity-50 p-4 md:p-6 rounded-b-[22px]">
              <div className="font-bold font-lato text-[18px] leading-[22px] md:text-[32px] md:leading-[42px] text-white mb-2">
                Visit United states
              </div>
              <div className="text-[15px] md:text-[17.83px] font-normal leading-[20px] md:leading-[26.74px] text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                faucibus massa dignissim tempus.
              </div>
            </div>
          </div>
          <div className="basis-[47.8%] rounded-[6px] bg-[#1F5267] relative">
            <SvgImage
              src="/explore-malysia.png"
              alt="explore malysia"
              className=""
              width="100%"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-[22px] bg-gradient-to-t from-[#18181B] to-[rgba(255, 255, 255, 0)] to-[45.01%]" />
            <div className="absolute bottom-5 md:bottom-8 left-0 w-full bg-transparent bg-opacity-50 p-4 md:p-6 rounded-b-[22px]">
              <div className="font-bold font-lato text-[18px] leading-[22px] md:text-[32px] md:leading-[42px] text-white mb-2">
              Visit Indonesia
              </div>
              <div className="text-[15px] md:text-[17.83px] font-normal leading-[20px] md:leading-[26.74px] text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                faucibus massa dignissim tempus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
