import React, { FC, ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return (
    <div className="w-full relative flex justify-center bg-[#232228]">
      <div className='w-full flex justify-start'>
        <h2 className=' font-unbounded text-white text-[30px] pl-4 font-bold uppercase py-4 sm:pl-[40px] md:text-6xl md:py-6 xl:text-7xl'>
          {children}
        </h2>
      </div>
    </div>
  );
};

export default Title;
