'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Success = () => {

  const [isHovered, setIsHovered] = useState(false);

  return (
        <section className='bg-black w-full h-screen flex justify-center text-lg py-10'>
          <div className='h-full max-w-4xl px-2'>
          <div className='pb-10'>
            <Link href="/">
              <img src={'/svg/skelya_logo.svg'} alt='' className='h-[42px] lg:h-[56px]'/>
            </Link>
          </div>  
          <div className='flex flex-col justify-center gap-5 mb-10 text-white'>
          <h1 className="text-5xl text-center font-bold text-green-600 mb-10">
            СКЕЛЬОВО! <br/> Все пройшло як по маслу!
          </h1>
            <p className="text-2xl text-center mb-10">
              Переходь у наш Telegram-бот і розкажи детальніше про свій запит — протягом двох днів знайдемо для тебе консультанта!
            </p>
            <Link 
              href="https://t.me/SkelyaCareersBot" 
              className="w-full h-[100px] flex justify-center items-center text-center mt-4 px-4 bg-purple-main text-4xl text-black font-bold hover:bg-blue transition duration-200 uppercase sm:pl-10 sm:text-5xl sm:justify-between sm:px-0 "
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}
            >
                Перейти до бота
                <svg viewBox="0 0 207 194" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-fit h-[100px] hidden sm:block'>
                <path d="M4 4H202.769V190H4.00006L4 4Z" fill="#040000" stroke="#6D61FF" stroke-width="8" className={`fill-current transition-colors ${isHovered ? 'stroke-[#95D4F8]' : 'stroke-[#6D61FF]'}`}/>
                <path d="M155.216 50.4985L65.3227 130.184M65.3227 130.184L66.0685 63.2519M65.3227 130.184L132.069 130.928" stroke="#6D61FF" stroke-width="8.31776" className={`fill-current transition-colors ${isHovered ? 'stroke-[#95D4F8]' : 'stroke-[#6D61FF]'}`}/>
                </svg>
            </Link>
          </div>
          <div className='flex justify-center'>
            <Link 
              className="w-full h-[100px] flex justify-center items-center mt-4  bg-purple-main text-4xl text-black font-bold hover:bg-blue transition duration-200 uppercase sm:pl-10 sm:justify-start sm:text-5xl" href='/'
            >
              На головну
            </Link>
          </div>
          </div>
        </section>
  )
}

export default Success