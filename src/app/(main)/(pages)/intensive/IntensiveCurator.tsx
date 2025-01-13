'use client'

import Title from "@/components/global/title"
import { ArrowUpRight } from 'lucide-react';
import React from 'react';


const IntensiveCurator = () => {

  return(
    <section className="w-full h-full pb-7 sm:pb-14" id="how_works">
      <Title>КУРАТОР</Title>

      <div className="py-6 px-4 xl:px-6 xl:py-[60px]">
        <div className="mx-auto">
          {/* Video Player */}
          <div className="relative aspect-video border-4 border-[#7DD3FC] bg-gray-800 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/api/placeholder/1280/720"
              >
                <source src="your-video-source.mp4" type="video/mp4" />
                Ваш браузер не підтримує відео.
              </video>
            </div>
          </div>

          {/* Presenter Info */}
          <div className="mb-8 sm:mb-12 lg:mb-20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#7DD3FC] p-4 sm:p-6 lg:p-8">
              <div>
                <h2 className="text-xl sm:text-3xl lg:text-[32px] font-bold mb-1 sm:mb-0">МАРІЯ ЗІ СКЕЛЯ</h2>
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400">кар&apos;єрна консультантка</p>
              </div>
              <a 
                href="https://www.linkedin.com/in/mariiaternovska/" 
                className="flex items-center font-semibold text-xl sm:text-2xl lg:text-[32px] hover:underline mt-4 sm:mt-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpRight className="ml-1 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white border-4 border-[#7DD3FC] px-4 py-8 sm:p-6 lg:p-8">
              <div>
                <h3 className="font-bold mb-2 text-xl sm:text-2xl lg:text-[32px]">АЧІВКА:</h3>
                <p className="text-gray-300 text-lg sm:text-xl lg:text-3xl">Працевлаштувала 300+ людей в IT та Digital.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-xl sm:text-2xl lg:text-[32px]">ДОСВІД:</h3>
                <p className="text-gray-300 text-lg sm:text-xl lg:text-3xl">Працювала в освітніх проєктах Mate academy, Projector Institute та AI House.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-xl sm:text-2xl lg:text-[32px]">СУПЕРСИЛА:</h3>
                <p className="text-gray-300 text-lg sm:text-xl lg:text-3xl">вибудовувати карєрні стратегії та знаходити найкращі карєрні рішення</p>
              </div>
            </div>
          </div>

          {/* Price */}
            <div className="bg-pink text-black p-4 sm:p-6 lg:p-8 text-left mb-4 sm:mb-6">
              <p className="text-[18px] sm:text-[20px] lg:text-[32px] font-bold font-unbounded">ВАРТІСТЬ ІНТЕНСИВУ - 5200 ГРН</p>
            </div>

            {/* Registration Button */}
            <button className="flex w-full items-center border-4 border-pink justify-center text-pink text-xl sm:text-2xl lg:text-[52px] font-bold uppercase py-4 sm:py-6 lg:py-[50px] px-4 sm:px-6 transition-colors duration-300 hover:border-purple-main hover:text-purple-main group hover:stroke-change">
              <span>ЗАРЕЄСТРУВАТИСЯ</span>
              <ArrowUpRight className="ml-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
        </div>
      </div>

    </section>
  )
}

export default IntensiveCurator






