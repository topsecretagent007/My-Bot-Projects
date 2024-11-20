"use client"
import React from "react";
import BotList from "./BotList";
import About from "./About";
import OtherBots from "./OtherBots";
import Description from "./Description";


export default function IndexPage() {

  return (
    <div className="w-full h-full min-h-[calc(100vh-224px)] py-8">
      <Description />
      <About />
      <BotList />
      <OtherBots />
    </div>
  )
}