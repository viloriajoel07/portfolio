import Link from "next/link";
import React from "react";
import { DownloadIcon } from "~/assets/icons";
import { Button, Timeline } from "~/components";
import BgBlur from "~/components/BgBlur";

const AboutPage = () => {
  return (
    <div className="flex gap-8 justify-center items-center h-full px-8">
      <div className="flex flex-col lg:flex-row gap-10 pb-8 lg:pb-0 justify-center items-center">
        <div className="flex flex-col gap-4 mb-2">
          <h2 className="font-bold text-4xl lg:text-5xl text-center lg:text-left">
            History <span className="text-blue-600">.</span>
          </h2>
          <p className="lg:w-[30rem] text-gray-300">
            Hello, my name is Joel, I'm 19 years old, I am a fullstack JS
            developer, +1 years of experience working in different projects with
            multiple roles
          </p>

          <Link
            href="/files/CV-Joel.pdf"
            target="_blank"
            className="px-4 py-2 bg-blue-600 w-44 flex rounded-xl gap-2 justify-center"
          >
            Download CV <DownloadIcon />
          </Link>
        </div>
        <BgBlur />
        {/* <div className="absolute w-28 pb-60 h-28 before:h-[300px] before:w-[480px] before:-translate-x-1/4 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl pr-52 before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div> */}
        <Timeline />
      </div>
    </div>
  );
};

export default AboutPage;
