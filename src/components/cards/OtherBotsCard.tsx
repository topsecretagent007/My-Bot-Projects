import React from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function OtherBotsCard({ data }: { data: any }) {
  return (
    <div className="w-[320px] h-full flex flex-col justify-center px-2 py-3 rounded-lg border-[1px] border-[#64ffda] shadow-lg shadow-[#64ffda] gap-2 mx-auto">
      <div className="w-full text-lg font-semibold text-white text-start">{data.name}</div>
      <div className="w-full text-sm font-momo text-gray-300 text-start py-2 px-1">
        {data.description}
      </div>
      <div className="w-full justify-between items-center flex flex-row px-2 text-md font-semibold text-[#64ffda]">
        <div className="">{data.price}</div>
        <a href={data.link} className="w-full justify-end flex flex-row items-center gap-2 cursor-pointer">
          <RiLogoutCircleRLine />
        </a>
      </div>
    </div>
  );
}
