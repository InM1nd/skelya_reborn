"use client"

import { useState } from "react";
import animationData from '../../../public/menu_square.json'
import LottieAnimation from "./lottieAnimate";

const Header = ({ }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"
          onClick={toggleMenu}
        />
      )}


    <header className="container fixed z-10 top-0 pt-4 px-4 flex justify-between sm:pt-8 2xl:px-[50px] 2xl:pt-[50px]">
      <img src={'/svg/skelya_logo.svg'} alt='' className='h-[42px] lg:h-[56px]'/>
      <div className="flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <LottieAnimation animationData={animationData} />
        </button>
      </div>
    </header>



    <div
        className={`fixed top-0 right-0 h-full bg-gray text-white transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-full xl:w-[30vw] `}
      >
        <div className="py-10 relative">
          <div className="flex w-full px-10 justify-between">
            <img src={'/svg/skelya_logo.svg'} alt='' className='h-[42px] md:h-[56px]'/>
            <button
              onClick={toggleMenu}
              className=" text-white p-2 rounded-lg"
            >
              <img src={'/svg/close_btn.svg'} alt='' className='h-[32px] md:h-[32px]'/>
            </button>
          </div>
          <ul className="flex flex-col gap-3 uppercase pt-[40px] font-semibold text-[32px] lg:text-[40px] lg:pt-[100px] lg:font-bold">
            <li className="w-full hover:bg-white hover:text-black">
              <a href="#for_whom" className="flex h-auto w-full px-4 pl-[40px] lg:pl-[50px]">Для кого</a>
            </li>
            <li className="w-full hover:bg-white hover:text-black">
              <a href="#how_works" className="flex h-auto w-full px-4 pl-[40px] lg:pl-[50px]">як це працює</a>
            </li>
            <li className="w-full hover:bg-white hover:text-black">
              <a href="#products" className="flex h-auto w-full px-4 pl-[40px] lg:pl-[50px]">послуги</a>
            </li>
            <li className="w-full hover:bg-white hover:text-black">
              <a href="#reviews" className="flex h-auto w-full px-4 pl-[40px] lg:pl-[50px]">історії успіху</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-3 uppercase font-semibold text-[26px] pt-[32px] lg:text-[32px] lg:pt-[100px]">
            <li className="w-full hover:bg-white hover:text-black">
              <a href="#" className="flex h-auto w-full px-3 pl-[40px] lg:pl-[50px]"># telegram</a>
            </li>
            <li className="w-full hover:bg-white hover:text-black">
              <a href="#" className="flex h-auto w-full px-3 pl-[40px] lg:pl-[50px]"># instagram</a>
            </li>
            <li className="w-full hover:bg-white hover:text-black">
              <a href="#" className="flex h-auto w-full px-3 pl-[40px] lg:pl-[50px]"># tiktok</a>
            </li>
            <li className="w-full hover:bg-white hover:text-black">
              <a href="#" className="flex h-auto w-full px-3 pl-[40px] lg:pl-[50px]"># email</a>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Header;