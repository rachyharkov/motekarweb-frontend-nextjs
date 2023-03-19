import React from "react";

export default function AboutUs() {
  return(
    <section className="section-vh-auto section-about-us">
      <div className="container-fluid section-about-us-inner section-inner h-100">
        <div className="row h-100">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center flex-column">
            <div className="section-about-us-images">
              <img src="images/1066_websize.jpg" className="section-about-us-image" alt="placeholder" />
              <img src="images/1066_websize.jpg" className="section-about-us-image" alt="placeholder" />
              <img src="images/1066_websize.jpg" className="section-about-us-image" alt="placeholder" />
              <img src="images/1066_websize.jpg" className="section-about-us-image" alt="placeholder" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex p-5 justify-content-center flex-column">
            <h4 className="section-subtitle section-subtitle-with-bg">About Us</h4>
            <p className="section-text-general text-justify">
              Motekar is a team of passionate people who master the process of video editing. Our aim is clear as pure as white wine in your glass to make the post-production of videographers simpler, faster and more profitable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}