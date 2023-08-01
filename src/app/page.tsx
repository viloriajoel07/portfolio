import Image from "next/image";
import Link from "next/link";
import { Github, WhatsAppIcon } from "~/assets/icons";
import profileImage from "~/assets/imageProfile2.webp";
import { Button } from "~/components";
import BgBlur from "~/components/BgBlur";

export default function Home() {
  return (
    <main className={`w-full h-full flex justify-center items-center py-4`}>
      <div className="relative flex place-items-center before:absolute "></div>
      <div className="flex flex-col gap-2 items-center justify-center pb-12 px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="rounded-full flex-grow w-52 h-52 lg:w-80 lg:h-80 mb-2 overflow-hidden z-10 border-8 border-blue-600 hover:scale-110 transition-all">
            <Image
              src={profileImage}
              alt="my Image Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <BgBlur />
          <div className="flex flex-col">
            <h1
              className="font-bold text-center -tracking-wide z-10 pb-1 trak text-transparent text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-700 to-pink-600"
              style={{ fontWeight: "900" }}
            >
              Hello, I'm Joel Viloria
            </h1>
            <h2 className="text-2xl md:text-4xl text-center">
              I'm fullstack developer
            </h2>
            {/* <hr className="my-6" /> */}
            <div className="flex justify-center items-center py-4 gap-4">
              <Link href="https://wa.me/3217225024?text=Hola, estamos interesados en tu servicios.">
                <WhatsAppIcon size={36} />
              </Link>
              <Link href="https://github.com/viloriajoel07">
                <Github size={36} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
