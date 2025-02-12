import { CarouselSize } from "@/components/global/Slider/CarouselSize"
import Title from "@/components/global/title"

export const Reviews = () => {
  return(
    <section className="w-full h-full pb-7 sm:pb-14" id="reviews">
      <Title>історії успіху</Title>

      <div className="w-full flex justify-center px-4 py-6 lg:px-6 xl:p-[50px]">
       <CarouselSize/>
      </div>
    </section>
  )
}