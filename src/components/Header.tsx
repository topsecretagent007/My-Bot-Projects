import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoLight from "@/../public/image/logo-light.png"

const Header: FC = () => {

  return (
    <header className="w-full h-20 flex flex-row items-center border-b-[1px] border-[#64ffda] shadow-lg shadow-[#64ffda]">
      <div className="container">
        <div className="flex items-center justify-between px-6 text-[#64ffda]">
          <Link href={"/"} className="harlow flex flex-row gap-3 items-center">
            <Image src={LogoLight} alt="LogoLight" className="w-12 h-12" />
            <div className='font-semibold hidden xs:flex text-md xl:text-2xl uppercase'>
              Bot Sales
            </div>
            <div className=' font-semibold flex xs:hidden text-md xl:text-2xl uppercase'>
              Bots
            </div>
          </Link>
          <Link href={"https://tsagent.online"} className="">
            <div className='hidden xs:flex font-semibold text-md xl:text-xl'>
              Lendon Bracewell
            </div>
            <div className='flex xs:hidden font-semibold text-md xl:text-xl'>
              LB
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
