// import BackgroundForAboveElement from '@/components/BackgroundForAboveElement'
import HeroLanding from '@/components/home/HeroLanding'
import AboutUs from '@/components/home/AboutUs'
import WhatWeDo from '@/components/home/WhatWeDo'
import WorkingProcess from '@/components/home/WorkingProcess'
import OurFamily from '@/components/home/OurFamily'
import BigHeadline from '@/components/home/BigHeadline'
import FrequentlyAskedQuestions from '@/components/home/FrequentlyAskedQuestions'
import Divider from '@/components/Divider'
import BackgroundForAboveElement from '@/components/BackgroundForAboveElement'

export default function Home() {
  return(
    <>
      <HeroLanding/>
      <Divider/>
      <AboutUs/>
      <WhatWeDo/>
      <WorkingProcess/>
      <OurFamily/>
      {/* <BackgroundForAboveElement image="images/group-6.svg"/> */}
      <BigHeadline/>
      <FrequentlyAskedQuestions/>
    </>
  ) 
}