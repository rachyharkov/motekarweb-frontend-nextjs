import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

export default function BackgroundForAboveElement({ image }) {
  useEffect(() => {
    AOS.init()
  },[])

  return (
    <div className="background-for-above-element" data-aos="zoom-in"  style={{
      marginTop: '-98vh',
      position: 'absolute',
      right: 0,
      width: '100%',
      zIndex: -1,
      height: '20%'
    }}>
      <img src={image} alt="group-6" style={{
        width: '100%',
        height: '80%',
        objectFit: 'cover',
      }}/>
    </div>
  );
}