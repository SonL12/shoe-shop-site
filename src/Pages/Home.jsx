import React from 'react'
import LoaderHome from '../components/loaderHome/LoaderHome'
import Hero from '../components/hero/hero'
import About from '../components/about/about'
import Navbarq from '../components/navbar/Navbarq'
import Worked from '../components/work/worked'
import Jasa from '../components/Service/jasa'
import Footer from '../components/footer/Footer'
const Home = () => {
  return (
    <div>
        <LoaderHome/>
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