import * as React from "react"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel_mob"
import { Card } from "@/components/global/card"
import Title from "@/components/global/title"


export const ForWhom = () => {

  return(
    <section className="w-full pb-7 sm:pb-20" id="for_whom">
      <Title>для кого</Title>
      <div className="w-full flex justify-center">
        <div className="w-full flex justify-center flex-col px-4 py-6 xl:px-[40px] xl:py-[120px]">   
          <div className="hidden md:grid md:grid-cols-1 md:gap-8 md:pb-3 lg:grid-cols-4 ">
            <Card
              title=""
              borderColor="#95D4F8"
              image="/svg/1_Forwhom.svg" // Путь к изображению
              items={['ПРОФОРІЄНТАЦІЯ', 'ПЕРША РОБОТА', 'РОБОТА ПІСЛЯ КУРСІВ']} 
            />
            <Card
              title=""
              borderColor="#B5B0FF"
              image="/svg/2_Forwhom.svg"
              items={['ПОШУК РОБОТИ', 'ТЕСТОВЕ ІНТЕРВ\'Ю', 'ПІДГОТОВКА РЕЗЮМЕ']}
            />
            <Card
              title=""
              borderColor="#3FAD78"
              image="/svg/3_Forwhom.svg"
              items={['ПІДВИЩЕННЯ', 'ЗМІНА РОБОТИ', 'РОБОТА ЗА КОРДОНОМ']}
            />
            <Card
              title=""
              borderColor="#F4D06F"
              image="/svg/4_Forwhom.svg"
              items={['ПЕРЕКВАЛІФІКАЦІЯ', 'УВІЙТИ В АЙТІ', 'КАР\'ЄРНА СТРАТЕГІЯ']}
            />
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full md:hidden"
          >
            <CarouselContent className="">
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card
                  title=""
                  borderColor="#95D4F8"
                  image="/svg/1_Forwhom.svg" // Путь к изображению
                  items={['ПРОФОРІЄНТАЦІЯ', 'ПЕРША РОБОТА', 'РОБОТА ПІСЛЯ КУРСІВ']} 
                />
                </CarouselItem>  
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card
                  title=""
                  borderColor="#B5B0FF"
                  image="/svg/2_Forwhom.svg"
                  items={['ПОШУК РОБОТИ', 'ТЕСТОВЕ ІНТЕРВ\'Ю', 'ПІДГОТОВКА РЕЗЮМЕ']}
                />
                </CarouselItem>  
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card
                  title=""
                  borderColor="#3FAD78"
                  image="/svg/3_Forwhom.svg"
                  items={['ПІДВИЩЕННЯ', 'ЗМІНА РОБОТИ', 'РОБОТА ЗА КОРДОНОМ']}
                />
                </CarouselItem>  
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card
                  title=""
                  borderColor="#F4D06F"
                  image="/svg/4_Forwhom.svg"
                  items={['ПЕРЕКВАЛІФІКАЦІЯ', 'УВІЙТИ В АЙТІ', 'КАР\'ЄРНА СТРАТЕГІЯ']}
                />    
                </CarouselItem>  
            </CarouselContent>
            <div className="hidden lg:block">
              <CarouselPrevious/>
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}