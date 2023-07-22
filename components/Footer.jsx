"use client";

import React from "react";
import logo from "/public/logo.png";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} sm:pt-20 align-bottom justify-end flex sm:h-1/3 flex-col h-[75vh] relative z-10 bg-[#B5838D] border-t-[1px] text-gray-900`}
  >
    <div className="flex flex-col lg:px-10 ">
      <nav className=" flex sm:flex-row  flex-col  justify-around lg:justify-evenly  gap-6">
        <div className="flex flex-col sm:w-[40vw] sm:mr-5 justify-center  sm:sm:items-start items-center gap-6">
          <div className="logo">
            <Image src={logo} width={170} alt="logo" className=" h-16 w-auto" />
          </div>
          <div className=" relative">
            <input
              className=" items-start w-full py-3 lg:px-40 px-16 bg-[#FFCDB2] border-t-1 border-gray-800 rounded-xl placeholder:font-semibold  placeholder:text-gray-900 "
              type="text"
              placeholder="Subscribe here..."
            />
            <button className=" absolute right-8  top-1/2 transform -translate-y-[50%] bg-transparent cursor-pointer transition-all ease-in-out hover:text-white ">
              &#8594;
            </button>
          </div>

          {/* Hidden Menu Starts */}
          <div className=" sm:hidden flex align-middle jus text-center gap-5  mt-8">
            <div className="flex flex-col">
              {/* Menu One Starts */}
              <h3 className=" font-bold text-xl text-gray-800 hover:text-white mb-6">
                Main Menu
              </h3>
              <nav>
                <ul className=" flex flex-col gap-4 text-gray-900 hover:text-white text-sm">
                  <li><a href="/#">Home</a></li>
                  <li><a href="/get-to-know-us">Get to know us</a></li>
                  <li><a href="what-we-do">What we do</a></li>
                  <li><a href="/contribute">Contribute</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </nav>
            </div>
            {/* Menu One Ends */}
            <div className="flex flex-col">
              {/* Menu two Starts */}

              <h3 className=" font-bold text-xl text-gray-800 hover:text-white mb-6">
                Useful Links
              </h3>
              <nav>
                <ul className=" flex flex-col gap-4 text-gray-900 hover:text-white text-sm">
                  <li>Make a donation</li>
                  <li>Get to know us</li>
                  <li>Out Team</li>
                  <li>Contribute</li>
                  <li><a href="/privacy-policy">Privacy policy</a></li>
                </ul>
              </nav>
            </div>
            {/* Menu two End */}
          </div>
          {/* Hidden Menu Ends */}
          <div className=" flex flex-col justify-center sm:items-start items-center  sm:text-start text-center gap-5">
            <p className=" text-gray-800 hover:text-white text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex align-middle gap-4 text-2xl">
              <a href="https://twitter.com/amar_hrhelpdesk?lang=en"><AiFillTwitterCircle className="pointer transition-all text-gray-800 ease-in-out hover:text-white" /></a>
              <a href="https://www.instagram.com/hrhelpdesk/"><AiFillInstagram className="pointer transition-all text-gray-800 ease-in-out hover:text-white" /></a>
              
              <a href="https://www.facebook.com/MahilaBol/"><AiFillFacebook className="pointer transition-all text-gray-800 ease-in-out hover:text-white " /></a>
              <a href="https://www.youtube.com/@hrhelpdeskdotin/videos"><AiFillYoutube className="pointer transition-all text-gray-800 ease-in-out hover:text-white " ></AiFillYoutube></a>
            </div>
          </div>
        </div>
        <div className=" sm:flex justify-between hidden  lg:gap-[5vw] gap-10">
          <div className="flex flex-col">
            {/* Menu One Starts */}
            <h3 className=" font-bold text-xl sm:text-2xl text-gray-800 hover:text-white mb-6">Main Menu</h3>
            <nav>
              <ul className=" flex flex-col gap-4 text-gray-900  sm:text-base  text-sm">
                <li className=" hover:text-white "><a href="/#">Home</a></li>
                <li className=" hover:text-white "><a href="/get-to-know-us">Get to know us</a></li>
                <li className=" hover:text-white "><a href="what-we-do">What we do</a></li>
                <li className=" hover:text-white "><a href="/contribute">Contribute</a></li>
                <li className=" hover:text-white "><a href="/contact">Contact Us</a></li>
              </ul>
            </nav>
          </div>
          {/* Menu One Ends */}
          <div className="flex flex-col">
            {/* Menu two Starts */}

            <h3 className=" font-bold text-xl sm:text-2xl text-gray-800 hover:text-white mb-6">
              Useful Links
            </h3>
            <nav>
              <ul className=" flex flex-col gap-4  text-gray-900  sm:text-base text-sm">
                <li className=" hover:text-white "><a href="/refunds">Refunds</a></li>
                <li className=" hover:text-white "> <a href="/ethical-standard">Ethical Standard.</a></li>
                <li className=" hover:text-white "><a href="/terms-of-service">Term of service</a></li>
                <li className=" hover:text-white " ><a href="/privacy-policy">Privacy policy</a></li>
              </ul>
            </nav>
          </div>
          {/* Menu two End */}
        </div>
      </nav>

      <p className="flex justify-between align-middle  mt-8 py-8 px-0  border-t-[1px] border-gray-800">
        <a className="text-sm" href="https://www.hrhelpdesk.in/">
          ©2023 HRhelpdesk Trust. All rights reserved.
        </a>
        
      </p>
    </div>
  </motion.footer>
);

export default Footer;
