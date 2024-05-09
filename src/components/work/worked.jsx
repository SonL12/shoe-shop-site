import React from 'react'
import "./work.css"
import Pitcure from "../../assets/pg evous netflix.png"

const worked = () => {
  return (
    <section id='working'>
      <div className="workDesign">
        <div className="workTypo">
          <span>work</span>
          <span>work</span>
          <span>work</span>
        </div>
        <span className='workOpening'>Featured projects</span>
      </div>
      <div className="workContainerMain">
      <div className="workMain">
        <img className='workImage' src={Pitcure} alt="" />
        <div className="workText">
            <span className="workNumber">01</span>
            <div className="workTitle">
              <span>Panggung Gembira</span>
              <span>Evolutioners Zealous</span>
          </div>
          
        </div>
      </div>
      <div className="workLink">
        <a className='workLinked' href="#">
        <i class="uil uil-arrow-up-left"></i>
        <span>online Preview</span>
          
        </a>
      </div>
      </div>
    </section>
  )
}

export default worked