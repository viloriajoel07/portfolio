import Link from "next/link";
import React from "react";
import { DownloadIcon } from "~/assets/icons";
import { Button, Timeline } from "~/components";
import BgBlur from "~/components/BgBlur";

const Experience = () => {
  return (
    <div
      className="flex pt-20 flex-col gap-8 justify-center items-center w-full h-screen px-8 border-t border-white/10"
      id="experience"
    >
      <h2 className="font-bold text-4xl lg:text-5xl text-center lg:text-left">
        Experience <span className="text-blue-600">.</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 pb-8 lg:pb-0 justify-center items-center w-full md:w-4/6">
        <BgBlur />
        <Timeline />
      </div>
    </div>
  );
};

export default Experience;
