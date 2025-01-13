"use client"

import { useState, useEffect } from "react";
import animationData from '../../../public/menu_square.json'
import LottieAnimation from "./lottieAnimate";
import { usePathname } from 'next/navigation';
import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
}

const Header = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  let lastScrollTop = 0;

  const pathname = usePathname();

  const homeNavItems: NavItem[] = [
    { href: '#fishka', label: 'Фішка' },
    { href: '#consultants', label: 'КОНСУЛЬТАНТИ' },
    { href: '#for_whom', label: 'Для кого' },
    { href: '#products', label: 'послуги' },
    { href: '#how_works', label: 'як це працює' },
    { href: '#reviews', label: 'історії успіху' },
    { href: '#Faq', label: 'ЧАСТІ ПИТАННЯ' },
  ];

  const intensiveNavItems: NavItem[] = [
    { href: '#IntensiveForWhom', label: 'КОРИСНО ДЛЯ' },
    { href: '#IntensiveAbout', label: 'ЩО НА ВИХОДІ' },
    { href: '#IntensiveProgram', label: 'програма' },
    { href: '#IntensiveCurator', label: 'КУРАТОР' }
  ];

  const navItems = pathname === '/intensive' ? intensiveNavItems : homeNavItems;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > 50) { // Порог для появления хедера (например, после геро-секции)
        if (currentScroll > lastScrollTop) {
          // Скролл вниз
          setShowHeader(true);
        } else {
          // Скролл вверх
          setShowHeader(true);
        }
      } else {
        setShowHeader(false); // Скрыть хедер, если в пределах геро-секции
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"
          onClick={toggleMenu}
        />
      )}


      <header
        className={`w-full fixed bg-black z-10 top-0 flex justify-between transition-transform duration-300 px-4 py-3 lg:px-6 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
      <a href="/">
        <img src={'/svg/skelya_logo.svg'} alt='' className='h-[42px] lg:h-[56px]'/>
      </a>
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
          <Link href="/">
            <img src={'/svg/skelya_logo.svg'} alt='' className='h-[42px] md:h-[56px]'/>
          </Link>
            <button
              onClick={toggleMenu}
              className=" text-white p-2 rounded-lg"
            >
              <img src={'/svg/close_btn.svg'} alt='' className='h-[32px] md:h-[32px]'/>
            </button>
          </div>
          <ul className="flex flex-col gap-3 uppercase pt-[40px] font-semibold text-[22px] 2xl:pt-[15%] 2xl:font-bold 2xl:text-[40px]">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className="w-full hover:bg-white hover:text-black" 
                onClick={closeMenu}
              >
                <a 
                  href={item.href} 
                  className="flex h-auto w-full px-4 pl-[40px] lg:pl-[50px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-3 uppercase font-semibold text-[20px] pt-[32px] 2xl:text-[32px] 2xl:pt-[15%]">
            <li className="w-full hover:bg-white hover:text-black">
              <a href="https://t.me/skelya_careers" className="flex h-auto w-full px-3 pl-[40px] lg:pl-[50px]"># telegram</a>
            </li>
            <li className="w-full hover:bg-white hover:text-black">
              <a href="https://www.instagram.com/skelya.careers/" className="flex h-auto w-full px-3 pl-[40px] lg:pl-[50px]"># instagram</a>
            </li>
            <li className="w-full hover:bg-white hover:text-black">
              <a href="https://www.tiktok.com/@skelya_careers" className="flex h-auto w-full px-3 pl-[40px] lg:pl-[50px]"># tiktok</a>
            </li>
            <li className="w-full hover:bg-white hover:text-black">
              <a href="mailto:hi@skelya.careers" className="flex h-auto w-full px-3 pl-[40px] lg:pl-[50px]"># email</a>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Header;