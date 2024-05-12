import React from 'react'
import { Link } from 'react-router-dom'
import Picture from "../../assets/NIKE Inc PNG Logo Files/006_nike-logos-jordan-white.png"
import "./Footer.css"

const footer = () => {
  return (
    <section id='footer'>
        <div className="footerText">
            <img src={Picture} alt="" />
            <span>Contact Us</span>
        </div>
        <div className="footerLink">
            <a href="https://nike.com/help">Get Help</a>
            <a href="https://nike.com" target='_blank'>Website</a>
        </div>
        <div className="footerSosmed">
            <a href="https://instagram.com/nike/" target='_blank'>Instagram</a>
            <a href="https://youtube.com/@nike" target='_blank'>Youtube</a>
            <a href="https://tiktok.com/@nike" target='_blank'>TikTok</a>
            <a href="https://facebook.com/nike" target='_blank'>Facebook</a>
        </div>
    </section>
  )
}

export default footer