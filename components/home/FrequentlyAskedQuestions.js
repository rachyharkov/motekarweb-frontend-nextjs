import React, { useEffect } from "react";
import axios from "axios";
import { getFaqs } from "../../../helper/api";
import AOS from 'aos';

export default function FrequentlyAskedQuestions() {

  const [dataFaqs, setDataFaqs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const toggleAccordion = (e) => {
    let itemsFaqElement = document.querySelectorAll(".faq-accordion button");
    const itemToggleStatus = e.target.getAttribute('aria-expanded');
    
    for (var i = 0; i < itemsFaqElement.length; i++) {
      itemsFaqElement[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggleStatus == 'false') {
      e.target.setAttribute('aria-expanded', 'true');
    }
  }
  
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true
    })
    getFaqs()
      .then((response) => {
        setDataFaqs(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  },[])

  return(
    <section className="section-vh-auto section-frequently-asked-questions">
      <div className="container-fluid section-frequently-asked-questions-inner section-inner h-100">
        <h4 className="section-subtitle section-subtitle-with-bg">Frequently Asked Questions</h4>
        <p className="text-center mt-4">Feel free to click one of the questions below we have prepared for you.</p>
        <div className="row h-100">
          <div className="col-sm-12 col-md-8 col-lg-8 mx-auto p-2 faq-accordion">
            {
              loading == true ? 'Loading...' : dataFaqs.map((dataFaq, index) => {
                return(
                  <div className="accordion-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                    <button id={'accordion-button' + index} aria-expanded="false" onClick={toggleAccordion}><span className="accordion-title">{dataFaq.question}</span><span className="icon" aria-hidden="true"></span></button>
                    <div className="faq-accordion-content">
                      <p>{dataFaq.answer}</p>
                    </div>
                  </div>
                )
              })
            }
            <p className="mt-4 text-center">
              Wise Man once said: Finding the right answer begins with the right question. Please <i>get in touch</i> if you have any further questions. We are all ears!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}