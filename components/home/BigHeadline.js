import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

export default function BigHeadline() {

  useEffect(() => {
    AOS.init()
  },[])

  return (
    <section className="section-vh-75 section-big-headline">
      <div className="container-fluid section-big-headline-inner section-inner h-100">
        <div className="row h-100">
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 d-flex justify-content-center flex-column" data-aos="fade-left">
            <div className="text-span-wrapper">
              <div className="span-1">Let’s</div>
              <div className="span-2">Work</div>
            </div>
            <div className="text-span-wrapper">
              <div className="span-3"><button className="btn btn-primary">Beyond Editing <i className="fa-solid fa-arrow-right"></i></button></div>
              <div className="span-4">Together</div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-right">
           <p><span>Bringing your</span> vision to life <br/>through expert video<br/>editing.</p>
          </div>
        </div>
      </div>
    </section>
  )
}