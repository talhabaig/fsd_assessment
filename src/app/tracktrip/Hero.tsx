import React from "react";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="relative">
        <img src="/hero_trackTrip.png" alt="" className="w-full h-[300px] sm:h-[full] cover" />
        <div className="xs:flex-col md:flex-row md:flex md:justify-evenly md:w-full xs:mt-[-7rem] md:mt-[-14rem] ">
          <div className="xs:flex xs:flex-col xs:justify-center xs:items-center md:items-start  md:gap-3">
            <div className="text-white md:text-[32px] lg:text-[48px] xs:text-[25px] font-playfair-display xs:w-[16rem] md:w-[20rem] lg:w-[25rem] font-extrabold  capitalize">
              Stay Updated on Your Travel Plans
            </div>
            <div className="text-white text-[16px] font-lato font-medium capitalize">
              Enter trip ID to view all the detail.
            </div>
          </div>
          <div className="xs:w-[330px]  md:w-[390px] xl:w-[580px] flex  xs:m-auto md:m-0 xs:p-[21px_25px_21px_25px] lg:p-[42px_50.906px_46px_51.094px] justify-center items-center  bg-white shadow-[0px_0px_16px_0px_rgba(0,0,0,0.12)]">
            <div className="flex flex-col items-center md:gap-7 xs:gap-3">
              <div className="text-oceanBlue md:text-[20px] xs:text-[14px] font-medium capitalize">
                Enter trip ID to view all the detail.
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  className="flex md:w-[150px] lg:w-[165px] xl:w-[217px] xs:w-[120px] xs:px-3 xs:py-1 lg:px-6 lg:py-3 justify-center items-center gap-2.5 flex-shrink-0 border border-dashed border-slateBlue"
                  placeholder="Enter Trip ID"
                />

                <button className="flex md:w-[150px] lg:w-[165px] xl:w-[217px] xs:w-[120px] xs:px-3 xs:py-1 md:px-6 md:py-3 justify-center items-center gap-2.5 flex-shrink-0 bg-oceanBlue text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
