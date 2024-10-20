import * as React from "react"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/global/card"
import Title from "@/components/global/title"
import { BigButton } from "@/components/ui/custom/BigButton"


export const ForWhom = () => {
  return(
    <section className="w-full pb-7 sm:pb-20" id="for_whom">
      <Title>для кого</Title>
      <div className="w-full flex justify-center">
        <div className="w-full container flex justify-center flex-col px-2 pt-7 md:px-6">   
          <div className="hidden md:grid md:grid-cols-1 md:gap-4 md:pb-3 lg:grid-cols-4 ">
            <Card
              title=""
              image="/svg/Pink_Forwhom.svg" // Путь к изображению
              items={['ПРОФОРІЄНТАЦІЯ', 'ПЕРША РОБОТА', 'РОБОТА ПІСЛЯ КУРСІВ']}
            />
            <Card
              title=""
              image="/svg/Purple_Forwhom.svg"
              items={['ПОШУК РОБОТИ', 'ТЕСТОВЕ ІНТЕРВ\'Ю', 'ПІДГОТОВКА РЕЗЮМЕ']}
            />
            <Card
              title=""
              image="/svg/Green_Forwhom.svg"
              items={['ПІДВИЩЕННЯ', 'ЗМІНА РОБОТИ', 'РОБОТА ЗА КОРДОНОМ']}
            />
            <Card
              title=""
              image="/svg/Blue_Forwhom.svg"
              items={['ПЕРЕКВАЛІФІКАЦІЯ', 'УВІЙТИ В АЙТІ', 'КАР\'ЄРНА СТРАТЕГІЯ']}
            />
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full container md:hidden"
          >
            <CarouselContent className="">
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card
                    title=""
                    image="/svg/Pink_Forwhom.svg" // Путь к изображению
                    items={['ПРОФОРІЄНТАЦІЯ', 'ПЕРША РОБОТА', 'РОБОТА ПІСЛЯ КУРСІВ']}
                  />
                </CarouselItem>  
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card
                    title=""
                    image="/svg/Purple_Forwhom.svg"
                    items={['ПОШУК РОБОТИ', 'ТЕСТОВЕ ІНТЕРВ\'Ю', 'ПІДГОТОВКА РЕЗЮМЕ']}
                  />
                </CarouselItem>  
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card
                    title=""
                    image="/svg/Green_Forwhom.svg"
                    items={['ПІДВИЩЕННЯ', 'ЗМІНА РОБОТИ', 'РОБОТА ЗА КОРДОНОМ']}
                  />
                </CarouselItem>  
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card
                    title=""
                    image="/svg/Blue_Forwhom.svg"
                    items={['ПЕРЕКВАЛІФІКАЦІЯ', 'УВІЙТИ В АЙТІ', 'КАР\'ЄРНА СТРАТЕГІЯ']}
                  />
                </CarouselItem>  
            </CarouselContent>
            <div className="hidden lg:block">
              <CarouselPrevious/>
              <CarouselNext />
            </div>
          </Carousel>

          <a href="https://t.me/skelya_careers" className="pt-4">
            <BigButton
              text={"Свій запит"}
            />
          </a>
        </div>
      </div>
    </section>
  )
}