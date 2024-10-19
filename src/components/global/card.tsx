interface CardProps {
  title: string;
  image: string; 
  items: string[]; 
}

export const Card: React.FC<CardProps> = ({ title, image, items }) => {
  return (
    <div className="card bg-black text-white overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full object-cover pb-4 sm:pb-8" />
      
      <div className="">
        <div className="space-y-2">
          {items.map((itemText, index) => (
            <p
              key={index}
              className="w-full bg-gray py-3 px-6 font-semibold text-left uppercase text-[#f3f3f3] text-[16px] 
               sm:py-5 sm::px-8 md:text-[24px] lg:text-[15px] xl:text-[24px]"
            >
              {itemText}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};