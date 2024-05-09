import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section className='about'id='about'>
      <div className="aboutTypo">
        <div className="aboutTypoText">About me</div>
        <div className="aboutTypoText">About me</div>
        <div className="aboutTypoText">About me</div>
      </div>
      <div className="aboutContent">
        <h1 className='aboutInfo'>mahasiswa yang biasa aja,ga pinter pinter amat,cuma mau belajar dari pengalaman hidup</h1>
        <a className='aboutbutton' href="#">Read More About me
        <i class="uil uil-arrow-up-right"></i>
        </a>
      </div>
    </section>
  )
}

export default About