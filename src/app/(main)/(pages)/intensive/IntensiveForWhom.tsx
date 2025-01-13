'use client'

import Title from "@/components/global/title"
import React from 'react';


const IntensiveForWhom = () => {

  return(
    <section className="w-full h-full pb-7 sm:pb-14" id="IntensiveForWhom">
      <Title>КОРИСНО ДЛЯ</Title>
      <div className="w-full grid md:grid-cols-2 gap-8 py-6 px-4 xl:px-6 xl:py-[60px]">
        <div className="flex flex-col h-full">
          <div className="">
            <img src="/svg/Intensive_Purp.svg" className="object-cover w-full h-full" />
          </div>
          <div className="border-4 border-purple-main p-6 flex-1 2xl:px-[50px] 2xl:py-16 ">
            <h5 className="uppercase text-purple-main text-[20px] font-bold font-unbounded lg:text-[26px] 2xl:text-3xl">Шукачі роботи</h5>
            <p className="text-white text-[20px] lg:text-[26px] 2xl:text-3xl">які хочуть систематизувати процес пошуку</p>
          </div>
        </div>
        <div className="flex flex-col h-full">
          <div className="">
            <img src="/svg/Intensive_Green.svg" className="object-cover w-full h-full" />
          </div>
          <div className="border-4 border-green p-6 flex-1 2xl:px-[50px] 2xl:py-16">
            <h5 className="uppercase text-green text-[20px] font-bold font-unbounded lg:text-[26px] 2xl:text-3xl">Світчери</h5>
            <p className="text-white text-[20px] lg:text-[26px] 2xl:text-3xl">які планують змінити професію та потребують допомоги з адаптацією профілю під нові цілі</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntensiveForWhom