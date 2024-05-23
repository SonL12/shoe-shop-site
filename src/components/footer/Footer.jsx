import React from 'react'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import Picture from "../../assets/logo/logo-shoe.jfif"
import "./Footer.css"

const Footer = () => {
  // const navigate = useNavigate()
  return (
    <section id='footer'>
        <div className="footerText">
            <img src={Picture} alt="" />
            <a href="/payment"><u>Payment</u></a>
            {/* <button onClick={() => navigate('/payment')}>Payment</button> */}
        </div>
        <div className="footerLink">
            <a href="https://nike.com/help" target='_blank' rel="noopener noreferrer">Get Help</a>
            <a href="https://nike.com" target='_blank' rel="noopener noreferrer">Contact Us</a>
        </div>
        <div className="footerSosmed">
            <a href="https://instagram.com/nike/" target='_blank' rel="noopener noreferrer">Instagram</a>
            <a href="https://youtube.com/@nike" target='_blank' rel="noopener noreferrer">Youtube</a>
            <a href="https://tiktok.com/@nike" target='_blank' rel="noopener noreferrer">TikTok</a>
            <a href="https://facebook.com/nike" target='_blank' rel="noopener noreferrer">Facebook</a>
        </div>
    </section>
  )
}

export default Footer