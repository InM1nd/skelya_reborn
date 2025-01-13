'use client'

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface TabContent {
  title: string;
  price: string;
  description: string;
  buyLink: string;
}

interface TabContents {
  [key: string]: TabContent;
  once: TabContent;
  bundle: TabContent;
}

type TabType = 'once' | 'bundle';

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('once');

  const tabContent: TabContents = {
    once: {
      title: 'ОДНОРАЗОВА КОНСУЛЬТАЦІЯ',
      price: '1200 грн',
      description: 'Зустріч із кар\'єрним консультантом для вирішення одного запиту',
      buyLink: 'https://secure.wayforpay.com/button/b51358399b740',
    },
    bundle: {
      title: 'БАНДЛ КОНСУЛЬТАЦІЙ (x3)',
      price: '3200 грн',
      description: 'Зустріч із кар\'єрним консультантом для вирішення одного запиту',
      buyLink: 'https://secure.wayforpay.com/button/b5b18008eb592'
    }
  };

  const handleBuyClick = () => {
    window.open(tabContent[activeTab].buyLink, '_blank');
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-black p-4 lg:p-6 w-full ">

      {/* Main Content Area */}
      <div className="grid grid-cols-1 mb-4 sm:mb-6 lg:grid-cols-12 lg:gap-8 lg:mb-8">
        {/* Left Column */}
        <div className="col-span-4 flex justify-between gap-4 flex-col sm:gap-6 lg:gap-8 lg:col-span-4">
          {/* Tabs */}
          <div className="flex  gap-2 font-bold text-xl  sm:gap-4 sm:text-2xl lg:text-[32px] lg:flex-col 2xl:flex-row">
            <button 
              className={`px-4 w-full py-2 sm:py-3 sm:px-6 lg:px-10 ${activeTab === 'once' ? 'bg-green' : 'border-4 border-green text-green'}`}
              onClick={() => setActiveTab('once')}
            >
              ОДНОРАЗОВА
            </button>
            <button 
              className={`px-4 w-full py-2 sm:py-3 sm:px-6 lg:px-10 ${activeTab === 'bundle' ? 'bg-green' : 'border-4 border-green text-green'} hover:bg-green hover:text-black transition-colors`}
              onClick={() => setActiveTab('bundle')}
            >
              БАНДЛ
            </button>
          </div>
          <div className="w-full">
            <img src="/svg/Letter_К.svg" alt="Consultant" className="object-cover h-auto w-full "/>
          </div>
          <button onClick={handleBuyClick} className="w-full bg-green border-4 border-green text-black text-xl font-semibold py-2 px-4 flex items-center justify-center gap-2 sm:text-2xl sm:py-3 sm:px-6 lg:py-4 lg:text-[40px] transition-colors duration-300 hover:border-purple-main hover:text-purple-main hover:bg-black group hover:stroke-change">
            {tabContent[activeTab].price} - КУПИТИ <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />
          </button>
        </div>

        {/* Right Column */}
        <div className="bg-gray text-white col-span-8 mt-4 p-4 sm:p-6 lg:mt-0 lg:col-span-8 lg:p-[50px]">
          <h2 className="text-green text-2xl font-bold text-left font-unbounded  mb-4 sm:mb-6 sm:text-3xl lg:text-[52px] ">{tabContent[activeTab].title}</h2>
          <p className="mb-6 text-xl sm:text-2xl lg:text-[32px]">{tabContent[activeTab].description}</p>
          
          <div className="mb-6 text-xl sm:text-2xl lg:text-[32px]">
            <h3 className="font-bold mb-4">ВКЛЮЧАЄ:</h3>
            <ul className="space-y-2">
              <li>• Зустріч тривалістю 1.5 години та її запис.</li>
              <li>• Персональну дорожню карту.</li>
              <li>• Підбірку корисних матеріалів і інструментів.</li>
              <li>• Текстову підтримку протягом 5 робочих днів після консультації.</li>
            </ul>
          </div>

          <div className="text-xl sm:text-2xl lg:text-[32px]">
            <h3 className="font-bold mb-4">ПРОЦЕС:</h3>
            <div className="relative">
              <p className={`transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-[80px] overflow-hidden'}`}>
                1. Після оплати заповниш інформацію про себе та свій виклик, і ми підберемо консультанта, який найкраще впорається із твоєю задачею. <br/>
                2. Перед зустріччю консультант підготує уточнювальні питання: під час зустрічі разом обговорите виклик і розробите план дій. <br/>
                3.Після зустрічі отримаєш персональний простір у Notion із записом, матеріалами та рекомендаціями. Протягом 5 днів консультант буде на звʼязку для текстової підтримки.
              </p>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue hover:text-sky-300 transition-colors text-xl sm:text-2xl mt-2"
              >
                {isExpanded ? 'Згорнути' : 'Читати далі...'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Intensive Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="intencive">
        <div className="lg:col-span-12">
          <div className="bg-gray flex flex-col pt-8 sm:pt-12 lg:pt-[100px]">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col justify-center px-4 pb-8 sm:px-6 sm:pb-12 lg:px-[50px] lg:pb-[100px] text-white">
                <p className="text-xl mb-6 sm:mb-6 sm:text-3xl lg:text-[32px] ">
                  Скельовий інтенсив
                </p>
                <h2 className="text-blue text-2xl font-bold uppercase font-unbounded mb-4 sm:text-4xl lg:text-[52px]"> Пошук роботи мрії</h2>
                <p className="text-xl sm:text-2xl lg:text-[32px] max-w-6xl">
                5-тижневий курс, який допоможе освоїти ключові кар&apos;єрні навички, підготуватися до пошуку роботи, впевнено пройти співбесіди та отримати офер.
                </p>
              </div>
              <div className="w-full h-full flex items-center justify-center sm:p-6 lg:p-0 lg:w-1/2">
                <img 
                  src="/svg/Intensive_Art_Svg.svg" 
                  className="w-full h-full object-contain lg:object-cover"
                  alt="Intensive Art"
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-between text-lg bg-blue gap-6 p-4 sm:text-xl sm:p-6 lg:flex-row xl:text-3xl lg:p-[50px] ">
              <div>
                <h3 className="font-bold">СТАРТ:</h3>
                <p>30 січня 2025</p>
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
                <p>Марія зі Скеля, кар’єрна консультантка </p>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-6 md:grid-cols-12 md:gap-8 sm:mt-12">
            <Link href="/intensive" className="col-span-1 border-4 border-blue text-blue flex items-center justify-center gap-2 text-xl mb-4 font-semibold py-3 px-4 transition-colors md:col-span-7 md:mb-0 sm:py-4 sm:px-6 sm:text-3xl lg:text-[40px] transition-colors duration-300 hover:border-purple-main hover:text-purple-main group hover:stroke-change">
                ПРОГРАМА ІНТЕНСИВУ <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />
            </Link>
          {/* Register Button */}
            <a className="col-span-1 border-4 border-blue bg-blue text-black flex items-center justify-center gap-2 text-xl font-semibold py-3 px-4 transition-colors md:col-span-5 sm:px-6 sm:py-4 lg:text-[40px] sm:text-3xl transition-colors duration-300 hover:border-purple-main hover:text-purple-main hover:bg-black group hover:stroke-change " href="https://secure.wayforpay.com/button/b12436e04beaf">
              ЗАРЕЄСТРУВАТИСЯ <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />
            </a>
        </div>
    </div>
  );
};

export default ServicesSection;