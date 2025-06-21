import React, { useRef, useState, useEffect } from "react";
import vector from "../../assets/vector.svg";
import { cn } from "../../utils";

const LeftThirdSection = () => {
  const containerRef = useRef(null);
  const [showGradient, setShowGradient] = useState(false);

  const handleCardClick = (event) => {
    if (containerRef.current) {
      const card = event.currentTarget;

      // Calculate how much to scroll to bring this card to the leftmost position
      const scrollLeft = card.offsetLeft;

      containerRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      setShowGradient(scrollLeft > 0);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);

      // Check initial scroll position
      handleScroll();

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="mt-6 md:mt-0 border-t border-[#E5E5E680] md:border-none">
      <div className="flex ">
        <div className="md:border-b border-[#E5E5E680] w-full flex justify-center md:justify-end">
          <p className="text-[#F2F2F2] p-3 text-[20px] md:text-[25px] font-medium">
            Testimonials
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-full items-end">
        <img src={vector} alt="" className="hidden md:block" />
        <div
          className={cn("relative w-full", showGradient && "scroll-gradient")}
        >
          <div
            ref={containerRef}
            className="flex gap-4 mt-6 md:mt-10 relative md:-right-18 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pr-4 md:pr-20 rounded-xl w-full"
          >
            <div
              className="w-[280px] md:w-[353px] 2xl:p-6 p-4 bg-white rounded-xl shadow-md snap-start flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow duration-200"
              onClick={handleCardClick}
            >
              <div className="mb-2">
                <span className="font-semibold text-gray-900 text-sm">
                  Jack F
                </span>
                <span className="text-gray-400 ml-2 text-xs">
                  Ex Blackrock PM
                </span>
              </div>
              <p className="text-gray-800 text-sm">
                "Love how Loch integrates portfolio analytics and whale watching
                into one unified app."
              </p>
            </div>
            <div
              className="w-[280px] md:w-[353px] 2xl:p-6 p-4 bg-white rounded-xl shadow-md snap-start flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow duration-200"
              onClick={handleCardClick}
            >
              <div className="mb-2">
                <span className="font-semibold text-gray-900 text-sm">
                  Yash P
                </span>
                <span className="text-gray-400 ml-2 text-xs">
                  Research, 3poch Crypto Hedge Fund
                </span>
              </div>
              <p className="text-gray-800 text-sm">
                "I use <span className="font-medium">Loch</span> everyday now. I
                don't think I could analyze crypto whale trends markets without
                it. I'm addicted!"
              </p>
            </div>
            <div
              className="w-[280px] md:w-[353px] 2xl:p-6 p-4 bg-white rounded-xl shadow-md snap-start flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow duration-200"
              onClick={handleCardClick}
            >
              <div className="mb-2">
                <span className="font-semibold text-gray-900 text-sm">
                  Shiv S
                </span>
                <span className="text-gray-400 ml-2 text-xs">
                  Co-Founder Magik Labs
                </span>
              </div>
              <p className="text-gray-800 text-sm">
                "Managing my own portfolio is helpful and well designed. What's
                really interesting is watching the whales though. No one else
                has made whale tracking so simple."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftThirdSection;
