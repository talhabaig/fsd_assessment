"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SvgImage from "../components/SvgImage";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function Footer() {
  const handleSimpleLinkClick = (path: string) => {
    setTimeout(() => {
      window.location.href = path;
    }, 500);
  };

  const pathname = usePathname();

  return (
    <div className="w-full bg-oceanBlue text-white ">
      <div className="py-12 px-6 lg:p-16 2xl:py-16 2xl:pl-16 2xl:pr-28">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between">
            <div className="px-[15px] md:px-0">
              <Link href="/">
                <SvgImage
                  src="/footer-logo.svg"
                  alt="Logo"
                  className="w-[190px] xs:w-[200px] lg:w-auto" width=""
                />
              </Link>
            </div>
            <div className="gap-[10px] flex flex-col md:flex-row items-start">
              <Link href="/about" className={` ${pathname === "/about"}`}>
                <span
                  className="cursor-pointer px-[15px] md:px-2 lg:px-[15px] py-[14px] text-sm lg:text-[16px] leading-normal capitalize font-lato lg:font-bold hover:text-goldenSun"
                  onClick={() => handleSimpleLinkClick("/about")}
                >
                  About Us
                </span>
              </Link>
              <Link href="/plantrip" className={` ${pathname === "/plantrip"}`}>
                <span
                  className="cursor-pointer px-[15px] md:px-2 lg:px-[15px] py-[14px] text-sm lg:text-[16px] leading-normal capitalize font-lato lg:font-bold hover:text-goldenSun"
                  onClick={() => handleSimpleLinkClick("/plantrip")}
                >
                  Plan Trip
                </span>
              </Link>
              <Link
                href="/tracktrip"
                className={` ${pathname === "/tracktrip"}`}
              >
                <span
                  className="cursor-pointer px-[15px] md:px-2 lg:px-[15px] py-[14px] text-sm lg:text-[16px] leading-normal capitalize font-lato lg:font-bold hover:text-goldenSun"
                  onClick={() => handleSimpleLinkClick("/tracktrip")}
                >
                  Track your Trip
                </span>
              </Link>
              <Link href="/article" className={` ${pathname === "/article"}`}>
                <span
                  className="cursor-pointer px-[15px] md:px-2 lg:px-[15px] py-[14px] text-sm lg:text-[16px] leading-normal capitalize font-lato lg:font-bold hover:text-goldenSun"
                  onClick={() => handleSimpleLinkClick("/article")}
                >
                  Article/Blog
                </span>
              </Link>

              <Link href="/faq" className={` ${pathname === "/faq"}`}>
                <span
                  className="cursor-pointer px-[15px] md:px-2 lg:px-[15px] py-[14px] text-sm lg:text-[16px] leading-normal capitalize font-lato lg:font-bold hover:text-goldenSun"
                  onClick={() => handleSimpleLinkClick("/faq")}
                >
                  FAQ
                </span>
              </Link>
            </div>
          </div>
          <div className="flex px-[15px] md:px-0">
            <div className="md:basis-full 2xl:basis-[64%] 3xl:basis-[66%] flex flex-col gap-8 md:gap-4 lg:gap-12 md:flex-row lg:justify-between">
              <div className="md:basis-[65%] xl:basis-[55%] 2xl:basis-[65%] flex flex-col md:flex-row gap-8 md:justify-center lg:justify-between xl:justify-start lg:gap-[48px] items-start">
                <div className="md:basis-[40%] lg:basis-[35%] xl:basis-[35%] 2xl:basis-[30%] flex flex-col gap-4">
                  <div className="text-white font-lato text-[20px] font-medium leading-[22px] tracking-[-0.2px]">
                    Contact Us
                  </div>
                  <div className="text-silverGray font-lato text-sm leading-[22.4px] font-normal">
                    <div className="flex gap-2">
                      <span className="cursor-pointer">
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      <span className="cursor-pointer">+1 (999) 888-77-66</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="cursor-pointer">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <a href="mailto:hello@luxeclub.com" target="_blank">
                        hello@luxeclub.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:basis-[50%] lg:basis-[55%] xl:basis-[40%] 2xl:basis-[42%] flex flex-col gap-4">
                  <div className="text-white font-lato text-[20px] font-medium leading-[22px] tracking-[-0.2px]">
                    Location
                  </div>
                  <div className="text-silverGray font-lato text-sm leading-[22.4px] font-normal flex gap-2">
                    <span className="cursor-pointer">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <span className="cursor-pointer">
                      <a
                        href="/"
                        target="_blank"
                      >
                        483920, Moscow, Myasnitskaya 22/2/5, Office 4
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:basis-[32%] lg:basis-1/3 xl:basis-[40%] 2xl:basis-1/3 2xl:flex 2xl:justify-end">
                <div className="flex flex-col gap-4 items-start">
                  <div className="text-white font-lato text-[12px] font-normal leading-[16.8px] tracking-[-0.2px]">
                    Follow Us
                  </div>
                  <div className="flex gap-2 md:gap-4">
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SvgImage
                        src="/icons/twitter-icon.png"
                        alt="Logo"
                        className="cursor-pointer" width=""
                      />
                    </a>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SvgImage
                        src="/icons/facebook-icon.png"
                        alt="Logo"
                        className="cursor-pointer" width=""
                      />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SvgImage
                        src="/icons/insta-icon.png"
                        alt="Logo"
                        className="cursor-pointer" width=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-tealblue h-[2px]" />
      <div className="py-4 px-6 lg:py-8 lg:px-16 2xl:py-8 2xl:pl-16 2xl:pr-28 flex flex-col md:flex-row md:justify-between">
        <div className=" text-center">
          <span className="text-[12px] sm:text-sm font-normal leading-[14px] sm:leading-[26px] font-lato text-azuremist opacity-[0.7]">
            Design by Mohitrana{" "}
            <span className="text-skyBlue underline">(Behance)</span>{" "}
          </span>
        </div>
        <div className=" text-center">
          <span className="text-azuremist text-[12px] sm:text-sm font-normal leading-[12px] sm:leading-[26px] opacity-[0.7] font-Manrope">
            © Copyright 2021- 2023, All Rights Reserved by luxe club
          </span>
        </div>
      </div>
    </div>
  );
}
