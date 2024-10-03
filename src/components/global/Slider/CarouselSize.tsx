import * as React from "react"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
export function CarouselSize() {

  const photos = [
    "/svg/Review/Vlad.png",   // 1
    "/svg/Review/Nikita.png", // 2
    "/svg/Review/Mari.png",   // 3
    "/svg/Review/Sasha.png",   // 4
    "/svg/Review/Vika.png", // 5
    "/svg/Review/Dima.png" // 6
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full container"
    >
      <CarouselContent className="">
        {photos.map((photo, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <img src={photo} alt={`Slide ${index}`} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden lg:block">
        <CarouselPrevious/>
        <CarouselNext />
      </div>
    </Carousel>
  )
}