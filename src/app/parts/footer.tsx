'use client'

import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import Link from "next/link";
import { sendGAEvent } from '@next/third-parties/google'

interface NavItem {
  href: string;
  label: string;
  isHighlighted?: boolean;
}

export const Footer = () => {
  const pathname = usePathname();

  const homeNavItems: NavItem[] = [
    { href: '#fishka', label: 'Трішки цифр' },
    { href: '#consultants', label: 'КОНСУЛЬТАНТИ' },
    { href: '#products', label: 'послуги' },
    { href: '#intencive', label: 'Інтенсив', isHighlighted: true },
    { href: '#reviews', label: 'історії успіху' },
    { href: '#Faq', label: 'ЧАСТІ ПИТАННЯ' },
  ];

  const intensiveNavItems: NavItem[] = [
    { href: '#IntensiveForWhom', label: 'ЦЕ ДЛЯ ТЕБЕ' },
    { href: '#IntensiveAbout', label: 'ЩО НА ВИХОДІ' },
    { href: '#IntensiveProgram', label: 'програма' },
    { href: '#IntensiveCurator', label: 'КУРАТОР' }
  ];

  const navItems = pathname === '/intensive' ? intensiveNavItems : homeNavItems;

    // Social media click handler
    const handleSocialClick = (platform: string) => {
      sendGAEvent('event', 'Social_Link_Click', {
        platform: platform,
        location: 'footer'
      });
    };
  
    // Menu item click handler
    const handleMenuClick = (label: string) => {
      sendGAEvent('event', 'Menu_Link_Click', {
        item: label,
        location: 'footer'
      });
    };
  
    // Legal link click handler
    const handleLegalClick = (document: string) => {
      sendGAEvent('event', 'Legal_Link_Click', {
        document: document,
        location: 'footer'
      });
    };
  
    // Contact button click handler
    const handleContactClick = () => {
      sendGAEvent('event', 'Contact_Button_Click', {
        location: 'footer'
      });
    };

  return (
    <section className="w-full text-white flex justify-center p-4 lg:p-6 bg-gray">
      <div className="w-full flex-col uppercase">
      <a className="mt-[32px] w-full flex bg-pink text-black font-bold text-[18px] uppercase items-center justify-center py-5 px-6 lg:hidden hover:bg-blue transition-colors duration-300" href="https://t.me/skelya_support" onClick={handleContactClick}>
      поставити питання
        <ArrowUpRight className="ml-3" size={20} />
      </a>
        <div className="pt-[50px] flex flex-row justify-between pb-60 text-2xl">
          <div className="w-full hidden text-[13px] lg:block xl:text-[26px]">
            <a className="flex bg-pink text-black font-bold text-3xl uppercase items-center py-5 px-6 mb-[52px] max-w-fit hover:bg-blue transition-colors duration-300" href="https://t.me/skelya_support" onClick={handleContactClick}>поставити питання<ArrowUpRight className="ml-3" size={40} /></a>
            <p className="pb-7 font-semibold">2025, Skelya career</p>
            <ul className="flex flex-col gap-3 xl:gap-6">
              <li className="hover:underline"><a href="/legal/privacy-policy" onClick={() => handleLegalClick('privacy-policy')}>Політика конфіденційності</a></li>
              <li className="hover:underline"><a href="/legal/terms" onClick={() => handleLegalClick('terms')}>Угода Користувача</a></li>
            </ul>
          </div>

          <div className="w-full flex flex-row-reverse justify-between md:gap-[50px] lg:flex-row lg:justify-end xl:gap-[120px] 2xl:gap-[164px]">
            <div className="text-[16px] xl:text-[26px]">
              <h4 className="pb-7 font-semibold xl:text-[26px]">ми у соц мережах</h4>
              <ul className="flex flex-col gap-[6px] xl:gap-6">
                <li className="hover:underline">
                  <a href="https://t.me/skelya_career_support" onClick={() => handleSocialClick('telegram')}className="block w-full h-full leading-0 leading-normal">
                    telegram
                  </a>
                </li>
                <li className="hover:underline">
                  <a href="https://www.instagram.com/skelya.careers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" onClick={() => handleSocialClick('instagram')} className="block w-full h-full leading-0 leading-normal">
                    instagram
                  </a>
                </li>
                <li className="hover:underline">
                  <a href="https://www.tiktok.com/@skelya.career?is_from_webapp=1&sender_device=pc" onClick={() => handleSocialClick('tiktok')} className="block w-full h-full leading-0 leading-normal">
                    tiktok
                  </a>
                </li>
                <li className="hover:underline">
                  <a href="mailto:hi@skelya.careers" onClick={() => handleSocialClick('email')} className="block w-full h-full leading-0 leading-normal">
                    email
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-[16px] xl:text-[26px]">
              <h4 className="pb-7 font-semibold xl:text-[26px]">меню</h4>
              <ul className="flex flex-col gap-[6px] xl:gap-6">
                {navItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="hover:underline" 
                  >
                    <a 
                      href={item.href} 
                      onClick={() => handleMenuClick(item.label)}
                      className={`block w-full h-full leading-0 leading-normal ${
                        item.isHighlighted ? 'text-blue hover:underline' : ''
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>  
        </div>

        
        <div className="block lg:hidden pb-4 ">
        <div className="">
            <p className="pb-5 text-xs font-unbounded">2024, Skelya career</p>  
        </div>
          <img src={"/svg/Hero_Words.svg"} alt='' className="w-full" />
          <ul className="flex justify-between text-xs pt-5">
            <li><Link href="/legal/privacy-policy" onClick={() => handleLegalClick('privacy-policy')}>Політика конфіденційності</Link></li>
            <li>|</li>
            <li><Link href="/legal/terms" onClick={() => handleLegalClick('terms')}>Угода Користувача</Link></li>
          </ul>
          
        </div>

        <img src={"/svg/Hero_Words.svg"} alt='' className="w-full hidden lg:block" />
        
      </div>
    </section>
  )
}
