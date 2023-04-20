import Image from "next/image";
import { WhatsAppIcon } from "~/assets/icons";
import profileImage from "~/assets/imageProfile.jpeg";

export default function Home() {
  return (
    <main className={`w-full h-full flex justify-center items-center py-4`}>
      <div className="relative flex place-items-center before:absolute "></div>
      <div className="flex flex-col gap-2 items-center justify-center pb-12 px-8">
        <Image
          src={profileImage}
          alt="my Image Profile"
          className="rounded-full object-cover w-48 h-48 object-top mb-2 border-8 border-blue-600 hover:scale-110 transition-all"
        />
        <div className="absolute w-28 pb-60 h-28 before:h-[300px] before:w-[480px] before:-translate-x-1/4 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl pr-52 before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>
        <h1
          className="font-bold text-center -tracking-wide pb-1 trak text-transparent text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-700 to-pink-600"
          style={{ fontWeight: "900" }}
        >
          Hello, My name is Joel Viloria
        </h1>
        <h2 className="text-2xl md:text-4xl text-center">
          I'm fullstack developer
        </h2>
        <a
          href="https://wa.me/3217225024?text=Hola, estamos interesados en tu servicios."
          target="__blank"
          className="text-white flex gap-2 justify-center items-center bg-gradient-to-r from-cyan-600 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-400 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
        >
          Contact me <WhatsAppIcon />
        </a>
      </div>
    </main>
  );
}
