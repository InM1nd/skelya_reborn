'use client'

import { useState } from "react";

export interface BigButtonProps {
  text: string;
  onClick?: () => void;
}

export const BigButton: React.FC<BigButtonProps> = ({ text, onClick }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex items-center">
      <button 
        className="w-full flex justify-between bg-purple-main items-center text-black text-2xl font-bold text-left uppercase pl-4 hover:bg-blue sm:text-3xl md:pl-12 md:text-5xl group hover:stroke-change transition-colors duration-300"
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        >
        {text}
          <svg viewBox="0 0 207 194" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-fit h-[70px] sm:h-[100px] md:h-[120px] xl:h-[150px]'>
            <path d="M4 4H202.769V190H4.00006L4 4Z" fill="#040000" stroke="#6D61FF" stroke-width="8" className={`fill-current transition-colors ${isHovered ? 'stroke-[#95D4F8]' : 'stroke-[#6D61FF]'}`}/>
            <path d="M155.216 50.4985L65.3227 130.184M65.3227 130.184L66.0685 63.2519M65.3227 130.184L132.069 130.928" stroke="#6D61FF" stroke-width="8.31776" className={`fill-current transition-colors ${isHovered ? 'stroke-[#95D4F8]' : 'stroke-[#6D61FF]'}`}/>
          </svg>
      </button>
    </div>
  );
};