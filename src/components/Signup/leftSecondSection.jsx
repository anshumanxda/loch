import React from "react";
import asset1 from "../../assets/asset1.png";
import eye from "../../assets/eye.svg";

const leftSecondSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between relative mt-6 md:mt-10 2xl:mt-20 pt-6 md:pt-0 border-t border-[#E5E5E680] md:border-none">
      <div className="2xl:w-[335px] w-full md:w-[300px] 2xl:h-[306px] h-[200px] md:h-[250px] mb-4 md:mb-0 mt-6 md:mt-0">
        <img
          src={asset1}
          alt=""
          className="object-fit md:w-full md:h-full w-[300px] h-[200px] mx-auto md:mx-0"
        />
      </div>
      <div className="text-white max-w-[350px] text-center md:text-right flex flex-col items-center md:items-end">
        <img src={eye} alt="" className="" />
        <h1 className="2xl:text-[31px] text-[24px] md:text-[28px] text-[#F2F2F2] 2xl:leading-10 leading-8 md:leading-9 mt-4 font-medium">
          Watch what the <br /> whales are doing
        </h1>
        <p className="text-[#F2F2F2] 2xl:text-[16px] text-[14px] md:text-[15px] 2xl:mt-4 mt-3 opacity-60 leading-[120%]">
          All whales are not equal. Know exactly <br /> what the whales
          impacting YOUR <br />
          portfolio are doing.
        </p>
      </div>
    </div>
  );
};

export default leftSecondSection;
