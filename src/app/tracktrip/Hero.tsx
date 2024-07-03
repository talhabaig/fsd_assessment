import React from "react";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="relative">
        <img src="/hero_trackTrip.png" alt="" className="w-full h-full cover" />

        <div className="flex flex-col gap-5 absolute bottom-[4rem] left-[12rem]">
          <div className="text-white text-[48px] w-[32rem] font-bold  uppercase">
            Stay Updated on Your Travel Plans
          </div>
          <div className="text-white text-[16px] font-medium capitalize">
            Enter trip ID to view all the detail.
          </div>
        </div>
        <div className="inline-flex p-[42px_50.906px_46px_51.094px] justify-center items-center  bg-white shadow-[0px_0px_16px_0px_rgba(0,0,0,0.12)] absolute bottom-[3rem] right-[18rem]">
          <div className="flex flex-col items-center gap-7">
            <div className="text-oceanBlue text-[20px] font-medium capitalize">
              Enter trip ID to view all the detail.
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                className="flex w-[217px] px-6 py-3 justify-center items-center gap-2.5 flex-shrink-0 border border-dashed border-slateBlue"
                placeholder="Enter Trip ID"
              />

              <button className="flex w-[217px] px-6 py-3 justify-center items-center gap-2.5 flex-shrink-0 bg-oceanBlue text-white">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
