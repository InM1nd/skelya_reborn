// import { Footer } from "./parts/footer";
import { ForWhom } from "./parts/for_whom";
import { Hero } from "./parts/hero";
// import { HowWorks } from "./parts/how_works";
// import { Products } from "./parts/products";
// import { Reviews } from "./parts/reviews";


export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col bg-black">
      <Hero/>
      <ForWhom/>
      {/* <HowWorks/> */}
      {/* <Products/> */}
      {/* <Reviews/> */}
      {/* <Footer/> */}
    </main>
  );
}
