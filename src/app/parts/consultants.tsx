'use client'

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Title from '@/components/global/title';
import { BigButton } from '@/components/ui/custom/BigButton';

const ConsultantsSection = () => {
  return (
<section className="w-full pb-7 sm:pb-20" id="consultants"> 
      <Title>КОНСУЛЬТАНТИ</Title>
        <div className="w-full flex justify-center flex-col p-4 lg:p-6">
        <div className="grid grid-cols-1 mb-4 gap-4 md:grid-cols-3 md:mb-8 lg:mb-12 lg:gap-8 ">
          {/* Card 1 */}
          <div className="bg-gray text-white h-full flex flex-col">
            <div className="relative mb-4">
              <img src="/svg/Consultant_1.svg" alt="Consultant" className="object-cover h-auto w-full " />
            </div>            
            <div className="text-[20px] flex flex-col flex-1 p-4 gap-4 lg:p-6 lg:gap-[35px] xl:text-[28px] 2xl:p-7 " >
              <div className='text-[22px] xl:text-[34px]'>
                <h3 className="font-bold">Марія зі Скеля</h3>
                <p className="">Кар&apos;єрна Консультантка </p>
              </div>
              <div className='space-y-3'>
                <div>
                  <span className="font-bold">Ачівка:</span> Працевлаштувала 300+ людей в IT та Digital. 
                </div>
                <div>
                  <span className="font-bold">Досвід:</span> Працювала в освітніх проектах Mate academy, Projector Institute та AI House.
                </div>
                <div>
                  <span className="font-bold">Супер-сила:</span> Розуміє світчерів та початківців.
                </div>
              </div>
              <a href="https://www.linkedin.com/in/mariiaternovska/" className="w-fit font-bold text-[23px] text-purple-light hover:underline flex items-center gap-1 mt-auto xl:text-[34px]">
                LinkedIn <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray text-white h-full flex flex-col">
            <div className="relative mb-4">
              <img src="/svg/Consultant_2.svg" alt="Consultant" className="object-cover h-auto w-full " />
            </div>            
            <div className="text-[20px] flex flex-col flex-1 p-4 gap-4 lg:p-6 lg:gap-[35px] xl:text-[28px] 2xl:p-7 ">
              <div className='text-[22px] xl:text-[34px]'>
                <h3 className="font-bold">Даша з Computools</h3>
                <p className="">Chief Recruiting Officer</p>
              </div>
            
              <div className='space-y-3'>
                <div>
                  <span className="font-bold">Ачівка:</span> Найняла більше 300 людей.
                </div>
                <div>
                  <span className="font-bold">Досвід:</span> З Trainee до керівної позиції за 5 років.
                </div>
                <div>
                  <span className="font-bold">Супер-сила:</span> Знає як працює рекрутинг в айтішці зсередини.
                </div>
              </div>
              <a href="https://www.linkedin.com/in/darya-savchenko/" className="w-fit font-bold text-[23px] text-green hover:underline flex items-center gap-1 mt-auto xl:text-[34px]">
                LinkedIn <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10" />
              </a>
            </div>
          </div>

          {/* Card 3 - Similar to Card 1 with different background */}
          <div className="bg-gray text-white h-full flex flex-col">
            <div className="relative mb-4">
              <img src="/svg/Consultant_3.svg" alt="Consultant" className="object-cover h-auto w-full " />
            </div>            
            <div className="text-[20px] flex flex-col flex-1 p-4 gap-4 lg:p-6 lg:gap-[35px] xl:text-[28px] 2xl:p-7 ">
              <div className='text-[22px] xl:text-[34px]'>
                <h3 className="font-bold">Вікторія з Tietoevry</h3>
                <p className="">Кар&apos;єрна Консультантка</p>
              </div>
              <div className='space-y-3'>
                <div>
                  <span className="font-bold">Ачівка:</span> Провела більше 1000 співбесід. 
                </div>
                <div>
                  <span className="font-bold">Досвід:</span> 10+ років міжнародного досвіду в рекрутингу, кар’єрному консалтингу у сферах у ІТ та телекомунікаціях.
                </div>
                <div>
                  <span className="font-bold">Супер-сила:</span> Досвід у психології, що дозволяє глибше зануритися в твої потреби.
                </div>
              </div>
              <a href="https://www.linkedin.com/in/moroz-viktoriia/" className="w-fit font-bold text-[23px] text-pink hover:underline flex items-center gap-1 mt-auto xl:text-[34px]">
                LinkedIn <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10" />
              </a>
            </div>
          </div>

        </div>
        <BigButton 
          text="обрати консультанта"
          onClick={() => window.open('https://t.me/skelya_careers', '_blank')}
        />
      </div>
    </section>
  );
};

export default ConsultantsSection;
