"use client"
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Image from "next/image";
import BouncyImage from "./others/BountImage";
import BouncyImg1 from "@/../public/image/bouncy-image-01.png"
import SolImg from "@/../public/image/sol.png"
import TokenImg from "@/../public/image/token-bots.png"
const YouTubeEmbed = dynamic(() => import("./cards/YouTubeEmbed"), {
  ssr: false, // Disable SSR
});

export default function BotList() {

  return (
    <div className="w-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('./image/botlist-bg-img.png')" }}>
      <div className="container xs:px-8 px-3 py-6">
        <div className="w-full flex flex-wrap mx-auto gap-8 items-start text-white relative">
          <BouncyImage src={SolImg} alt="Bouncy Demo Image" style="h-20 w-20 absolute top-20 right-10 z-10" />
          <BouncyImage src={SolImg} alt="Bouncy Demo Image" style="h-20 w-20 absolute top-32 left-16 z-10" />
          <BouncyImage src={SolImg} alt="Bouncy Demo Image" style="h-20 w-20 absolute bottom-12 left-12 z-10" />
          <BouncyImage src={SolImg} alt="Bouncy Demo Image" style="h-20 w-20 absolute bottom-80 right-8 z-10" />
          <Image src={TokenImg} alt="TokenImg" className="absolute hidden xs:w-1/2 z-10 mx-auto xs:flex flex-col left-1/4 top-1/4" />
          <div className="text-4xl font-extrabold flex flex-col text-center mx-auto pt-8 pb-12 relative justify-center z-20">
            Most Popular Bots
            <BouncyImage src={BouncyImg1} alt="Bouncy Demo Image" style="h-24 w-24 absolute top-0 -left-40 hidden md:flex" />
            <BouncyImage src={BouncyImg1} alt="Bouncy Demo Image" style="h-24 w-24 absolute top-0 -right-40 hidden md:flex" />
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4 z-20">
            <div className="w-full lg:w-1/2 flex flex-col gap-3 px-2">
              <div className="w-full flex-col gap-2 text-center px-2 text-2xl font-extrabold text-[#64ffda]">
                Raydium and Pumpfun Bundler Demo
              </div>
              <div className="w-full flex flex-col text-start items-start font-semibold px-2">
                The Raydium and PumpFun Sniper bots are designed to bundle buy with multiple wallets without making another wallets buy faster than creator, ensuring that pool creator is always the first buyers of the pool that he created. This tool once used correclty, is very good start for a potential project.
              </div>
              <div className="w-full justify-between items-center flex flex-row px-2 text-md font-semibold text-[#64ffda]">
                <div className="flex flex-row">$2000</div>
                <a href="https://github.com/topsecretagent007/raydium-bundler" className="w-full justify-end flex flex-row items-center gap-2 cursor-pointer">
                  Private
                  <RiLogoutCircleRLine />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col p-2 h-full border-[1px] border-[#64ffda] shadow-lg shadow-[#64ffda] rounded-lg">
              <YouTubeEmbed
                videoId="f_wO53OsUj0"
                title="Raydium and Pumpfun Sniper Demo"
              />
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4 z-20">
            <div className="w-full lg:w-1/2 flex lg:hidden flex-col gap-3 px-2">
              <div className="w-full flex flex-col gap-2 text-center px-2 text-2xl font-extrabold text-[#64ffda]">
                Raydium and Pumpfun Sniper Demo
              </div>
              <div className="w-full flex flex-col text-start items-start font-semibold px-2">
                The Raydium and PumpFun Sniper bots are designed to catch the pool at the creation time and make the buy transactions, and send it with jito transaction with proper fee, which boost the transaction speed very fastly.
                It makes you to buy token faster than any others in the potential token pools.
              </div>
              <div className="w-full justify-between items-center flex flex-row px-2 text-md font-semibold text-[#64ffda]">
                <div className="flex flex-row">$1600</div>
                <a href="https://github.com/topsecretagent007/raydium-sniper" className="w-full justify-end flex flex-row items-center gap-2 cursor-pointer">
                  Private
                  <RiLogoutCircleRLine />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col p-2 h-full border-[1px] border-[#64ffda] shadow-lg shadow-[#64ffda] rounded-lg">
              <YouTubeEmbed
                videoId="uV7I7g9rh74"
                title="Raydium and Pumpfun Bundler Demo"
              />
            </div>
            <div className="w-full lg:w-1/2 hidden lg:flex flex-col gap-3 px-2">
              <div className="flex w-full flex-col gap-2 text-center px-2 text-2xl font-extrabold text-[#64ffda]">
                Raydium and Pumpfun Sniper Demo
              </div>
              <div className="w-full flex flex-col text-start items-start font-semibold px-2">
                The Raydium and PumpFun Sniper bots are designed for fast and automated trading on specific platforms, targeting opportunities like token launches and sudden price movements. They use real-time data monitoring, API integration, and precise algorithms to execute trades instantly. The bots are optimized for speed, security, and reliability, with customizable settings for user-specific strategies.
              </div>
              <div className="w-full justify-between items-center flex flex-row px-2 text-md font-semibold text-[#64ffda]">
                <div className="flex flex-row">$1600</div>
                <a href="https://github.com/topsecretagent007/raydium-sniper" className="w-full justify-end flex flex-row items-center gap-2 cursor-pointer">
                  Private
                  <RiLogoutCircleRLine />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4 z-20">
            <div className="w-full lg:w-1/2 flex flex-col gap-3 px-2">
              <div className="w-full flex-col gap-2 text-center px-2 text-2xl font-extrabold text-[#64ffda]">
                Volume Bot V2 Demo
              </div>
              <div className="w-full flex flex-col text-start items-start font-semibold px-2">
                The Raydium and Pumpfun volume bot is designed to boost volume of the current pools in dexs like rayidum and pumpfun, with continuous buy and sell swap transactions, making it a very good tool to control the volume of the pool.
              </div>
              <div className="w-full justify-between items-center flex flex-row px-2 text-md font-semibold text-[#64ffda]">
                <div className="flex flex-row">$1600</div>
                <a href="https://github.com/topsecretagent007/volume-bot" className="w-full justify-end flex flex-row items-center gap-2 cursor-pointer">
                  Private
                  <RiLogoutCircleRLine />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col p-2 h-full border-[1px] border-[#64ffda] shadow-lg shadow-[#64ffda] rounded-lg">
              <YouTubeEmbed
                videoId="ji_oXmmiYOg"
                title="Raydium and Pumpfun Sniper Demo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}