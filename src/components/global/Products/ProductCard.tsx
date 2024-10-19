'use client'

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

  return (  
    <div className="">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className={`${backgroundColor} p-[16px] flex flex-col gap-4 md:p-[50px] lg:w-5/6 lg:gap-12`}>
          <div className="flex flex-col gap-2">
            <h2 className="text-[22px] font-bold text-left uppercase font-unbounded md:text-[52px]">{title}</h2>
            <span className="block md:hidden text-[14px] font-medium text-left uppercase md:text-[26px]" dangerouslySetInnerHTML={{ __html: 'Проконсультуємо та розробимо <br /> план дій під задачу' }}></span>
            <span className="hidden md:inline text-[14px] font-medium text-left uppercase md:text-[26px]">
              {subtitle}
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
              <b className="uppercase inline-block mb-3 md:mb-8">Скільки:</b> <br/> 
              {duration}
            </p>
          </div>
        </div>
        <div className="flex flex-col pt-[20px] lg:w-1/2 lg:pl-[50px] md:pt-[50px] lg:justify-between">
          <img
            src={image}
            alt={title}
            className="px-12" 
          />
          <button 
            onClick={handlePayment}
            className={`${backgroundColor} w-full mt-[20px] p-5 font-unbounded font-medium text-[18px] uppercase md:mt-[60px] md:p-14 md:text-4xl hover:bg-blue transition-colors duration-300`}
          >
            {price}
          </button>
        </div>
      </div>
    </div>
  );
};
