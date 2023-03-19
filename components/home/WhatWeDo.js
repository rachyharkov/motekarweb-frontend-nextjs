import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { register } from 'swiper/element/bundle'

register()

export default function WhatWeDo() {
  const swiperElRef = useRef(null);
  const [videos, setVideos] = useState([]);
  
  const myOptions = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  }

  const addVideo = (element) => {
    setVideos((videos) => [...videos, element]);
  };

  const stopAllVideosExcept = (video) => {
    videos.forEach((v) => {
      if (v !== video) {
        v.pauseVideo();
      }
    });
  };

  return (
    <section className="section-vh-75 section-what-we-do">
      <div className="container-fluid section-what-we-do-inner section-inner text-center">
        <div className="row">
          <div className="col-12">
            <h4 className="section-subtitle section-subtitle-with-bg">
              What We Do
            </h4>
            <h2>
              WE SPECIALIZE IN ONE THING, AND WE DO IT PERFECTLY: EDITING YOUR
              WEDDING FILM
            </h2>
            <p className="section-text-general">
              We bring your couple's tales to life, tailored to your vision. Our
              streamlined approach allows you to prioritize your work, family,
              or other pursuits. Streamline your workload. Produce high-quality
              films in less time. Experience peace of mind.
            </p>
            <div
              className="section-what-we-do-galleries"
              style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
            >
              <swiper-container
                ref={swiperElRef}
                class="mySwiper"
                thumbs-swiper=".mySwiper2"
                space-between="10"
                navigation="true"
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
              >
                <swiper-slide>
                  <YouTube
                    style={{ height: "100%", width: "100%" }}
                    videoId="2J7xlDH4QkA"
                    opts={myOptions}
                    onReady={(event) => addVideo(event.target)}
                    onStateChange={(event) => { if (event.data === 1) { stopAllVideosExcept(event.target) } }}
                  />
                </swiper-slide>
                <swiper-slide>
                  <YouTube
                    style={{ height: "100%", width: "100%" }}
                    videoId="F2tWmS3Lzic"
                    opts={myOptions}
                    onReady={(event) => addVideo(event.target)}
                    onStateChange={(event) => { if (event.data === 1) { stopAllVideosExcept(event.target) } }}
                  />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </swiper-slide>
              </swiper-container>

              <swiper-container
                class="mySwiper2"
                space-between="10"
                slides-per-view="4"
                free-mode="true"
                watch-slides-progress="true"
                style={{
                  'transform': 'scale(0.7)',
                  'marginTop': '-13px'
                }}
              >
                <swiper-slide>
                  <img src="https://i3.ytimg.com/vi/2J7xlDH4QkA/maxresdefault.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://i3.ytimg.com/vi/F2tWmS3Lzic/maxresdefault.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </swiper-slide>
              </swiper-container>
            </div>
            <button className="btn btn-primary mt-3">
              View Our Extended Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
