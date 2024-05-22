import React from 'react'
import "./work.css"
import Picture from "../../assets/toko-sepatu.jpg"

const worked = () => {
  return (
    <section id='working'>
      <div className="workDesign">
        <div className="workTypo">
          <span>shoe</span>
          <span>shoe</span>
          <span>shoe</span>
        </div>
        <span className='workOpening'>S T O R E</span>
      </div>
      <div className="workContainerMain">
      <div className="workMain">
        <img className='workImage' src={Picture} alt="" />
      </div>
      <div className="workLink">
        <a className='workLinked' href="https://maps.app.goo.gl/iwnybzvaLurrRKby5?g_st=iw" target='_blank' rel="noopener noreferrer">
        <i class="uil uil-arrow-up-left"></i>
        <span>Norrmalm, Stockholm, Swedia</span>
        </a>
      </div>
      </div>
    </section>
  )
}

export default worked