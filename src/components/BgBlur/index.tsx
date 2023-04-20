import React from "react";

const BgBlur = () => {
  return (
    <>
      <span className="absolute w-[100px] h-[50px] -translate-y-10 sm:translate-y-0 translate-x-16 rounded-full blur-[35px] bg-gradient-to-r from-blue-800 to-pink-600 bg-opacity-30 z-0"></span>
      <span className="absolute w-[80px] h-[80px] -translate-y-28 rounded-full blur-[35px] bg-purple-600 bg-opacity-30 z-0"></span>
      <span className="absolute w-[170px] h-[100px] sm:-translate-x-16 -translate-y-8 sm:translate-y-0 rounded-full blur-[60px] bg-gradient-to-r from-cyan-800 to-blue-600 bg-opacity-30 z-0"></span>
    </>
  );
};

export default BgBlur;
