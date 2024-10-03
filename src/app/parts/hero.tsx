

export const Hero = () => {
  return (
    <section className="h-svh w-full flex flex-col items-center pt-14 2xl:px-[50px] 2xl:pt-[50px] lg:h-screen">
      <div className="container">
        <div className="w-full relative mb-6">
          <picture>
            <source media="(max-width: 640px)" srcSet={'/svg/Hero_Pic_Mob.svg'} />
            <img src={'/svg/Hero_Pic.svg'} alt={"23"} className="w-full"/>
          </picture>
        </div>
        <div className="flex flex-col justify-start items-start relative px-4">
          <img src={"/svg/Hero_Words.svg"} alt='' className="w-full pb-4 lg:pb-8 " />
          <p className="hidden md:block self-stretch flex-grow-0 flex-shrink-0 text-xl font-medium text-left uppercase text-[#f3f3f3] md:text-2xl 2xl:text-[46px]">
            твоя Кар’єрна підтримка в пошуку роботи
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl font-medium text-left uppercase text-[#f3f3f3] block md:hidden">
            твоя Кар’єрна підтримка 
          </p>
        </div>
      </div>

      </section>
  )
}