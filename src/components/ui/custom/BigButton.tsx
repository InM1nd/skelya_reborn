'use client';

// import { useState } from "react";
import { sendGAEvent } from '@next/third-parties/google';
import { ArrowUpRight } from "lucide-react";

export interface BigButtonProps {
  text: string;
  onClick?: () => void;
}

export const BigButton: React.FC<BigButtonProps> = ({ text, onClick }) => {
  // const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    sendGAEvent('event', 'buttonClicked', { value: 'xyz' });
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="w-full flex items-center">
      <button
        className="w-full flex bg-pink items-center justify-center text-black text-[18px] font-bold uppercase py-[20px] hover:bg-blue md:pl-12 md:text-[28px] xl:text-[52px] group hover:stroke-change transition-colors duration-300"
        // onMouseEnter={() => setIsHovered(true)} 
        // onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {text}
        <ArrowUpRight className='ml-2 w-6 h-6 sm:w-8 sm:h-8 xl:w-16 xl:h-16'/>
      </button>
    </div>
  );
};
