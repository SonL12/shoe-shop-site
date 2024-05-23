import React from 'react'
import Hero from '../components/hero/hero'
import About from '../components/about/about'
import Navbarq from '../components/navbar/Navbarq'
import Worked from '../components/work/worked'
import Jasa from '../components/Service/jasa'
import Footer from '../components/footer/Footer'
const Home = () => {
  return (
    <div>
        <Navbarq/>
        <Hero/>
        <About/>
        <Worked/>
        <Jasa/>
        <Footer/>
    </div>
  )
}

export default Home