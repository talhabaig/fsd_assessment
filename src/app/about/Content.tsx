"use client";
import React from "react";
import SvgImage from "../../components/SvgImage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Content() {
  const pathname = usePathname();
  return (
    <div className="pb-24 px-8">
      <div className="p-8 bg-white max-w-[1062px] xs:h-[550px] md:h-[430px] m-auto md:mt-[-3rem] xs:mt-0 z-1 relative">
        <div className="flex justify-center items-center mb-16">
          <img src="/Vision&mission.png" alt="vision&mission" />
        </div>
        <div className="text-desertsand flex justify-center items-center flex-col ">
          <span>
            At Luxe club, our mission is to revolutionize the travel experience
            by offering luxurious, culturally authentic, and halal-compliant
            journeys. We are dedicated to providing personalized, high-quality
            services that cater to the unique needs and values of our clients,
            ensuring every trip is memorable, enriching, and stress-free.
          </span>
        </div>
        <br />
        <br />
        <div className="text-desertsand flex justify-center items-center flex-col ">
          <span>
            {" "}
            Our vision is to be the leading provider of halal travel
            experiences, setting the industry standard for luxury, cultural
            authenticity, and exceptional service. We aspire to inspire and
            empower travelers to explore the world with confidence, knowing that
            their values and preferences are at the heart of every journey we
            craft.{" "}
          </span>
        </div>
      </div>

      <div className="xs:px-12 lg:px-28 pb-28 pt-12 ">
        <div className="3xl:container 3xl:max-w-[1500px] 3xl:mx-auto xs:flex-col lg:flex-row flex items-end justify-between">
          <div className="basis-[47.7%] flex flex-col gap-[38px] items-start">
            <div className="flex flex-col gap-[19px] items-start">
              <div className="text-charcoalblack font-playfair-display xs:text-[24px] lg:text-[48px] font-bold lg:leading-[62px] xs:leading-[36px] capitalize">
                Experience Halal Travel Like Never Before
              </div>
              <p className="text-charcoalblack font-lato text-[18px] font-normal leading-[28px]">
                We are pioneers in the halal travel industry, dedicated to
                providing exceptional, culturally rich travel experiences that
                adhere to halal standards.
              </p>
            </div>

            <Link href="/plantrip" className={` ${pathname === "/plantrip"}`}>
              <button className="text-[#fff] flex items-center justify-center gap-[10px] py-3 px-[22px] bg-khaki transition-none">
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
    </div>
  );
}
