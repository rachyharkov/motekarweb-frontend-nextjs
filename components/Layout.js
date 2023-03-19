import { useState, useEffect } from "react";
import BlurBackground from "./BlurBackground";
import NavbarMobile from "./NavbarMobile";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [size, setSize] = useState({
    x: 0,
    y: 0
  });

  const [showBlurBackground, setShowBlurBackground] = useState(false)
  
  let isMobileDevice = size.x < 768 ? true : false
  const updateSize = () => {
    setSize({
      x: window.innerWidth,
      y: window.innerHeight
    });
  }

  useEffect(() => {
    updateSize();
    const body = document.querySelector('body');
    showBlurBackground ? body.classList.add('no-scroll') : body.classList.remove('no-scroll');
    window.onresize = updateSize
  }, [showBlurBackground])

  return (
    <>
      <div style={{position: 'relative'}}>
        {showBlurBackground && <BlurBackground/>}
        <img className='header-logo animate__animated animate__fadeIn' src="images/logo-with-title-removebg.png" alt="logo" />
        {isMobileDevice ? <NavbarMobile showBlurCallback={setShowBlurBackground} showBlurStatus={showBlurBackground} /> : <Navbar/>}
        <main>
          {children}   
        </main>
        <Footer/>
      </div>
    </>
  )
}