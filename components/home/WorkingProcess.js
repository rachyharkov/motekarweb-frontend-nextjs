import React, { Suspense, useEffect, useRef, useState } from "react";
import 'animate.css'
// import VisualizeStep from "../../components/VisualizeStep";

const VisualizeStep = React.lazy(() => import('../../../components/VisualizeStep'))

export default function WorkingProcess() {

  const [stepSelected, setStepSelected] = useState(1)
  const [transitionState, setTransitionState] = useState(false)
  const [clicked, setClicked] = useState(false)

  let activeStateIcon = 'working-process-step-selected-status expanded'
  let inactiveStateIcon = 'working-process-step-selected-status'
  let activeStateBg = 'working-process-selected'
  let i = 1
  let interval = null

  const titleAndDescription = {
    1: {
      title: 'Fill the Form',
      description: 'Fill the form with your details and upload your video.'
    },
    2: {
      title: 'Deliver Progress',
      description: 'We update the editing process to you on our web portal'
    },
    3: {
      title: 'Download Films',
      description: 'We will deliver the video to you within 24 hours.'
    },
  }


  const runAutoChangeVisualStep = () => {
    interval = setInterval(() => {
      if(i == 4) {
        i = 1
      }
      handleStepChange({target: {checked: true, value: i}})
      i++
    }, 6000)
  }

  const handleStepChange = (e) => {
    if(e.target.checked) {
      document.querySelector('.working-process-detail-visualization').classList.remove('animate__animated', 'animate__zoomIn')
      document.querySelector('.working-process-detail-visualization').classList.add('animate__animated', 'animate__zoomOut')
      setStepSelected(e.target.value)
    }
  }
  
  useEffect(() => {
    runAutoChangeVisualStep()
  }, [])


  return(
    <section className="section-vh-75 section-working-process">
      <div className="container-fluid section-working-process-inner section-inner text-center">
        <h4 className="section-subtitle section-subtitle-with-bg">
          Working Process
        </h4>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="card working-process-detail p-3">
              <div className="card-body">
                <Suspense fallback={<div>Loading...</div>} className="card-body">
                  <VisualizeStep stepSelected={stepSelected} />
                </Suspense>
              </div>
              <h5 className="text-white">{titleAndDescription[stepSelected].title}</h5>
              <p className="card-text text-white">{titleAndDescription[stepSelected].description}</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <ul className="working-process-steps">
              <li className={"working-process-step working-process-step-1 " + (stepSelected == 1 && activeStateBg)}>
                <span className="working-process-step-number">01</span>
                <input type="radio" name="working-process-step" id="step-1" value={1} onChange={handleStepChange} />
                <label htmlFor="step-1">Fill The E-Form</label>
                <span className={stepSelected == 1 ? activeStateIcon : inactiveStateIcon}></span>
              </li>
              <li className={"working-process-step working-process-step-2 " + (stepSelected == 2 && activeStateBg)}>
                <span className="working-process-step-number">02</span>
                <input type="radio" name="working-process-step" id="step-2" value={2} onChange={handleStepChange} />
                <label htmlFor="step-2">Deliver Progress</label>
                <span className={stepSelected == 2 ? activeStateIcon : inactiveStateIcon}></span>
              </li>
              <li className={"working-process-step working-process-step-3 " + (stepSelected == 3 && activeStateBg)}>
                <span className="working-process-step-number">03</span>
                <input type="radio" name="working-process-step" id="step-3" value={3} onChange={handleStepChange} />
                <label htmlFor="step-3">Download Films</label>
                <span className={stepSelected == 3 ? activeStateIcon : inactiveStateIcon}></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}