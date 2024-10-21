import { CarouselSize } from "@/components/global/Slider/CarouselSize"
import Title from "@/components/global/title"

export const Reviews = () => {
  return(
    <section className="w-full pb-7 sm:pb-20" id="reviews">
      <Title>історії успіху</Title>

      <div className="w-full flex justify-center pt-7 md:px-4 md:pt-10">
       <CarouselSize/>
      </div>
    </section>
  )
}