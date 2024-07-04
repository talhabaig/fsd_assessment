import React from "react";
import SvgImage from "../../components/SvgImage";

export default function ExperienceSpeaks() {
  return (
    <div className="py-8 md:p-12 lg:p-16 xl:px-28 2xl:py-20 3xl:container 3xl:max-w-[1500px] 3xl:mx-auto">
      <div className="flex flex-col gap-[40px] lg:gap-[65px]">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-full md:w-[509px] text-center text-oceanBlue font-playfair-display text-[24px] md:text-[35px] lg:text-[48px] font-extrabold leading-[35px] md:leading-[50px] lg:leading-[62px] capitalize">
            <span>Experiences That Speak for Themselves</span>
          </div>
        </div>
        <div className="md:py-[25px] xl:px-[30px] flex flex-col items-start gap-[10px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="bg-[#1F5267] flex justify-between basis-[49.4%]">
              <div className="flex flex-col xl:basis-[57.7%] gap-[14px] items-start p-5 md:pt-[39.1px] md:pb-[20.99px] md:pl-[30.1px] xl:pt-[30px] 2xl:pt-[39.1px] xl:pr-0">
                <div className="font-lato text-sm lg:text-[16px] xl:text-sm 2xl:text-[16px] text-[#fff] font-normal lg:leading-[24px] xl:leading-[20px] 2xl:leading-[24px] capitalize">
                  “Rareblocks made it so simple. Our new site is so much
                  beautiful and easier to work with than my old site. I just
                  choose the page, make the change.”
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[#DFA42E] font-lato text-[16px] md:text-[18px] font-bold leading-[25px] md:leading-[28px]">
                    Cameron Williamson
                  </span>
                  <span className="text-[#80ABBD] font-lato text-[13px] sm:text-sm leading-normal font-normal">
                    Director of Technology, CreativeGIG
                  </span>
                </div>
              </div>
              <div className="hidden xl:block md:basis-[42%]">
                <SvgImage
                  src="/testimonial-img.svg"
                  alt="explore malysia"
                  className="h-full"
                  width="100%"
                />
              </div>
            </div>
            <div className="bg-[#1F5267] flex justify-between basis-[49.4%]">
              <div className="flex flex-col xl:basis-[57.7%] gap-[14px] items-start p-5 md:pt-[39.1px] md:pb-[20.99px] md:pl-[30.1px] xl:pt-[30px] 2xl:pt-[39.1px] xl:pr-0">
                <div className="font-lato text-sm lg:text-[16px] xl:text-sm 2xl:text-[16px] text-[#fff] font-normal lg:leading-[24px] xl:leading-[20px] 2xl:leading-[24px] capitalize">
                  “Rareblocks made it so simple. Our new site is so much
                  beautiful and easier to work with than my old site. I just
                  choose the page, make the change.”
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[#DFA42E] font-lato text-[16px] md:text-[18px] font-bold leading-[25px] md:leading-[28px]">
                    Cameron Williamson
                  </span>
                  <span className="text-[#80ABBD] font-lato text-[13px] sm:text-sm leading-normal font-normal">
                    Director of Technology, CreativeGIG
                  </span>
                </div>
              </div>
              <div className="hidden xl:block md:basis-[42%]">
                <SvgImage
                  src="/testimonial-img2.svg"
                  alt="explore malysia"
                  className=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
