import { ProductCard } from "./ProductCard";

const ProductSection: React.FC = () => {
  const contents = [
    {
      title: 'Консультація',
      subtitle: 'Проконсультуємо та розробимо <br /> план дій під задачу',
      listHeader: 'Що включає:',
      description: [
        'Аналіз та підготовка резюме під вакансію',
        'Дзвінок з експертом та його запис',
        'Текстова підтримка на весь період послуги'
      ],
      image: '/svg/Letter_К.svg', 
      price: "1200 грн - купити",
      duration: "5 робочих днів підтримки",
      backgroundColor: "#3FAD78"
    },
    {
      title: 'Супровід',
      subtitle: 'Розробимо план дій під задачу <br /> та підтримаємо у її досягненні',
      listHeader: 'Що включає:',
      description: [
        'Аналіз та підготовка резюме під вакансію',
        'Щотижневі дзвінки з експертом та їх записи',
        'Проміжні домашні завдання',
        'Текстова підтримка на весь період послуги'
      ],
      image: '/svg/Letter_С.svg', 
      price: "4500 грн - купити",
      duration: "20 робочих днів підтримки",
      backgroundColor: "#E3B7F5"
    },
    // {
    //   title: 'Test',
    //   subtitle: 'Test',
    //   listHeader: 'Test',
    //   description: [
    //     'Test',
    //     'Test',
    //     'Test',
    //     'Test'
    //   ],
    //   image: '/svg/Letter_С.svg', 
    //   price: "Test - купити",
    //   duration: "Test",
    //   backgroundColor: "#f8df00"
    // },
  ];

  return (
    <div className="w-full pt-7 flex justify-center md:px-4 md:pt-12">
      <div className="w-full flex flex-col gap-10  ">
        {contents.map((content, index) => (
          <ProductCard
            key={index}
            title={content.title}
            subtitle={content.subtitle}
            listHeader={content.listHeader}
            description={content.description}
            image={content.image} 
            price={content.price}
            duration={content.duration}
            backgroundColor={content.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
};


export default ProductSection;
