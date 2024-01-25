import Image from "next/image";
import React from "react";

import { Timeline } from "~/components";
import Title from "../title.component";
import lines from "~/assets/LINES.svg";

const Experience = () => {
  return (
    <main
      className="pt-20 flex justify-center relative w-full min-h-screen overflow-hidden"
      id="experience"
    >
      <div className="max-w-[60rem] flex flex-col justify-center items-center gap-8 px-16 lg:px-0">
        <Title title="Experience" description="Experience in development" />
        <Timeline />
      </div>
      <Image
        src={lines}
        alt="lines"
        className="absolute -top-16 -right-2 rotate-[185deg]"
      />
      <Image src={lines} alt="lines" className="absolute top-20 left-0" />
    </main>
  );
};

export default Experience;
