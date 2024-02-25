import React from "react"
import "./WhatWeDo.css"
import '@fontsource/poppins'
import intDesign from "./images/interior-design.png"
import projectMgt from "./images/pmgt.png"
import MasterPlan from "./images/masterplanning.png"
import Architecture from "./images/Architecture.png"
import sideBracket from "./images/sideBracket.png" 


export default function WhatWeDo (){
  return (
    <div className="frame">
      <div className="text-wrapper">What we do</div>
      <p className="message">View our services and let's get you started</p>
      <div className="group">
        <div className="overlap">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="group-2">
            <img className="interior-design" alt="Interior-Design" src={intDesign} />
            <img className="project-mgt" alt="Project-Management" src={projectMgt} />
            <img className="mater-planning" alt="Master Planning" src={MasterPlan} />
            <div className="text-wrapper-2">Interior Design</div>
            <div className="text-wrapper-3">Project Management</div>
            <div className="overlap-group">
              <div className="text-wrapper-4">Masterplanning</div>
              <img className="line" alt="Line" src="line-65.svg" />
            </div>
            <p className="p">Ensuring seamless execution from concept to completion</p>
            <p className="text-wrapper-5">Shaping the community with a forward-thinking approach</p>
            <p className="text-wrapper-6">Creating environments that resonate with individual tastes</p>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <img className="architecture" alt="Architecture" src= {Architecture} />
                <div className="overlap-2">
                  <div className="text-wrapper-4">Architecture</div>
                  <img className="line" alt="Line" src="line-62.svg" />
                </div>
                <p className="text-wrapper-7">Elevating spaces with innovative architectural designs</p>
              </div>
            </div>
            <img className="img" alt="Line" src="line-64.svg" />
            <img className="line-2" alt="Line" src="line-63.svg" />
          </div>
        </div>
      </div>
      <div className="group-3">
        <div className="overlap-3">
          <div className="text-wrapper-8">Get Started</div>
          <img className="line-3" alt="Line" src="line-66.svg" />
        </div>
        <img className="arrow" alt="Arrow" src="arrow-7.svg" />
      </div>
      <img className="sideBracket" alt="sideBracket" src={sideBracket} />
    </div>
  );
};