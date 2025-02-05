'use client'

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Title from '@/components/global/title';
import { BigButton } from '@/components/ui/custom/BigButton';
import { sendGAEvent } from '@next/third-parties/google'

const ConsultantsSection = () => {

  const handleClick = (consultantName: string, eventCategory: string) => {
    sendGAEvent('event', eventCategory, { consultant: consultantName });
  };

  const handleButtonClick = () => {
    sendGAEvent('event', 'Button_Click', { action: 'Choose_Consultant' });
    window.open('https://t.me/skelya_support', '_blank');
  };

  const consultants = [
    {
      id: 1,
      name: "Марія зі Скеля",
      position: "Кар'єрна Консультантка",
      image: "/svg/Consultant_1.svg",
      achievement: "Працевлаштувала 300+ людей в IT та Digital.",
      experience: "Працювала в освітніх проектах Mate academy, Projector Institute та AI House.",
      superpower: "Розуміє світчерів та початківців.",
      linkedin: "https://www.linkedin.com/in/mariiaternovska/",
      accentColor: "text-purple-light",
    },
    {
      id: 2,
      name: "Даша з Computools",
      position: "Chief Recruiting Officer",
      image: "/svg/Consultant_2.svg",
      achievement: "Найняла більше 300 людей.",
      experience: "З Trainee до керівної позиції за 5 років.",
      superpower: "Знає як працює рекрутинг в айтішці зсередини.",
      linkedin: "https://www.linkedin.com/in/darya-savchenko/",
      accentColor: "text-green",
    },
    {
      id: 3,
      name: "Вікторія з Tietoevry",
      position: "Кар'єрна Консультантка",
      image: "/svg/Consultant_3.svg",
      achievement: "Провела більше 1000 співбесід.",
      experience: "10+ років міжнародного досвіду в рекрутингу, кар’єрному консалтингу у сферах ІТ.",
      superpower: "Досвід у психології, що дозволяє глибше зануритися в твої потреби.",
      linkedin: "https://www.linkedin.com/in/moroz-viktoriia/",
      accentColor: "text-pink",
    },
    {
      id: 4,
      name: "Мар'яна з IAMPM",
      position: "HR / карʼєрна консультантка",
      image: "/svg/Consultant_4.svg",
      achievement: "Розробниця та лекторка курсів для HR та Team Leaders.",
      experience: "За 8 років роботи зросла від Recruiter до HRD.",
      superpower: "Знає як правильно налаштувати процеси в компанії.",
      linkedin: "https://www.linkedin.com/in/maryana-kiverska/",
      accentColor: "text-blue",
    },
    {
      id: 5,
      name: "Марина з BazaIT",
      position: "Senior Technical Recruiter",
      image: "/svg/Consultant_4.svg",
      achievement: "Працювала з міжнародним IT ринком, могла бути радіофізиком.",
      experience: "7+ років у tech-рекрутингу, 4 роки в пошуку AI-талантів, зараз у Military.",
      superpower: "Знає, що таке Work-life balance.",
      linkedin: "https://www.linkedin.com/in/marynashcher/",
      accentColor: "#E57550",
    },
  ];

  return (
    <section className="w-full pb-7 sm:pb-20" id="consultants"> 
      <Title>КОНСУЛЬТАНТИ</Title>
        <div className="w-full flex justify-center flex-col p-4 lg:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mb-4">
      {/* First row - always show 3 cards */}
      <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        {consultants.slice(0, 3).map((consultant, index) => (
          <div key={index} className="bg-gray text-white h-full flex flex-col">
            <div className="relative mb-4">
              <img 
                src={consultant.image} 
                alt="Consultant" 
                className="object-cover h-auto w-full"
              />
            </div>
            <div className="text-[20px] flex flex-col flex-1 p-4 gap-4 lg:p-6 lg:gap-[35px] xl:text-[28px] 2xl:p-7">
              <div className="text-[22px] xl:text-[34px]">
                <h3 className="font-bold">{consultant.name}</h3>
                <p>{consultant.position}</p>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-bold">Ачівка:</span> {consultant.achievement}
                </div>
                <div>
                  <span className="font-bold">Досвід:</span> {consultant.experience}
                </div>
                <div>
                  <span className="font-bold">Супер-сила:</span> {consultant.superpower}
                </div>
              </div>
              <a 
                href={consultant.linkedin}
                onClick={() => handleClick(consultant.name, 'Linkedin_Click')}
                className={`w-fit font-bold text-[23px] ${consultant.accentColor} hover:underline flex items-center gap-1 mt-auto xl:text-[34px]`}
              >
                LinkedIn <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Second row - last 2 cards centered */}
      <div className="col-span-full justify-center block gap-4 md:flex lg:gap-8">
        <div className="md:w-1/3">
                    {/* Card 4 - Similar to Card 1 with different background */}
          <div className="bg-gray text-white h-full flex flex-col">
            <div className="relative mb-4">
              <img src="/svg/Consultant_4.svg" alt="Consultant" className="object-cover h-auto w-full " />
            </div>            
            <div className="text-[20px] flex flex-col flex-1 p-4 gap-4 lg:p-6 lg:gap-[35px] xl:text-[28px] 2xl:p-7 ">
              <div className='text-[22px] xl:text-[34px]'>
                <h3 className="font-bold">Мар&apos;яна з IAMPM</h3>
                <p className="">HR Консультант</p>
              </div>
              <div className='space-y-3'>
                <div>
                  <span className="font-bold">Ачівка:</span> Розробниця та лекторка курсів для HR та Team Leaders.
                </div>
                <div>
                  <span className="font-bold">Досвід:</span> За 8 років роботи зросла від Recruiter до HRD.
                </div>
                <div>
                  <span className="font-bold">Супер-сила:</span> Знає як правильно налаштувати процеси в компанії.
                </div>
              </div>
              <a href="https://www.linkedin.com/in/maryana-kiverska/" onClick={() => handleClick('Maryana IAMPM', 'Linkedin_Click')} className="w-fit font-bold text-[23px] text-blue hover:underline flex items-center gap-1 mt-auto xl:text-[34px]">
                LinkedIn <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0">
           {/* Card 5 - Similar to Card 1 with different background */}
           <div className="bg-gray text-white h-full flex flex-col">
            <div className="relative mb-4">
              <img src="/svg/Consultant_5.svg" alt="Consultant" className="object-cover h-auto w-full " />
            </div>            
            <div className="text-[20px] flex flex-col flex-1 p-4 gap-4 lg:p-6 lg:gap-[35px] xl:text-[28px] 2xl:p-7 ">
              <div className='text-[22px] xl:text-[34px]'>
                <h3 className="font-bold">Марина з BazaIT</h3>
                <p className="">Senior Technical Recruiter</p>
              </div>
              <div className='space-y-3'>
                <div>
                  <span className="font-bold">Ачівка:</span> Працювала з міжнародним IT ринком, могла бути радіофізиком.
                </div>
                <div>
                  <span className="font-bold">Досвід:</span> 7+ років у tech-рекрутингу, 4 роки в пошуку AI-талантів, зараз у Military.
                </div>
                <div>
                  <span className="font-bold">Супер-сила:</span> Має технічну освіту, тож розуміє &quot;технарів&quot; як ніхто інший.
                </div>
              </div>
              <a href="https://www.linkedin.com/in/marynashcher/" onClick={() => handleClick('Maryna BazaIT', 'Linkedin_Click')} className="w-fit font-bold text-[23px] text-[#E57550] hover:underline flex items-center gap-1 mt-auto xl:text-[34px]">
                LinkedIn <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10" />
              </a>
            </div>
        </div>
      </div>
      </div>
          
        </div>
        <BigButton 
          text="обрати консультанта"
          onClick={handleButtonClick}
        />

      </div>
    </section>
  );
};

export default ConsultantsSection;
