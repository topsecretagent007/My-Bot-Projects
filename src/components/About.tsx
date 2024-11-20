import React from "react";
import Image from "next/image";
import Avatar from "@/../public/image/avatar.png"
export default function About() {
  return (
    <div className="container xs:px-8 px-3 py-12 lg:py-20">
      <div className="w-full flex flex-col xs:flex-row gap-4 justify-center items-center">
        <div className="h-full flex flex-col justify-center px-3 ">
          <span className="text-white font-semibold">Hi, My name is</span>
          <h1 className="text-[#64ffda] font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4">
            Lendon Bracewell
          </h1>
          <h3 className="text-white font-bold text-xl lg:text-4xl py-4">
            I am a Full Stack Developer and Bot Developer.
          </h3>
          <div className="w-full flex flex-col gap-2 text-base lg:text-lg pb-10 text-gray-500">
            I have created several bot projects tailored to meet the growing demand for trading bots in today&#39;s market.
            <br />
            These bots support various tokens and chains, are fully operational, and are continuously updated to keep up with the latest trends.
          </div>
          <div className="w-full flex flex-row justify-end">
            <a href="https://t.me/topsecretagent_007" className="text-white text-sm pb-8 items-center">If you are interested in developing these projects, please contact me {"->"} </a>
          </div>
        </div>
        <Image src={Avatar} alt="Avatar" className="w-4/5 xs:w-2/5 rounded-lg border-[1px] border-[#64ffda] shadow-lg shadow-[#64ffda]" />
      </div>
    </div>
  );
}
