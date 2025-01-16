'use client'
import * as React from "react"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
export function CarouselSize() {

  const images = [
    {
      original: "/svg/Review/Vlad.png",
      hover: "/svg/Review/Vlad_Hover.png",  // Заменяющее изображение при ховере
    },
    {
      original: "/svg/Review/Mari.png",
      hover: "/svg/Review/Mari_Hover.png",
    },
    {
      original: "/svg/Review/Sasha.png",
      hover: "/svg/Review/Sasha_Hover.png",
    },
    {
      original: "/svg/Review/Vika.png",
      hover: "/svg/Review/Vika_Hover.png",
    },
    {
      original: "/svg/Review/Dima.png",
      hover: "/svg/Review/Dima_Hover.png",
    },
  ];

  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent className="">
        {images.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="relative">
              {/* Оригинальное изображение */}
              <img src={image.original} alt={`Slide ${index}`} className="block w-full h-auto" />

              {/* Второе изображение для ховера */}
              {/* <img
                src={image.hover}
                alt={`Hover Slide ${index}`}
                className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
              /> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden lg:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}
