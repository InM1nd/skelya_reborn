'use client'

import Title from "@/components/global/title"
import React from 'react';


const IntensiveProgram = () => {

  const programs = [
    {
      number: "1",
      title: "РИНОК IT І ТВОЯ КОНКУРЕНТНІСТЬ",
      date: "<b>вебінар</b> / 6 лютого / четвер / 19:00",
      points: [
        "Як аналізувати ринок і типи компаній.",
        "Оцінка власної конкурентоспроможності.",
        "Створення резюме: структура, найкращі практики.", 
      ],
      recorded:"+ Відеозапис вебінару."
    },
    {
      number: "2",
      title: "НЕТВОРКІНГ І КОМУНІКАЦІЯ",
      date: "<b>вебінар</b> / 13 лютого / четвер / 19:00",
      points: [
        "Як писати супровідний лист.",
        "Оформлення LinkedIn для продуктивного нетворкінгу.",
        "Канали пошуку роботи: спільноти, соцмережі, неочевидні можливості.", 
      ],
      recorded:"+ Відеозапис вебінару."
    },
    {
      number: "3",
      title: "ПОЗИЦІОНУВАННЯ СЕБЕ ЯК СПЕЦІАЛІСТА",
      date: "<b>вебінар</b>/ 20 лютого / четвер / 19:00",
      points: [
        "Як ефективно презентувати себе на співбесіді.",
        "Практика відповідей на поширені питання.", 
      ],
      recorded:"+ Відеозапис вебінару."
    },
    {
      number: "4",
      title: "ПОШУК РОБОТИ ЯК ПРОЄКТ",
      date: "<b>вебінар</b> / 27 лютого / четвер / 19:00",
      points: [
        "Етапи найму та очікування роботодавців.",
        "Трекінг вакансій і оптимізація стратегії пошуку.",
        "Типові помилки кандидатів і як їх уникати.", 
      ],
      recorded:"+ Відеозапис вебінару."
    },
    {
      number: "5",
      title: "УСПІШНИЙ ВИПРОБОВУВАЛЬНИЙ ТЕРМІН",
      date: "<b>бонусний вебінар з <a href={https://www.linkedin.com/in/moroz-viktoriia/} class='underline'>Вікторією</a>, Tech Recruitment </br> Consultant з Tietoevry</b> / 6 березня / четвер / 19:00",
      points: [
        "Розгляд реальних кейсів.",
        "Tips and Tricks які допоможуть пройти випробовувальний термін.", 
      ],
      recorded:"+ Відеозапис вебінару.",
      isBonus: true
    }
  ];

  return(
    <section className="w-full h-full pb-7 sm:pb-14" id="IntensiveProgram">
      <Title>ПРОГРАМА</Title>
      <div className="bg-black text-white py-6 px-4 xl:px-6 xl:py-[60px]">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <div 
            key={index}
            className={`p-6 lg:p-[25px] xl:p-[50px] ${
              program.isBonus ? 'bg-sky-300 text-black' : 'bg-gray'
            }`}
          >
            <h3 className={`text-[18px] lg:text-[28px] font-bold mb-3 lg:mb-5 font-unbounded ${
              program.isBonus ? 'text-black' : 'text-sky-300'
            }`}>
              {program.number}. {program.title}
            </h3>
            <p 
              className={`text-[16px] mb-6 lg:mb-8 lg:text-[28px] ${
                program.isBonus ? 'text-black' : 'text-gray-400'
              }`}
              dangerouslySetInnerHTML={{ __html: program.date }}
            />
            <ul className="space-y-2 mb-6 lg:mb-8">
              {program.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start text-[16px] lg:text-[28px]">
                  <span className="mr-2">•</span>
                  <span className={program.isBonus ? 'text-black' : 'text-gray-300'}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <p className="flex items-start text-[16px] lg:text-[28px]">{program.recorded}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default IntensiveProgram

