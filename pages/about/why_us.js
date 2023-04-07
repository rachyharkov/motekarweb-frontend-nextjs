import Link from "next/link";
import YouTube from "react-youtube";
// import AboutLayout from '..'
import { AboutPageLayout } from "./";


function WhyUs() {
  return(
    <section className="section-vh-auto">
      <h4 className="bold-title" style={{'color': 'var(--color-accent)'}}>5 REASONS WHY <span style={{'color': 'var(--color-secondary)'}}>MOTEKAR STUDIO EXIST AND VALUABLE</span> FOR VIDEOGRAPHERS</h4>
      <ul className="text-accent fa-ul">
        <li className="m-2"><span className="fa-li"><i className="fa-solid fa-check-circle" style={{'color': 'var(--color-secondary)'}}></i></span>Studios book more than they can edit. Outsourcing your Photo & Video editing, or at least some of it, can be a vital part of staying on top of your workload and delivering a great service to your clients.</li>
        <li className="m-2"><span className="fa-li"><i className="fa-solid fa-check-circle" style={{'color': 'var(--color-secondary)'}}></i></span>Some people prefer shooting more than editing. There’s nothing wrong in admitting you LOVE shooting, but sometimes the idea of sitting in front of the computer for an entire week editing each projects can feel painful. Let us do the hard work for you!.</li>
        <li className="m-2"><span className="fa-li"><i className="fa-solid fa-check-circle" style={{'color': 'var(--color-secondary)'}}></i></span>Increase profitability. Outsourcing your projects might allow you to shooting more, or take on commercial film work. The hourly income for the shooting and management side of these projects might be double or triple that of what you spend on outsourcing your edits.</li>
        <li className="m-2"><span className="fa-li"><i className="fa-solid fa-check-circle" style={{'color': 'var(--color-secondary)'}}></i></span>To focus on building other parts of your business.</li>
        <li className="m-2"><span className="fa-li"><i className="fa-solid fa-check-circle" style={{'color': 'var(--color-secondary)'}}></i></span>Free up time for family and friends.</li>
      </ul>
      <p className="text-accent">
        Feel free to check video below which is a short clip about our company.
      </p>
      <YouTube videoId="GPZVTX9Mh2g" className="m-0 w-100 text-center" opts={{'width': '100%', 'height': '250px'}} />

      <p className="text-accent" style={{'fontStyle': 'italic', 'fontSize': '13px'}}>
        Sounds awesome right? Allow us to introduce ourselves. Head to <Link href="/about/our-familia" className="text-accent">"Our Story"</Link> page to find out more.
      </p>
    </section>
  )
}

export default WhyUs;