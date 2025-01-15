interface CardProps {
  title: string;
  image: string; 
  items: string[]; 
  borderColor: string;
}

export const Card: React.FC<CardProps> = ({ title, image, items, borderColor }) => {
  return (
    <div className="card bg-black text-white overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full object-cover" />
      <div className="">
        <div className={`space-y-2 border-4 py-4 px-[20px] lg:py-8`}  style={{ borderColor }}>
          {items.map((itemText, index) => (
            <p
              key={index}
              className="w-full font-semibold text-left text-[#f3f3f3] text-[20px] 
              lg:text-[22px] xl:text-[24px] 3xl:text-[32px]"
            >
              ● {itemText}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};


// 1 - #95D4F8
// 2 - #B5B0FF
// 3 - #3FAD78
// 4 = #F4D06F