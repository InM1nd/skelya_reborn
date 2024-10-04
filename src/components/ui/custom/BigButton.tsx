'use client'

import { useState } from "react";

interface BigButtonProps {
  text: string;
}

export const BigButton: React.FC<BigButtonProps> = ({ text }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex items-center">
      <button 
        className="w-full flex justify-between bg-purple-main items-center text-black text-2xl font-bold text-left uppercase pl-4 hover:bg-blue sm:text-3xl md:pl-12 md:text-5xl xl:text-8xl group hover:stroke-change"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        {text}
        <img 
          src={"/svg/Arrow.svg"} 
          alt='' 
          className={`transition-colors duration-300 ${isHovered ? 'hovered' : ''} h-[60px] md:h-[80px] xl:h-full`} 
        />
      </button>
    </div>
  );
};