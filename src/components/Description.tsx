import React from "react";
import Image from "next/image";
import DiscriptionImg from "@/../public/image/bot-description.png"
import LogoImg from "@/../public/image/logo-light.png"
import { SocialLink } from "@/config/ConfigData";
export default function Description() {
  return (
    <div className="container xs:px-8 px-3 pt-16">
      <div className="w-full h-full flex flex-row gap-4 justify-end items-center">
        <div className="hidden xs:flex flex-col w-[25%] h-full justify-center items-start px-3">
          <Image src={LogoImg} alt="LogoImg" className="w-32 rounded-full shadow-lg shadow-[#64ffda]" />
        </div>
        <div className="w-full xs:w-[70%] h-full flex flex-col border-[1px] border-[#64ffda] rounded-lg gap-2 xs:gap-3 px-3 xs:px-5 py-3 xs:py-7 lg:py-10 shadow-lg shadow-[#64ffda] relative">
          <Image src={DiscriptionImg} alt="DiscriptionImg" className="absolute hidden xs:flex w-40 lg:w-60 -left-[114px] lg:-left-[170px]" />
          <div className="w-full flex flex-col font-extrabold text-[#64ffda] text-4xl text-center">
            Bot Sales
          </div>
          <div className="w-full h-full font-semibold text-sm xs:text-md lg:text-xl text-start text-gray-200 xs:pl-10 lg:pl-16">
            As a developer with many years of development experience, I have participated in many projects and developed many projects.
            <br />
            In the process, I have developed many bots, and now I have developed bots of various types and purposes, including new trading bots that many users are looking for.
            <br />
            This site is a site to introduce the bots I have created.
            <br />
            If you are interested in these bots, please contact <a href="https://t.me/topsecretagent_007" className="text-[#64ffda] cursor-pointer">me</a> at any time.
            <br />
            Lastly, if you like my site and bots, please give me many recommendations and <a href="https://github.com/topsecretagent007" className="text-[#64ffda] cursor-pointer">stars</a>.
          </div>
          <div className='flex flex-row justify-end items-center gap-2 text-md xs:text-xl pt-5 lg:pt-10'>
            {SocialLink.map((item: any, index: number) => {
              return (
                <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className='rounded-full flex flex-col p-[5px] xs:p-[10px] bg-[#64ffda]/10 text-[#64ffda] border-[1px] border-[#64ffda] cursor-pointer'>
                    {item.icon}
                  </div>
                </a>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
