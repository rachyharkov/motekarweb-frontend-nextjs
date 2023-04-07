// import React from "react";
// import { Link } from "react-router-dom";

import Link from 'next/link';
import { AboutPageLayout } from './'
// import '../../assets/css/page-about.css';


const OurStory = () => {
  return(
    <section className="section-vh-auto">
      <h4 className="text-white bold-title">SINCE 2017, WE'VE EDITED <span style={{'color': 'var(--color-secondary)'}}>OVER 1300 PROJECTS FOR OVER 100 CLIENTS</span>, WORLD-WIDE</h4>
      <p className="text-white text-justify">
        Motekar Studio is a wedding video editing company that specialize in creating beautiful and timeless memories of your wedding film.
      </p>
      <p className="text-white text-justify">
      Our story began when We saw a gap in the wedding industry for high-quality and personalized wedding videos. Then We decided to start a company that would bring our expertise in wedding video editing and artistry to wedding videographers around the world who need a hand for their editing backlog.
      </p>
      <p className="text-white text-justify">
      Since 2021, our company has grown and evolved, always staying true to our commitment to delivering exceptional quality and customer service. Our team of skilled wedding video editors and support staff is dedicated to delivering every detail and emotion of your wedding day and bringing your vision to life through our carefully crafted videos.
      </p>
      <p className="text-white text-justify">
      Our goal is to make the process of creating your wedding video as stress-free and enjoyable as possible. We understand that your wedding is a once-in-a-lifetime event, and we are honored to be a part of it.
      </p>
      <p className="text-white text-justify">
      Thank you for considering us as your wedding video editor.
      </p>
      <p className="text-white text-justify" style={{'fontStyle': 'italic', 'fontSize': '13px'}}>
        Want to know why choose us? Head to <Link href="why-us" className="text-accent">"Why Us"</Link> page to find out more.
      </p>
    </section>
  )
}

// const OurStoryLayout = (page) => <AboutPageLayout>{page}</AboutPageLayout>

// OurStory.getLayout = OurStoryLayout

export default OurStory;