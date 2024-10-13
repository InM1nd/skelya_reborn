import { BigButton } from "@/components/ui/custom/BigButton"
import Link from "next/link"

export const Footer = () => {
  return(
    <section className="w-full text-white flex justify-center"> 
      <div className="container w-full flex-col px-3 pt-10 uppercase lg:px-6">
      <BigButton text={"задати питання"} />
        <div className="pt-24 flex flex-row justify-between pb-60 text-2xl ">
          <div className="w-full hidden text-[13px] lg:block xl:text-[26px]">
            <p className="pb-7 font-semibold">2024, Skelya career</p>
            <ul className="flex flex-col gap-3 xl:gap-6">
              <li><a href="/legal/privacy-policy">Політика конфіденційності</a></li>
              <li><a href="/legal/terms">Угода Користувача</a></li>
            </ul>
          </div>

          <div className="w-full flex flex-row-reverse justify-between md:gap-[50px] lg:flex-row lg:justify-end xl:gap-[120px] 2xl:gap-[164px]">
            <div className="text-[13px] xl:text-[26px]">
              <h4 className="pb-7 font-semibold xl:text-[26px]">ми у соц мережах</h4>
              <ul className="flex flex-col gap-3 xl:gap-6">
                <li><a href="#">telegram</a></li>
                <li><a href="#">instagram</a></li>
                <li><a href="#">tiktok</a></li>
                <li><a href="#">email</a></li>
              </ul>
            </div>

            <div className="text-[13px] xl:text-[26px]">
              <h4 className="pb-7 font-semibold xl:text-[26px]">меню</h4>
              <ul className="flex flex-col gap-3 xl:gap-6">
                <li><a href="#for_whom">для кого</a></li>
                <li><a href="#how_works">як це працює</a></li>
                <li><a href="#products">послуги</a></li>
                <li><a href="#reviews">історії успіху</a></li>
              </ul>
            </div>
          </div>  
        </div>

        
        <div className="block lg:hidden pb-14">
        <div className="">
            <p className="pb-5 text-xs font-unbounded">2024, <br/> Skelya career</p>  
        </div>
          <img src={"/svg/Hero_Words.svg"} alt='' className="w-full" />
          <ul className="flex justify-between text-xs pt-5">
            <li><Link href="/legal/privacy-policy">Політика конфіденційності</Link></li>
            <li>|</li>
            <li><Link href="/legal/terms">Угода Користувача</Link></li>
          </ul>
        </div>

        <img src={"/svg/Hero_Words.svg"} alt='' className="w-full pb-14 hidden lg:block" />
        
        </div>
    </section>
  )
}


{/* <section className="w-full text-white flex justify-center"> 
      <div className="container w-full flex-col px-6 pt-10 uppercase">
      <BigButton text={"задати питання"} />
        <div className="pt-24 flex justify-between pb-60 text-2xl">
          <div className="">
            <p className="pb-7 text-[26px] font-semibold">2024, Skelya career</p>
            <ul className="space-y-2">
              <li><a href="#">Політика конфіденційності</a></li>
              <li><a href="#">Угода Користувача</a></li>
            </ul>
          </div>

          <div className="flex gap-[164px]">
            <div>
              <h4 className="pb-7 text-[26px] font-semibold">ми у соц мережах</h4>
              <ul className="space-y-2">
                <li><a href="#">telegram</a></li>
                <li><a href="#">instagram</a></li>
                <li><a href="#">tiktok</a></li>
                <li><a href="#">email</a></li>
              </ul>
            </div>

            <div className="">
              <h4 className="pb-7 text-[26px] font-semibold">меню</h4>
              <ul className="space-y-2">
                <li><a href="#for_whom">для кого</a></li>
                <li><a href="#how_works">як це працює</a></li>
                <li><a href="#products">послуги</a></li>
                <li><a href="#reviews">історії успіху</a></li>
              </ul>
            </div>
          </div>  
        </div>
        
        <div className="pb-14">
          <img src={"/svg/Hero_Words.svg"} alt='' className="w-full" />
        </div>

        </div>
    </section> */}