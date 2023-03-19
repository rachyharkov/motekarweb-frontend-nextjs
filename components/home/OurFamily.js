import React, { useEffect, useRef, useState } from "react";
import { register } from 'swiper/element/bundle'
import { member } from "../../../data/member";

register()

export default function OurFamily() {

  const swiperElRef = useRef(null);
  const [positionnya, setPositionnya] = useState(0);

  const namaDanJabatan = member

  useEffect(() => {
    swiperElRef.current.addEventListener("slidechange", (e) => {
      setPositionnya(e.target.swiper.activeIndex);
    });

    // set initial position of swiper to 4
    swiperElRef.current.swiper.slideTo(4, 0);
  }, []);

  const myOptions = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <section className="section-vh-75 section-our-family">
      <div className="container-fluid section-our-family-inner section-inner text-center">
        <div className="row">
          <div className="col-12 p-0">
            <h4 className="section-subtitle section-subtitle-with-bg">
              Our Family
            </h4>
            <swiper-container class="our-families" pagination="false" pagination-clickable="true" slides-per-view="auto" navigation="true" watch-overflow="true" responsive-width="true"
              centered-slides="true" grab-cursor="true" style={{
                width: "100%",
                padding: "0 10%",
                height: "280px",
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              ref={swiperElRef}
              >
              <swiper-slide className="our-family">
                <img src="images/member-2.png" alt="our-family-2" />
              </swiper-slide>
              <swiper-slide className="our-family">
                <img src="images/member-3.png" alt="our-family-3" />
              </swiper-slide>
              <swiper-slide className="our-family">
                <img src="images/member-4.png" alt="our-family-4" />
              </swiper-slide>
              <swiper-slide className="our-family">
                <img src="images/member-5.png" alt="our-family-5" />
              </swiper-slide>
              <swiper-slide className="our-family">
                <img src="images/member-1.png" alt="our-family-1" />
              </swiper-slide>
              <swiper-slide className="our-family">
                <img src="images/member-6.png" alt="our-family-6" />
              </swiper-slide>
              <swiper-slide className="our-family">
                <img src="images/member-7.png" alt="our-family-7" />
              </swiper-slide>
              <swiper-slide className="our-family">
                <img src="images/member-1.png" alt="our-family-8" />
              </swiper-slide>
            </swiper-container>
            <h5 className="our-family-name text-white">{namaDanJabatan[positionnya].nama}</h5>
            <p className="our-family-position text-white">{namaDanJabatan[positionnya].jabatan}</p>
          </div>
        </div>
      </div>
    </section>
  );
}