import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SvgImage from "../../components/SvgImage";

export default function ExploreMalysia() {
  const pathname = usePathname();

  const destinations = [
    {
      id: 1,
      src: "/explore-malysia2.png",
      alt: "explore malysia",
      title: "Visit United States",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus."
    },
    {
      id: 2,
      src: "/explore-malysia.png",
      alt: "explore malysia",
      title: "Visit Indonesia",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus."
    }
  ];

  return (
    <div className="py-8 md:p-12 lg:p-16 xl:px-28 2xl:py-20 3xl:container 3xl:max-w-[1500px] 3xl:mx-auto">
      <div className="flex flex-col gap-[40px] lg:gap-[65px]">
        <div className="flex flex-col items-center gap-5">
          <div className="text-spacecadet text-center font-playfair-display text-[26px] md:text-[38px] lg:text-[48px] font-bold leading-[35px] md:leading-[50px] lg:leading-[62px] capitalize">
            Explore the beauty of Malaysia
          </div>
          <Link href="/plantrip" className={` ${pathname === "/plantrip"}`}>
            <div className="flex items-center gap-[10px] text-darkslateblue text-right font-lato text-[16px] leading-[24px] font-bold">
              <span className="">Read more</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between md:items-start gap-[22px] lg:gap-[34px]">
          {destinations.map(destination => (
            <div key={destination.id} className="basis-[80%] md:basis-[47.8%] rounded-[6px] bg-darkslateblue relative">
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
      </div>
    </div>
  );
}