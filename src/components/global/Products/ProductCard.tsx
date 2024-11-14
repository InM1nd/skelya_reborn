'use client'

import React, { useState } from 'react';

interface ProductCardProps {
  title: string;
  subtitle: string;
  listHeader: string;
  description: string[];
  price: string;
  image: string;
  duration: string;
  backgroundColor: string;
}

// Объект для сопоставления товара и ссылки оплаты
const paymentUrls: Record<string, string> = {
  'Консультація': 'https://secure.wayforpay.com/button/b51358399b740',
  'Супровід': 'https://secure.wayforpay.com/button/b2b2523b05a5d',
  'Test' : 'https://secure.wayforpay.com/button/bcb5d05ec6686',
};

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  subtitle,
  description,
  image,
  price,
  duration,
  backgroundColor,
  listHeader,
}) => {

  // Обработчик клика на кнопку оплаты
  const handlePayment = () => {
    const paymentUrl = paymentUrls[title]; // Получаем URL по названию товара

    if (paymentUrl) {
      window.location.href = paymentUrl; // Перенаправляем на URL
    }
  };

  const [isHovered, setIsHovered] = useState(false);
  const buttonBackgroundColor = isHovered ? "#95D4F8" : backgroundColor;

  return (  
    <div className="">
      <div className=" flex flex-col justify-between lg:flex-row">
        <div style={{ backgroundColor }} className="p-[16px] flex flex-col gap-4 md:p-[40px] lg:w-5/6 xl:gap-8  2xl:p-[50px] 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-[22px] font-bold text-left uppercase font-unbounded md:text-[52px]">{title}</h2>
            <span 
              className="block xl:hidden text-[14px] font-medium text-left uppercase md:text-[26px]" 
              dangerouslySetInnerHTML={{ __html: subtitle }}>
              </span>

            <span 
              className="hidden xl:inline text-[14px] font-medium text-left uppercase md:text-[26px]">
              {subtitle.replace(/<br \/>/g, ' ')}
            </span>
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-left uppercase md:text-[32px]">{listHeader}</h4>
            <ul className="list-disc pl-6 text-[14px] pt-3 md:text-[32px]">
              {description.map((item, index) => (
                <li key={index} className="">{item}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <p className="text-[14px] md:text-[32px]">
              <b className="uppercase inline-block mb-3 md:mb-5">Скільки:</b> <br/> 
              {duration}
            </p>
          </div>
        </div>
        <div className="flex flex-col pt-[20px] lg:w-1/2 lg:pl-[50px] md:pt-[50px] lg:justify-between">
          <img
            src={image}
            alt={title}
            className="px-4 md:px-0" 
          />
          <button 
            onClick={handlePayment}
            onMouseEnter={() => setIsHovered(true)}  
            onMouseLeave={() => setIsHovered(false)}  
            style={{ backgroundColor: buttonBackgroundColor }} 
            className="w-full relative mt-[20px] p-5 font-unbounded font-medium text-[18px] uppercase md:mt-[60px] md:p-14 md:text-4xl hover:bg-blue transition-colors duration-300">
            {price}
            <svg height="60" viewBox="0 0 207 194" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute right-0 top-0 h-[30px] sm:h-[40px] lg:h-[60px]'>
              <path d="M4 4H202.769V190H4.00006L4 4Z" fill="#040000" 
              className={`fill-current transition-colors`}
              style={{
                stroke: isHovered ? '#95D4F8' : backgroundColor, // Dynamic stroke color
                strokeWidth: '8',
              }} 
              stroke-width="8"
              />
              <path d="M155.216 50.4985L65.3227 130.184M65.3227 130.184L66.0685 63.2519M65.3227 130.184L132.069 130.928" 
              className={`fill-current transition-colors`}
              style={{
                stroke: isHovered ? '#95D4F8' : backgroundColor, // Dynamic stroke color
                strokeWidth: '8.31776',
              }}
              stroke-width="8.31776"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
