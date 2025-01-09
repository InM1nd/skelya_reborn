'use client'

import Header from "@/components/global/header";
import IntensiveHero from "./IntensiveHero";
import { Footer } from "@/app/parts/footer";
import IntensiveForWhom from "./IntensiveForWhom";
import IntensiveProgram from "./IntensiveProgram";
import IntensiveAbout from "./IntensiveAbout";
import IntensiveCurator from "./IntensiveCurator";


const Intensive = () => {

  return(
    <>
     <Header/>
     <IntensiveHero/>
     <IntensiveForWhom/>
     <IntensiveAbout/>
     <IntensiveProgram/>
     <IntensiveCurator/>
     <Footer/>
    </>
  )
}

export default Intensive;