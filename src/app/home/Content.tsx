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
    <div className="py-24">
      <div className="px-8 md:px-16 lg:px-28">
        <div className="3xl:container 3xl:max-w-[1500px] 3xl:mx-auto flex flex-wrap items-center">
          <div className="basis-[75%] md:basis-[60%] flex flex-col items-start gap-6">
            <span className="text-[#5A361A] font-playfair-display font-bold text-[20px] leading-normal">
              About us
            </span>
            <div className="flex flex-col items-start gap-[41px]">
              <p className="text-[#483C33] font-lato md:text-[22px] lg:text-[24] xl:text-[30px] 2xl:text-[36px] font-light md:leading-[35px] lg:leading-[37px] xl:leading-[50px] 2xl:leading-[58px]">
                Luxe club is committed to revolutionizing the way you experience
                travel. We specialize in creating high-end, halal-compliant
                journeys that cater to your unique preferences and values.{" "}
              </p>
              <Link href="/about" className={` ${pathname === "/about"}`}>
                <button className="flex items-center justify-center gap-[10px] py-3 px-[22px] bg-khaki transition-none">
                  <span className="text-[#fff] font-lato text-[20px] font-bold leading-normal">
                    About us
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="basis-[25%] md:basis-[40%] flex justify-end">
            <SvgImage
              src="/home-about-section.svg"
              alt="Logo"
              className=""
              width=""
            />
          </div>
        </div>

        <div className="3xl:container 3xl:max-w-[1500px] 3xl:mx-auto pl-20 pt-48 pb-24">
          <span className="relative">
            <SvgImage
              src="/home-halal-travel.svg"
              alt="experience with halal travel"
              className="z-10"
              width=""
            />
            <SvgImage
              src="/home-halal-travel2.svg"
              alt="experience with halal travel"
              className="z-0 absolute top-[-262px]"
              width=""
            />
            <div className="bg-[#fff] w-[640px] h-[400px] flex flex-col justify-center items-start gap-[44px] py-[45px] px-[35px] absolute z-20 bottom-[70px] right-[-70px]">
              <div className="flex flex-col gap-[42px] items-start">
                <div className="text-oceanBlue font-playfair-display text-[48px] font-bold leading-[62px] capitalize">
                  Experience Halal Travel Like Never Before
                </div>
                <p className="text-darygray font-lato text-[18px] font-normal leading-[28px] capitalize">
                  We are pioneers in the halal travel industry, dedicated to
                  providing exceptional, culturally rich travel experiences that
                  adhere to halal standards.
                </p>
              </div>
              <Link href="/about" className={` ${pathname === "/about"}`}>
                <button className="flex items-center justify-center gap-[10px] py-3 px-[22px] bg-khaki transition-none">
                  <span className="text-[#fff] font-lato text-[20px] font-bold leading-normal">
                    About us
                  </span>
                </button>
              </Link>
            </div>
            <div className="bg-[#fff] py-[26.812px] px-[31.543px] flex flex-col items-start gap-[15.772px] absolute z-20 left-[-100px] bottom-[40px]">
              <span className="font-inter text-[#353A45] text-[47.729px] font-normal leading-[63.02px] capitalize">
                #1
              </span>
            </div>
          </span>
        </div>
      </div>

      <div className="py-48">
        <div className="relative">
          <SvgImage
            src="/malysia.svg"
            alt="malysia"
            className="z-10"
            width="100%"
          />
          <SvgImage
            src="/malysia2.svg"
            alt="malysia-top"
            className="absolute z-0 top-[-95px]"
            width=""
          />
          <div className="bg-[#fff] w-[640px] h-[400px] flex flex-col justify-center items-start gap-[44px] p-[45px] absolute z-20 bottom-[-140px] left-[70px]">
            <div className="flex flex-col gap-[19px] items-start">
              <div className="text-[#091E31] font-playfair-display text-[48px] font-bold leading-[62px] capitalize">
                Explore the beauty of Malaysia
              </div>
              <p className="text-darygray font-lato text-[18px] font-normal leading-[28px] capitalize">
                We are pioneers in the halal travel industry, dedicated to
                providing exceptional, culturally rich travel experiences that
                adhere to halal standards.
              </p>
            </div>
            <Link href="/about" className={` ${pathname === "/about"}`}>
              <button className="text-[#fff] flex items-center justify-center gap-[10px] py-3 px-[22px] bg-khaki transition-none">
                <span className="font-lato text-[20px] font-bold leading-normal">
                  Explore
                </span>
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-28 py-28">
        <div className="3xl:container 3xl:max-w-[1500px] 3xl:mx-auto flex items-end justify-between">
          <div className="basis-[47.7%] flex flex-col gap-[38px] items-start">
            <div className="flex flex-col gap-[19px] items-start">
              <div className="text-oceanBlue font-playfair-display text-[48px] font-extrabold leading-[62px] capitalize">
                plan your trip
              </div>
              <p className="text-darygray font-lato text-[16px] font-normal leading-[24px] capitalize">
                We are pioneers in the halal travel industry, dedicated to
                providing exceptional, culturally rich travel experiences that
                adhere to halal standards.
              </p>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <div className="p-[10px] flex items-center gap-[10px]">
                <span className="text-khaki">
                  <FontAwesomeIcon
                    icon={faPlus}
                    fill=""
                    width={18}
                    height={18}
                  />
                </span>
                <span className="text-gray">Access to exclusive deals on flights and hotels.</span>
              </div>
              <div className="p-[10px] flex items-center gap-[10px]">
                <span className="text-khaki">
                  <FontAwesomeIcon
                    icon={faPlus}
                    fill=""
                    width={18}
                    height={18}
                  />
                </span>
                <span className="text-gray">
                  24/7 customer support for a smooth and worry-free travel
                  experience.
                </span>
              </div>
              <div className="p-[10px] flex items-center gap-[10px]">
                <span className="text-khaki">
                  <FontAwesomeIcon
                    icon={faPlus}
                    fill=""
                    width={18}
                    height={18}
                  />
                </span>
                <span className="text-gray">d</span>
              </div>
            </div>
            <Link href="/plantrip" className={` ${pathname === "/plantrip"}`}>
              <button className="text-[#fff] flex items-center justify-center gap-[10px] py-3 px-[22px] bg-khaki transition-none">
                <span className="font-lato text-[20px] font-bold leading-normal">
                  Plan your trip
                </span>
                <span>
                  <SvgImage
                    src="/icons/calender-check.png"
                    alt="calendar icon"
                    className=""
                    width=""
                  />
                </span>
              </button>
            </Link>
          </div>
          <div className="pt-8 basis-[42.5%] bg-[#E9DED6]">
            <div className="flex items-center justify-center gap-[99px]">
              <div className="basis-[64%] flex flex-col gap-2">
                <div className="bg-white flex justify-center items-center shrink-0 px-3 py-3 gap-3">
                  <Link
                    href="/plantrip"
                    className={` ${pathname === "/plantrip"}`}
                  >
                    <button className="text-[#fff] flex flex-col px-[21.053px] py-[10.526px] items-start gap-[12px] bg-oceanBlue transition-none text-[16.842px]">
                      <span className="text-[#fff] font-lato font-medium leading-[25.263px]">
                        Plan your trip
                      </span>
                    </button>
                  </Link>
                  <Link
                    href="/tracktrip"
                    className={` ${pathname === "/tracktrip"}`}
                  >
                    <button className="flex flex-col justify-center items-center gap-[10.526px] px-[21.053px] py-[10.526px] border-[1px] border-[#506873] text-darygray hover:bg-oceanBlue hover:text-white transition-none">
                      <span className="font-lato text-[16.842px] font-bold leading-[25.263px] text-center">
                        Track trip
                      </span>
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col">
                  <div className="w-full h-[177.612px] bg-cover bg-[url('/plan-trip-card-img.png')] bg-no-repeat"></div>
                  <div className="h-[155.8px] py-5 px-4 bg-white rounded-[0px_0px_7px_7px]">
                    <div className="mb-4">
                      <span className="bg-[#D4D4D8] py-[5px] px-[10px] font-inter text-sm font-semibold text-[#1E1E1E]">
                        $1,250,000
                      </span>
                    </div>
                    <div className="font-inter text-sm leading-[24px] font-[450] text-[#8D8D8D]">
                      <span>3 days • 2 week</span>
                    </div>
                    <p className="font-inter text-[16px] font-medium leading-[24px] text-[#424242]">132 Alston Ave, Durham, NC 27885 </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[-55px]">
              <SvgImage
                src="/plan-trip-card.png"
                alt="Logo"
                className=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
