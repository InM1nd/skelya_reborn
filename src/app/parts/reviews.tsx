import { CarouselSize } from "@/components/global/Slider/CarouselSize"
import Title from "@/components/global/title"

export const Reviews = () => {
  return(
    <section className="w-full pb-7 sm:pb-20 lg:pb-40 lg:min-h-[1200px]" id="reviews">
      <Title>історії успіху</Title>

      <div className="w-full flex justify-center pt-7 md:px-6 md:pt-10">
       <CarouselSize/>
      </div>
    </section>
  )
}