import React from "react";
import Left from "../components/Signup/left";
import Right from "../components/Signup/right";

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-[1920px] min-h-screen md:h-screen md:max-h-[1080px] md:min-h-[857px] mx-auto bg-transparent overflow-hidden">
      <div className="order-2 md:order-1">
        <Left />
      </div>
      <div className="order-1 md:order-2 flex-1">
        <Right />
      </div>
    </div>
  );
};

export default Signup;
