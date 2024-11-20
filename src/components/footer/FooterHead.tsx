import React from "react";
import Image from "next/image";
import BotImg from "@/../public/image/bot-footer.png"
import TradingImg from "@/../public/image/trading.png"

export default function FooterHead() {
  return (
    <div className="h-full w-full flex flex-col justify-end px-3 pt-8 bg-no-repeat bg-top bg-cover" style={{ backgroundImage: "url('./image/bg-img.png')" }}>
      <div className="container xs:px-8 px-3">
        <div className="w-full flex flex-row gap-8 justify-center items-end">
          <Image src={TradingImg} alt="TradingImg" className="w-2/3 lg:w-2/5" />
          <Image src={BotImg} alt="botimg" className="w-1/3 lg:w-1/5" />
        </div>
      </div>
    </div>
  );
}
