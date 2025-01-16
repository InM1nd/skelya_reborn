'use client'

import Title from "@/components/global/title"
import React from 'react';


const IntensiveAbout = () => {

  return(
    <section className="w-full h-full pb-7 sm:pb-14" id="IntensiveAbout">
      <Title>ЩО НА ВИХОДІ</Title>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full py-6 px-4 xl:px-6 xl:py-[60px]">
        {/* First Card */}
        <div className="col-span-1 lg:col-span-3 lg:row-span-3 border-4 border-[#F4D06F]">
          <h2 className="text-[40px] sm:text-[60px] xl:text-[80px] font-semibold font-unbounded bg-[#F4D06F] p-4">01</h2>
          <p className="text-[20px] sm:text-[26px] xl:text-[34px] font-medium text-white p-6 sm:p-8 2xl:py-[80px] lg:px-8">
            Готове резюме, супровідний лист та оптимізований профіль у LinkedIn
          </p>
        </div>

        {/* Middle Section */}
        <div className="col-span-1 lg:col-span-5 lg:row-span-3">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Second Card */}
            <div className="col-span-1 lg:col-span-5 border-4 border-emerald-400 flex flex-col lg:flex-row lg:items-center">
              <h2 className="text-[40px] sm:text-[60px] xl:text-[80px] font-semibold font-unbounded bg-emerald-400 p-4 w-full lg:h-full lg:w-auto flex items-center lg:justify-center">02</h2>
              <p className="text-[20px] sm:text-[26px] xl:text-[34px] font-medium text-white p-6 sm:p-8 2xl:py-[80px] lg:px-8">
                Персональна стратегія пошуку роботи
              </p>
            </div>
            {/* Third Card */}
            <div className="col-span-1 lg:col-span-5 border-4 border-purple-main flex flex-col lg:flex-row items-center">
              <h2 className="text-[40px] sm:text-[60px] xl:text-[80px] font-semibold font-unbounded bg-purple-main p-4 w-full lg:h-full lg:w-auto flex items-center xl:justify-center">03</h2>
              <p className="text-[20px] sm:text-[26px] xl:text-[34px] font-medium text-white p-6 sm:p-8 2xl:py-[80px] lg:px-8">
                Навички пошуку роботи та самопрезентації для успішного проходження інтерв&rsquo;ю
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="col-span-1 lg:col-span-4 lg:row-span-3 border-4 border-purple-light">
          <h2 className="text-[40px] sm:text-[60px] xl:text-[80px] font-semibold font-unbounded bg-purple-light p-4">04</h2>
          <p className="text-[20px] sm:text-[26px] xl:text-[34px] font-medium text-white p-6 sm:p-8 2xl:py-[80px] lg:px-8">
            Розширення мережі професійних контактів, включаючи знайомства з рекрутерами
          </p>
        </div>
      </div>
    </section>
  )
}

export default IntensiveAbout