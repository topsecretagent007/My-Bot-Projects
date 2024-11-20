import React from "react";
import OtherBotsCard from "./cards/OtherBotsCard";
import { OtherBotsData } from "@/config/ConfigData";

export default function OtherBots() {
  return (
    <div className="container xs:px-8 px-3 ">
      <div className="h-full flex flex-col justify-center px-3 py-12 lg:py-20">
        <div className="w-full text-4xl font-extrabold flex flex-col text-center mx-auto pt-8 pb-12 text-white">Other Bots</div>
        <div className="w-full flex flex-wrap gap-8 items-start">
          {OtherBotsData.map((item: any, index: number) => {
            return (
              <OtherBotsCard key={index} data={item} />
            )
          })}
        </div>
      </div>
    </div>
  );
}
