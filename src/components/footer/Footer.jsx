import React from 'react'
import { Link } from 'react-router-dom'
import Picture from "../../assets/download (8).png"
import "./Footer.css"

const footer = () => {
  return (
    <section id='footer'>
        <div className="footerText">
            <img src={Picture} alt="" />
            <span>Kontak sekarang!!!</span>
        </div>
        <div className="footerLink">
            <a href="#">Email</a>
            <a href="#">Whatsapp</a>
        </div>
        <div className="footerSosmed">
            <a href="https://www.instagram.com/barriqkyksm/">instagram</a>
            <a href="https://youtube.com/@Berzme">Youtube</a>
            <a href="#">TikTok</a>
            <a href="#">Facebook</a>
        </div>
    </section>
  )
}

export default footer