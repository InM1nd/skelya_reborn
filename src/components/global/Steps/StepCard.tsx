// interface StepCardProps {
//   title: string;
//   stepNumber: string;
//   description: string;
//   imageDesktop: string;
//   imageMobile: string;
// }

// export const StepCard: React.FC<StepCardProps> = ({ title, stepNumber, description, imageDesktop, imageMobile }) => {
//   return (
//     <div className="relative w-full">
//       <picture >
//         <source media="(max-width: 640px)" srcSet={imageMobile} />
//         <img src={imageDesktop} alt={title} className="w-full min-h-[140px] object-cover"/>
//       </picture>
//       <div className="absolute inset-0 flex flex-col px-[10px] 4xl:pr-6 4xl:pt-6 md:px-0">
//         <div className="flex justify-between items-center pt-1 lg:pt-0">
//           <h2 className="text-[#C9ACF3] text-[16px] uppercase font-bold font-unbounded lg:text-[32px]">{title}</h2>
//           <span className="text-white text-[16px] font-bold font-unbounded lg:text-[36px] lg:pr-10">{stepNumber}</span>
//         </div>
//         {/* Описание */}
//         <p className="text-[14px] text-white pt-4  font-raleway xsm:pt-8 sm:text-[18px] lg:pt-12">{description}</p>
//       </div>
//     </div>
//   );
// };


interface StepCardProps {
  title: string;
  image: string;
}

export const StepCard: React.FC<StepCardProps> = ({image, title}) => {
  return (
    <div className="relative w-full">
     <img src={image} alt={title} className="w-full object-cover"/>
    </div>
  );
};

