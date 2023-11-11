// import React from "react";
import { member } from "@/data/member"
// import LazyLoad from "react-lazy-load";
import Image from "next/image";

function OurTeam({ onClickTeamNameCallback }) {

  return(
    <section className="section-vh-auto">
      <h4 className="bold-title" style={{'color': 'var(--color-accent)'}}>MEET <span style={{'color': 'var(--color-secondary)'}}>OUR FAMILY TEAM MEMBER</span></h4>
      <p className="text-accent">
      Our all-hands meetings are like work family reunions. Just <span style={{'color':'var(--color-secondary)'}}>click on the familia member's name</span> to find out more.
      </p>
      <div className="container">
        <div className="row">
          {
            Object.keys(member).sort((a, b) => member[a].posisi - member[b].posisi).map((key, index) => {
              return (
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" key={index}>
                  <div className="card-team">
                    <figure className="card-team-image">
                      <Image src={'/images/' + member[key].image_transparent} alt={'member' + member[key].nama} objectFit="contain" width={300} height={600}/>
                    </figure>
                    <h5 className="card-team-title" style={{'cursor': 'pointer'}} onClick={() => onClickTeamNameCallback('member-info', member[key])}>{member[key].nama}</h5>
                    <p className="card-team-subtitle">{member[key].jabatan}</p>
                    <div className="card-team-social">
                      <button className="card-team-social-button" type="button" aria-label="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button className="card-team-social-button" type="button" aria-label="twitter">
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button className="card-team-social-button" type="button" aria-label="instagram">
                        <i className="fab fa-instagram"></i>
                      </button>
                      <button className="card-team-social-button" type="button" aria-label="linkedin">
                        <i className="fab fa-linkedin-in"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default OurTeam;