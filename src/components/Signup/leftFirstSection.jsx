import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import bell from "../../assets/bell.svg";
import bell2 from "../../assets/bell2.svg";
import bar from "../../assets/bar.svg";
import checkmark from "../../assets/checkmark.svg";
import clock from "../../assets/clock.svg";
import arrowDown from "../../assets/arrowDown.svg";
import Marquee from "../Marquee";

const LeftFirstSection = () => {
  const cards = [
    {
      id: 1,
      content: (
        <div className="w-48 h-40 p-3 rounded-xl shadow-sm bg-gradient-to-b from-white via-[#f7f9ff] to-[#eaf0ff] border border-gray-200">
          <div className="flex justify-between items-start">
            <img src={bell2} alt="" />
            <span className="text-[9px] font-semibold text-gray-700">Save</span>
          </div>
          <p className="text-sm font-medium text-gray-900 mt-2 leading-5">
            We'll be sending <br /> notifications to you <br /> here
          </p>
          <input
            type="email"
            placeholder="hello@gmail.com"
            className="w-full h-[35px] text-[9px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 mt-2 bg-white"
          />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="w-48 h-40 p-3 rounded-xl bg-white shadow-sm border border-gray-200 relative">
          <div className="flex justify-between items-start">
            <img src={bar} alt="" />
            <img src={checkmark} alt="" />
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-sm text-gray-900 font-medium">
              Notify me when any wallets
              <br />
              move more than
            </p>
            <div className="flex items-center gap-1 rounded-[2.8px] bg-[#F2F2F2] px-2 py-1 text-[9px] w-fit mt-2">
              $1,000.00 <img src={arrowDown} alt="" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="w-48 h-40 p-4 rounded-xl shadow-md border border-gray-200 bg-white relative">
          <div className="absolute top-3 left-3">
            <img src={clock} alt="" />
          </div>
          <div className="absolute top-3 right-3 bg-blue-500 rounded-md p-0.5">
            <img src={checkmark} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="mt-8 text-sm font-medium text-gray-900">
              Notify me when any wallet dormant for
            </div>
            <div className="flex items-center gap-1 rounded-[2.8px] bg-[#F2F2F2] px-2 py-1 text-[9px] w-fit">
              $1,000.00 <img src={arrowDown} alt="" />
            </div>
            <div className="mt-2 text-sm font-medium text-gray-900">
              becomes active
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <div className="text-white max-w-[350px] mb-6 md:mb-0 text-center md:text-left">
        <div className="flex justify-center md:justify-start">
          <img src={bell} alt="" />
        </div>
        <h1 className="2xl:text-[31px] text-[24px] md:text-[28px] text-[#F2F2F2] 2xl:leading-10 leading-8 md:leading-9 first-section-heading mt-4 font-medium">
          Get notified when a <br /> highly correlated <br /> whale makes a move
        </h1>
        <p className="text-[#F2F2F2] 2xl:text-[16px] text-[14px] md:text-[15px] 2xl:mt-4 mt-3 opacity-60 leading-[120%]">
          Find out when a certain whale moves <br /> more than any preset amount
          on-chain or <br /> when a dormant whale you care about <br /> becomes
          active.
        </p>
      </div>

      <div className="w-full md:w-[400px] h-[200px] overflow-hidden md:-right-20 md:absolute">
        <Marquee items={cards} />
      </div>
    </div>
  );
};

export default LeftFirstSection;
