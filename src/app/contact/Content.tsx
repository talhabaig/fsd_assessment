"use client";
import React, { useState } from "react";
import axios from "axios";

interface ContentProps {
  setSubmitted: (submitted: boolean) => void;
}

export default function Content({ setSubmitted }: ContentProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}contact-us`,
        formData
      );
      console.log("Response:", response.data);
      setFormData({
        firstName: "",
        lastName: "",
        phoneNo: "",
        email: "",
        message: "",
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

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
        <div className="flex justify-center items-center w-full px-4">
          <div className="p-8 bg-white ">
            <div className="flex flex-col gap-[33px]">
              <span className="text-reddishbrown text-[20px] font-semibold leading-7">
                Enter detail to connect with our team
              </span>
              <div>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 ">
                  <div className="flex flex-col gap-1">
                    <span className="text-oceanBlue text-[14px] font-semibold leading-5 ">
                      First Name
                    </span>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
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
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
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
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="px-[22px] py-[10px] h-[88px] border-2 self-stretch placeholder-custom"
                    id=""
                    placeholder="Write a note"
                  ></input>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="px-[22px] py-[10px] text-[16px] font-bold leading-normal text-white bg-oceanBlue  border-2 self-stretch"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
