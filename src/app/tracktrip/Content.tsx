"use client";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Content() {
  return (
    <>
      <div className="mt-8 flex flex-col justify-center items-center">
        <div className="text-lg md:text-[20px] mt-4 md:mt-[4rem] lg:mt-[2rem] xl:mt-4 font-bold text-oceanBlue px-4 text-center">
          Booking details for booking ID{" "}
          <span className="uppercase text-[20px] font-bold text-goldenBrown">
            ec54eb76g65
          </span>{" "}
          , booked on 29 march at 2:30 am
        </div>
        <div className=" bg-white p-4 md:p-12 mt-12 xl:w-[1192px] lg:w-[900px] ">
          <div className="flex flex-col justify-center items-center lg:flex-row gap-[99px] ">
            <div className="lg:w-[50%] w-full">
              <div className="basis-[42.5%] md:basis-[47%] lg:basis-[42.5%] ">
                <div className="flex items-center justify-start">
                  <div className=" flex flex-col gap-2">
                    <div className="font-lato flex flex-col gap-4">
                      <div className="text-royalblue text-[20px]  font-bold">
                        Booking details
                      </div>
                      <div className="text-goldenBrown  font-normal leading-5">
                        Booking ID - ec54eb76g65
                      </div>
                      <div className="text-bluegray font-normal leading-normal w-[25rem] break-words">
                        Personalized Care for From booking to your return, our
                        concierge team ensures every detail is perfect.an
                        Unforgettable Experience
                      </div>
                    </div>
                    <div className="border-gray-500 rounded-[8px]">
                      <div className="h-[283px] bg-[url('/Bluemasque.png')] bg-no-repeat"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[50%] w-full">
              <div className="px-12 py-8 bg-softwhite">
                <div className="grid grid-cols-[65%_35%] gap-y-8 justify-between">
                  <div className="text-reddishbrown font-lato text-[20px] font-bold leading-normal mb-8">
                    Turkey
                  </div>
                  <div className="text-reddishbrown font-lato text-[20px] font-bold leading-normal mb-8">
                    2D/1N
                  </div>

                  <div className="text-brownishgray font-lato tetx-[18px] leading-5 font-semibold">
                    Trip dates
                  </div>
                  <div className="text-brownishgray font-lato tetx-[16px] leading-5 font-normal">
                    29 March - 1 April
                  </div>

                  <div className="text-brownishgray font-lato tetx-[18px] leading-5 font-semibold">
                    Duration
                  </div>
                  <div className="text-brownishgray font-lato tetx-[16px] leading-5 font-normal">
                    $50k - 90k
                  </div>

                  <div className="text-brownishgray font-lato tetx-[18px] leading-5 font-semibold">
                    Budget
                  </div>
                  <div className="text-brownishgray font-lato tetx-[16px] leading-5 font-normal">
                    Malaysia
                  </div>

                  <div className="text-brownishgray font-lato tetx-[18px] leading-5 font-semibold">
                    Destination
                  </div>
                  <div className="text-brownishgray font-lato tetx-[16px] leading-5 font-normal">
                    Turkey
                  </div>

                  <div className="text-brownishgray font-lato tetx-[18px] leading-5 font-semibold">
                    Accommodation type
                  </div>
                  <div className="text-brownishgray font-lato tetx-[16px] leading-5 font-normal">
                    Premium
                  </div>

                  <div className="text-brownishgray font-lato tetx-[18px] leading-5 font-semibold">
                    Airline Preference
                  </div>
                  <div className="text-brownishgray font-lato tetx-[16px] leading-5 font-normal">
                    Yes
                  </div>
                </div>
              </div>
              <button
                className="mt-6 px-[22px] py-[10px] font-lato text-[16px] font-bold leading-normal text-white bg-goldenBrown  cap"
                type="submit"
              >
                Download
                <span className="ml-2">
                  <FontAwesomeIcon icon={faDownload} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[15rem] mb-[-2px]">
        <img src="/sand.png" alt="" className="w-full h-auto cover" />
      </div>
    </>
  );
}

export default Content;
