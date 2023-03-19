import React, { useEffect, useRef, useState } from "react";
import "animate.css";

class VisualizeStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepSelected: this.props.stepSelected,
      insideBool: false,
      percentage: 0,
    };
  }

  componentDidMount() {
    console.log("Component Mounted");
    let i = 0;
    let interval = setInterval(() => {
      if (i == 100) {
        i = 0;
      }
      this.setState({ percentage: i });
      i++;
    }, 700);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.stepSelected !== this.props.stepSelected) {
      setTimeout(() => {
        this.setState({ stepSelected: this.props.stepSelected });
      }, 400);
    }
  }


  componentWillUnmount() {
    console.log('Component Unmounted')
  }

  render() {
    let renderedStep = null;
    if (this.state.stepSelected == 1) {
      renderedStep = <div className="working-process-detail-visualization step-1 animate__animated animate__zoomIn" key={this.state.stepSelected}>
              <img
                className="animate__animated animate__bounceIn rectangle-14"
                src="images/rectangle-14.svg"
                alt="rectangle 14"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-21"
                src="images/rectangle-21.svg"
                alt="rectangle 21"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-15"
                src="images/rectangle-15.svg"
                alt="rectangle 15"
              />
              <i className='bx bx-up-arrow-alt animate__animated animate__bounceIn'></i>
            </div>
    }
    if (this.state.stepSelected == 2) {
      renderedStep = <div className="working-process-detail-visualization step-2 animate__animated animate__zoomIn" key={this.state.stepSelected}>
              <img
                className="rectangle-14"
                src="images/rectangle-14.svg"
                alt="rectangle 14"
              />
              <img
                className="rectangle-14"
                src="images/rectangle-14.svg"
                alt="rectangle 14"
              />
              <p className="progress-indicator-illustration">{this.state.percentage}%</p>
              <img
                className="rectangle-16"
                src="images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="rectangle-16"
                src="images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <div className="user-illustration user-ill">
                <img
                  src="images/user-illustration.svg"
                  alt="user-illustration"
                />
                <p>Client</p>
              </div>
              <div className="user-illustration motekar-ill">
                <img
                  src="images/motekar-illustration.svg"
                  alt="user-illustration"
                />
                <p>Motekar</p>
              </div>
            </div>
    }
    if (this.state.stepSelected == 3) {
      renderedStep = <div className="working-process-detail-visualization step-3 animate__animated animate__zoomIn" key={this.state.stepSelected}>
      <img
                className="animate__animated animate__bounceIn rectangle-14"
                src="images/rectangle-14.svg"
                alt="rectangle 14"
              />
              <div className="form-illustration">
                <img
                className="animate__animated animate__bounceIn rectangle-2"
                  src="images/rectangle-2.svg"
                  alt="rectangle-2"
                />
                <p>NOTES <br/> _____<br/>_____</p>
              </div> 
              <div className="video-file-illustration">
                <img
                className="animate__animated animate__bounceIn rectangle-2"
                  src="images/rectangle-2.svg"
                  alt="rectangle-2"
                />
                <img
                className="animate__animated animate__bounceIn play-circle"
                  src="images/play-circle.svg"
                  alt="play-circle"
                />
              </div>
              <div className="user-illustration user-ill">
                <img
                  src="images/user-illustration.svg"
                  alt="user-illustration"
                />
                <p>Client</p>
              </div>
              <div className="user-illustration motekar-ill">
                <img
                  src="images/motekar-illustration.svg"
                  alt="user-illustration"
                />
                <p>Motekar</p>
              </div>
              <div className="button-download-illustration">Download</div>
            </div>
    }
    
    return renderedStep
  }
}

export default VisualizeStep;
