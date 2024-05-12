import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section className='about'id='about'>
      <div className="aboutTypo">
        <div className="aboutTypoText">About Us</div>
        <div className="aboutTypoText">About Us</div>
        <div className="aboutTypoText">About Us</div>
      </div>
      <div className="aboutContent">
        <h1 className='aboutInfo'>Sepatu Nike Air Jordan Terbaru</h1>
        <p className='aboutParagraph'>Nike Air Jordan awalnya dibuat sebagai Hall of Fame mantan pemain
          bola basket Michael Jordan, yang menjadi salah satu sepatu basket
          paling populer di dunia. Air Jordan diperkenalkan oleh Nike pada tahun
          1985 dan telah melalui banyak revisi. Saat ini, ada berbagai model
          sepatu yang tersedia, baik untuk pria, wanita, dan bahkan anak-anak.
          Meskipun sepatu Air Jordan original telah banyak berubah, sepatu ini
          masih sangat populer. Karena popularitas & permintaan yang tinggi
          inilah, sepatu ini memiliki harga yang sangat tinggi. Tapi di shoeshoeshoe,
          kamu bisa mendapatkan sepasang sepatu Air Jordan dengan
          penawaran terbaik. shoeshoeshoe juga menawarkan opsi pembayaran
          dengan cicilan menggunakan Atome. Jadi, tunggu apa lagi? Segera
          kunjungi shoeshoeshoe dan dapatkan Nike Air Jordan favorit kamu sekarang!</p>
        <a className='aboutbutton' href="#">Read More About Us
        <i class="uil uil-arrow-up-right"></i>
        </a>
      </div>
    </section>
  )
}

export default About