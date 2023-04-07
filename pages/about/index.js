import Divider from "@/components/Divider";
import HeaderSection from "@/components/HeaderSection";
import { useEffect, useState, useRef } from "react";
import OurStory from "./our_story";
import OurTeam from "./our_team";
import WhyUs from "./why_us";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export function About() {

  // const location = useRouter()
  // const path = location.asPath.split('/')[2] ?? 'our-story'

  
  const menuNameReplaceMinusSignasSpaceAndCapitalize = (str) => {
    return str.replace(/-/g, ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
  }
  
  const [menunya, setMenunya] = useState('our-story')
  const [expandSideMenu, setExpandSideMenu] = useState(false)
  const nodeRef = useRef(null)

  const ExpandSideMenuHandler = () => {
    setExpandSideMenu(!expandSideMenu)
  }

  const showInfo = (menu) => {
    if (menu === 'our-story') {
      return <OurStory/>
    } else if (menu === 'why-us') {
      return <WhyUs/>
    } else if (menu === 'our-familia') {
      return <OurTeam/>
    } else {
      return <OurStory/>
    }
  }

  const setMenuHandler = (menu) => {
    setMenunya(menu)
    document.querySelectorAll('.side-nav-item button').forEach(el => {
      el.parentElement.classList.remove('active')
    })
    document.querySelector(`.side-nav-item button.${menu}`).parentElement.classList.add('active')
    console.log(menu)
  }
  return (
    <>
      <HeaderSection
        title={menuNameReplaceMinusSignasSpaceAndCapitalize(menunya)}
        imageBackground="images/1066_websize.jpg"
      />
      <Divider/>
      <div className="container pt-5 mx-auto" style={{'maxWidth': '860px'}}>
        <div className="row">
          <div className="side-nav col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <h4 className="side-nav-title">About</h4>
            <button className={'side-nav-btn-toggle ' + expandSideMenu} onClick={ExpandSideMenuHandler}><i className="fas fa-plus"></i></button>
            <ul className={'side-nav-list ' + expandSideMenu}> 
              <li className="side-nav-item active"><button onClick={() => setMenuHandler('our-story')} className="our-story side-nav-link">Our Story</button></li>
              <li className="side-nav-item"><button onClick={() => setMenuHandler('why-us')} className="why-us side-nav-link">Why Us?</button></li>
              <li className="side-nav-item"><button onClick={() => setMenuHandler('our-familia')} className="our-familia side-nav-link">Our Familia</button></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 position-relative">
                <TransitionGroup>
                  <CSSTransition
                    key={menunya}
                    timeout={1000}
                    classNames="aboutcontent"
                  >
                  {showInfo(menunya)}
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About