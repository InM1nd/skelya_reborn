'use client'

import { ArrowUpRight } from "lucide-react";
import { sendGAEvent } from '@next/third-parties/google';
import ContactFormModal from "@/components/global/modal";
import React, { useState } from 'react';

const IntensiveHero = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    sendGAEvent('event', 'Register_Button_Click', {
      location: 'intensive_hero'
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return(
    <>
      <section className="w-full flex flex-col items-center pb-2 px-2 pt-[20px] sm:pb-5 md:px-4 2xl:pt-[50px] lg:pb-5">
        
      <div className="w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-12">
          <div className="bg-gray flex flex-col pt-8 sm:pt-12 2xl:pt-[100px]">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center px-4 pb-8 sm:px-6 sm:pb-12 2xl:pl-[50px] 3xl:pb-[100px] text-white lg:w-1/2 2xl:max-w-[30vw]">
                <p className="text-xl mb-6 sm:mb-6 sm:text-2xl 2xl:text-[32px]">
                  Скельовий інтенсив
                </p>
                <h2 className="text-blue text-2xl font-bold uppercase font-unbounded mb-4 sm:text-3xl 2xl:text-[52px]"> Пошук роботи мрії</h2>
                <p className="text-xl sm:text-2xl 2xl:text-[32px]">
                5-тижневий курс, який допоможе освоїти ключові кар&apos;єрні навички, підготуватися до пошуку роботи, впевнено пройти співбесіди та отримати офер.
                </p>
              </div>
              <div className="w-full h-full flex items-center justify-center lg:w-2/3">
                <img 
                  src="/svg/Intensive_Art_Svg.svg" 
                  className="w-full h-full object-contain lg:object-cover"
                  alt="Intensive Art"
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-between text-lg bg-blue gap-6 p-4 sm:text-[18px] sm:p-6 lg:flex-row xl:px-[50px] 3xl:p-[50px] lg:text-xl 2xl:text-2xl 3xl:text-3xl">
              <div>
                <h3 className="font-bold">СТАРТ:</h3>
                <p>6 лютого 2025</p>
              </div>
              <div>
                <h3 className="font-bold">ГРУПА:</h3>
                <p>10 місць</p>
              </div>
              <div>
                <h3 className="font-bold">ФОРМАТ:</h3>
                <p>онлайн інтенсив</p>
              </div>
              <div>
                <h3 className="font-bold">ДЛЯ КОГО:</h3>
                <p>шукачам роботи та світчерам</p>
              </div>
              <div>
                <h3 className="font-bold">КУРАТОР:</h3>
                <p>Марія зі Скеля</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <button
        onClick={handleRegisterClick}
        className="flex w-full mt-8 items-center border-4 border-blue justify-center text-blue text-2xl font-bold uppercase py-[20px] 2xl:py-[50px] hover:border-purple-main hover:text-purple-main sm:text-3xl md:pl-12 2xl:text-[52px] group hover:stroke-change transition-colors duration-300"
        >
          зареєструватися <ArrowUpRight size={50} />
        </button>
        <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} toggleModal={() => setIsModalOpen(!isModalOpen)} />
      </section>
    </>
  )
}

export default IntensiveHero;


