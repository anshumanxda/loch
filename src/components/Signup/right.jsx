import React, { useState } from "react";

const Right = () => {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Clear error when user starts typing again
    if (showError) {
      setShowError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show error if input has content but lacks "@" or "."
    if (email && (!email.includes("@") || !email.includes("."))) {
      setShowError(true);
    } else {
      setShowError(false);
      // Handle successful submission here
      console.log("Email submitted:", email);
      // Redirect to welcome page
      window.location.href = "https://app.loch.one/welcome";
    }
  };

  return (
    <div className="signup-right bg-white min-h-[60vh] md:h-full md:min-h-0 flex-1 flex items-center">
      <div className="flex flex-col justify-center bg-white max-w-[350px] mx-auto z-10 h-full px-4 md:px-0 py-8 md:py-0">
        <h2 className="2xl:text-[50px] text-[32px] md:text-[39px] 2xl:leading-14 leading-10 md:leading-11 font-medium text-[#B0B1B3] mb-6 md:mb-8 text-center md:text-left">
          Sign up for
          <br />
          exclusive access.
        </h2>
        <div className="w-full max-w-md flex flex-col items-center">
          <form
            className="w-full space-y-4 md:space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <input
                placeholder="Your email address"
                value={email}
                onChange={handleEmailChange}
                tabIndex={1}
                autoFocus
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-700 placeholder-gray-400"
              />
              {showError && (
                <p className="text-red-500 text-sm">
                  Please enter a valid email.
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={!email}
              className="w-full py-3 bg-black text-white rounded-md font-medium 2xl:text-2xl text-base hover:bg-gray-800 active:bg-gray-700 transition-all duration-200 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:text-gray-500 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100 disabled:active:scale-100 disabled:hover:bg-black disabled:active:bg-black"
            >
              Get started
            </button>
          </form>
          <p className="text-center text-[#19191A] text-sm mt-4 md:mt-6 font-medium">
            You'll receive an email with an invite link to join.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Right;
