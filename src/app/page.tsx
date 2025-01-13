import { Hero } from "./parts/hero";
import { Footer } from "./parts/footer";

import { ForWhom } from "./parts/for_whom";
import { HowWorks } from "./parts/how_works";
import { Products } from "./parts/products";
import { Reviews } from "./parts/reviews";
import { Fishka } from "./parts/fishka";
import ConsultantsSection from "./parts/consultants";
import { Faq } from "./parts/faq";
import FloatingButton from "@/components/global/floatingButton";


export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col bg-black">
      <Hero/>
      <Fishka />
      <ConsultantsSection/>
      <ForWhom/>
      <Products/>
      <HowWorks/>
      <Reviews/>
      <Faq/>
      <FloatingButton/>
      <Footer/>
    </main>
  );
}
