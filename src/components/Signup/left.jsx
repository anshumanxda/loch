import React from "react";
import LeftFirstSection from "./leftFirstSection";
import LeftSecondSection from "./leftSecondSection";
import LeftThirdSection from "./leftThirdSection";

const Left = ({ className }) => {
  return (
    <div
      className={`signup-left flex-1 max-w-[800px] px-4 md:px-16 overflow-hidden flex flex-col gap-6 md:gap-10 py-6 md:py-10 ${className}`}
    >
      <div>
        <LeftFirstSection />

        <LeftSecondSection />

        <LeftThirdSection />
      </div>
    </div>
  );
};

export default Left;
