import Link from "next/link";
import React from "react";
import { DownloadIcon } from "~/assets/icons";
import { Button, Timeline } from "~/components";
import BgBlur from "~/components/BgBlur";

const Experience = () => {
  return (
    <main
      className="bg-slate-950 pt-20 flex justify-center w-full h-screen"
      id="experience"
    >
      <div className="max-w-[70rem] flex flex-col justify-center items-center gap-8 px-16 lg:px-0">
        <h2 className="font-bold text-4xl lg:text-5xl text-center lg:text-left">
          Experience <span className="text-sky-400">.</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 pb-8 lg:pb-0 justify-center items-center w-full md:w-4/6">
          <BgBlur />
          <Timeline />
        </div>
      </div>
    </main>
  );
};

export default Experience;
