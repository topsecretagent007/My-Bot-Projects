import { FC } from "react";
import Link from "next/link";
import { SocialLink } from "@/config/ConfigData";
import Image from "next/image";
import LogoImg from "@/../public/image/logo-light.png"

const Footer: FC = () => {

  return (
    <footer className="w-full h-full flex flex-row items-center border-t-[1px] border-[#64ffda]">
      <div className="container py-4 px-6">
        <div className="w-full h-full flex flex-col gap-3 justify-center pt-4">
          <div className="items-end flex flex-row gap-3 mx-auto font-extrabold text-2xl xs:text-3xl text-[#64ffda]">
            <p>Lendon</p>
            <Image src={LogoImg} alt="logo-light" className="w-16 h-16" />
            <p>Bracewell</p>
          </div>
        </div>
        <div className="flex flex-col xs:flex-row items-center justify-between px-3 py-4 gap-4 text-[#64ffda]">
          <Link href={"/"} className="">
            <div className='font-semibold flex text-md xs:text-lg'>
              @ 2024 My Bot Projects
            </div>
          </Link>
          <div className='flex flex-row justify-start items-center gap-2 text-xl'>
            {SocialLink.map((item: any, index: number) => {
              return (
                <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className='rounded-full flex flex-col p-[10px] bg-[#64ffda]/10 text-[#64ffda] border-[1px] border-[#64ffda] cursor-pointer'>
                    {item.icon}
                  </div>
                </a>
              )
            })
            }
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
