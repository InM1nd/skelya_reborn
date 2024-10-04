
import StepsSection from "@/components/global/Steps/StepsSection"
import Title from "@/components/global/title"



export const HowWorks = () => {
  return(
    <section className="w-full h-full pb-14 lg:pb-0 lg:h-screen lg:min-h-[1000px]" id="how_works">
      <Title>як це працює</Title>
      <div className="w-full flex justify-center">
        <div className="w-full container flex flex-col-reverse justify-center py-5 gap-[35px] lg:flex-row px-2 md:px-6 md:py-10 ">
          <div className="relative lg:w-1/2">
            <img src={"/svg/How_Format.svg"} alt='' className="w-full"/>
            
          </div>
          <div className="h-full lg:w-1/2 ">
            <StepsSection/>
          </div>
        </div>
      </div>
    </section>
  )
}