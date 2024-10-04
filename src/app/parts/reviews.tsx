import { CarouselSize } from "@/components/global/Slider/CarouselSize"
import Title from "@/components/global/title"

export const Reviews = () => {
  return(
    <section className="w-full lg:h-screen lg:min-h-[1000px]" id="reviews">
      <Title>історії успіху</Title>

      <div className="w-full flex justify-center pt-7 md:px-6 md:pt-10">
       <CarouselSize/>
      </div>
    </section>
  )
}