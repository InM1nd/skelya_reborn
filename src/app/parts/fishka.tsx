'use client'

import Title from "@/components/global/title"

export const Fishka = () => {

  return(
    <section className="w-full h-full pb-7 sm:pb-14" id="fishka">
      <Title>Трішки цифр</Title>
      <div className="w-full flex justify-center py-6 px-4 xl:px-6 xl:py-[60px]">
        <div className="grid grid-cols-1 gap-4 w-full lg:grid-cols-3 ">

          <div className="col-span-1 gap-4 w-full lg:col-span-2">
            <div className="grid grid-cols-1 grid-rows-none gap-4 w-full h-full lg:grid-cols-7 lg:grid-rows-6">
                {/* 8 People Stat */}
              <div className="col-span-1 border-4 border-green lg:col-span-4 lg:row-span-4">
                <h2 className="text-[40px] font-semibold font-unbounded underline bg-green p-4 lg:text-[50px] 2xl:text-[80px]"><a href="https://miro.com/app/board/uXjVL-opX4c=/?moveToWidget=3458764609406428031&cot=14">8 людей</a></h2>
                <p className="text-[20px] p-6 font-medium text-white lg:text-[26px] lg:px-8 lg:py-[60px] 2xl:py-[120px] 2xl:text-[32px]">В середньому отримує роботу на LinkedIn щохвилини</p>
              </div>
              {/* 7% Stat */}
              <div className="col-span-1 border-4 border-yellow flex flex-col justify-between lg:col-span-3 lg:row-span-4 ">
                <p className="text-[20px] p-6 font-medium text-white lg:text-[26px] lg:px-8 lg:py-[40px] xl:py-16 2xl:text-[32px]">Професійно складене CV збільшує потенційний рівень заробітку</p>
                <h2 className="text-[40px] p-4  font-semibold font-unbounded underline bg-yellow lg:text-[50px] 2xl:text-[80px]"><a href="https://topresume.com/career-advice/7-top-job-search-statistics">до 7%</a></h2>
              </div>
                {/* 30% Stat */}
              <div className="col-span-1 flex flex-col-reverse border-4 border-blue lg:items-center lg:flex-row lg:col-span-7 lg:row-span-2 ">
                <h2 className="text-[40px] font-semibold underline font-unbounded bg-blue p-4 w-full flex lg:text-[50px] lg:justify-center lg:items-center 2xl:text-[80px] lg:w-auto lg:h-full"><a href="https://niss.gov.ua/doslidzhennya/sotsialna-polityka/osnovni-kharakterystyky-rynku-pratsi-ukrayiny-u-pershomu">30%</a></h2>
                <p className="text-[20px] p-6 font-medium text-white lg:text-[26px] lg:py-9 2xl:text-[32px]">Дефіцит кадрів на ринку праці</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 gap-4 w-full">
            <div className="grid grid-cols-1 grid-rows-none gap-4 w-full h-full lg:grid-cols-5 lg:grid-rows-6 ">
                {/* 5x Stat */}
              <div className="col-span-1 border-4 border-orange lg:col-span-5 lg:row-span-3 ">
                <h2 className="text-[40px] font-semibold font-unbounded bg-orange p-4 underline lg:text-[50px] 2xl:text-[80px]"><a href="https://www.linkedin.com/business/talent/blog/talent-acquisition/reasons-employee-referrals-are-best-way-to-hire">в 5 разів</a></h2>
                <p className="text-[20px] p-6 font-medium text-white lg:text-[26px] lg:py-9 2xl:text-[32px]">Рекомендації ефективніші за решту способів найму</p>
              </div>
              {/* 67% Stat */}
              <div className="col-span-1 border-4 border-purple-light lg:col-span-5 lg:row-span-3 ">
                <h2 className="text-[40px] font-semibold font-unbounded underline bg-purple-light p-4 lg:text-[50px] 2xl:text-[80px]"><a href="https://eba.com.ua/try-chverti-robotodavtsiv-vidchuvayut-defitsyt-kadriv-v-ukrayini/">67%</a></h2>
                <p className="text-[20px] p-6 font-medium text-white lg:text-[26px] lg:py-9 2xl:text-[32px]">Українських компаній планують відкривати вакансії протягом найближчого року</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}