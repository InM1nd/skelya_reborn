import React, { FC, ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return (
    <div className="w-full relative flex justify-center bg-[#232228]">
      <div className='container flex justify-end items-center'>
        <h2 className='text-white text-4xl pr-[18px] font-bold uppercase py-4 md:text-6xl md:py-6 xl:text-7xl'>
          {children}
        </h2>
      </div>
    </div>
  );
};

export default Title;
