import React from "react";

export default function Content() {
  return (
    <div className="w-full flex flex-col gap-20 mt-[7.4rem]">
      <div className="flex justify-center items-center mv-">
        <img
          src="/contact_us.png"
          alt="contact_us"
          className="w-[471px] h-[120px]"
        />
      </div>
      <div className="">
        <div className="flex justify-center items-center w-full mx-4">
          <div className="p-8 bg-white ">
            <div className="flex flex-col gap-[33px]">
              <span className="text-[#955C31] text-[20px] font-semibold leading-7">
                Enter detail to connect with our team
              </span>
              <div>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 ">
                  <div className="flex flex-col gap-1">
                    <span className="text-oceanBlue text-[14px] font-semibold leading-5 ">
                      First Name
                    </span>
                    <input
                      className="px-[22px] py-[10px]  border-2 self-stretch placeholder-custom"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-oceanBlue text-[14px] font-semibold leading-5 ">
                      Last Name
                    </span>
                    <input
                      className="px-[22px] py-[10px]  border-2 self-stretch placeholder-custom"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-oceanBlue text-[14px] font-semibold leading-5 ">
                      Phone no.
                    </span>
                    <input
                      className="px-[22px] py-[10px] border-2 self-stretch placeholder-custom"
                      type="tel"
                      placeholder="+91"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-oceanBlue text-[14px] font-semibold leading-5 ">
                      Email Address
                    </span>
                    <input
                      className="px-[22px] py-[10px] border-2 self-stretch placeholder-custom"
                      type="text"
                      placeholder="moohitrana@gmail.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="text-oceanBlue text-[14px] font-semibold leading-5 ">
                    Message{" "}
                  </span>
                  <input
                    className="px-[22px] py-[10px] h-[88px] border-2 self-stretch placeholder-custom"
                    id=""
                    placeholder="Write a note"
                  ></input>
                </div>
              </div>
              <button
                className="px-[22px] py-[10px] text-[16px] font-bold leading-normal text-white bg-oceanBlue  border-2 self-stretch"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
     
      </div>
    </div>
  );
}
