"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import styles from "../app/layout.module.css";
import SvgImage from '../components/SvgImage';


export const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white relative p-[16px] md:py-[18px] md:px-[2rem] lg:py-[15px] lg:px-[3rem] 2xl:py-[20px] 2xl:px-[82px]">
      <div className="h-full flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <SvgImage src="/logo.svg" alt="Logo" width="" className="w-[190px] xs:w-[200px] lg:w-auto"/>
          </Link>
        </div>
        <div className="md:hidden">
          <button ref={buttonRef} onClick={handleToggle} className="text-oceanBlue">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          ref={menuRef}
          className={`${styles.navMenu} ${isOpen ? styles.open : ""}`}
        >
          <div className="flex flex-col md:flex-row md:gap-1 md:items-center lg:gap-3 py-4 px-6 md:p-0">
            <Link href="/tracktrip">
              <div
                onClick={handleClose}
                className={`nav-link ${styles.link} ${
                  pathname === "/tracktrip" ? `${styles.active} active` : ""
                } text-oceanBlue md:px-[15px] md:py-[14px] font-lato text-lg font-bold md:text-sm lg:text-[16px] md:leading-normal`}
              >
                Track Trip
              </div>
            </Link>
            <Link href="/plantrip">
              <div
                onClick={handleClose}
                className={`nav-link ${styles.link} ${
                  pathname === "/plantrip" ? `${styles.active} active` : ""
                } text-oceanBlue md:px-[15px] md:py-[14px] font-lato font-bold text-lg md:text-sm lg:text-[16px] md:leading-normal`}
              >
                Plan Trip
              </div>
            </Link>
            <Link href="/about">
              <div
                onClick={handleClose}
                className={`nav-link ${styles.link} ${
                  pathname === "/about" ? `${styles.active} active` : ""
                } text-oceanBlue md:px-[15px] md:py-[14px] font-lato font-bold text-lg md:text-sm lg:text-[16px] md:leading-normal`}
              >
                About Us
              </div>
            </Link>
            
          </div>
          <div className="px-[20px] md:px-[1px] md:mt-0">
            <Link
              href="/contact"
              className={`${styles.link} ${
                pathname === "/contact" ? styles.active : ""
              }`}
            >
              <button
                onClick={handleClose}
                className="text-white font-lato bg-oceanBlue hover:bg-goldenSun mb-5 md:mb-0 uppercase font-lato font-bold md:text-sm lg:text-[16px] leading-normal py-2 px-4 md:px-[22px] md:py-[14px]"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
       
      </div>
    </nav>
  );
};
