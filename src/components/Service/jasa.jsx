import React from 'react'
import "./jasa.css"
import { motion, useScroll, useTransform } from 'framer-motion'


const Jasa = () => {
    const {scrollYProgress} = useScroll()
    const Depanakhir= useTransform(scrollYProgress,[0,1],[0,600])
    const Belakangakhir= useTransform(scrollYProgress,[0,1],[0,400])
    const Akhir= useTransform(scrollYProgress,[0,1],[0,200])

  return (
    <section id='service' >
        <div className="serviceTypo">
            <motion.span style={{x:Depanakhir}}>
            shoeshoe<span className='OutlineTypo'>shoe</span>-shoe{""}
            <span className='OutlineTypo'>shoeshoe</span>-shoe{""}
            <span className='OutlineTypo'>shoeshoe</span>-shoe{""}
            <span className='OutlineTypo'>shoeshoe</span>-shoe{""}
            <span className='OutlineTypo'>shoeshoe</span>- {""}
            </motion.span>

            <motion.span style={{x: Belakangakhir}}>
            air <span className='OutlineTypo'>jordan</span>-air {""}
            <span className='OutlineTypo'>jordan</span>-air {""}
            <span className='OutlineTypo'>jordan</span>-air {""}
            <span className='OutlineTypo'>jordan</span>-air {""}
            <span className='OutlineTypo'>jordan</span>-{""}
            </motion.span>

            <motion.span style={{x:Akhir}}>
            <span className='outlineTypo'>meet </span>our team - {""}
            <span className='outlineTypo'>meet </span>our team - {""}
            <span className='outlineTypo'>meet </span>our team - {""}
            <span className='outlineTypo'>meet </span>our team - {""}
            </motion.span>
        </div>
        <div className="serviceStack">
            <div className="serviceTechStack">
                <span><a href="https://www.nike.com/id/t/air-jordan-1-retro-high-og-shoes-Pz6fZ9" target="_blank" rel="noopener noreferrer">Air Jordan 1 Retro High OG</a></span>
                <span><a href="https://www.nike.com/id/t/air-jordan-legacy-312-low-shoes-tNzTNk/FQ7827-100" target="_blank" rel="noopener noreferrer">Air Jordan Legacy 312 Low</a></span>
                <span><a href="https://www.nike.com/id/t/air-jordan-1-low-shoes-nGLZR9/AO9944-441" target="_blank" rel="noopener noreferrer">Air Jordan 1 Low</a></span>
                <span><a href="https://www.nike.com/id/t/air-jordan-9-g-golf-shoes-nNqtwL/FN6930-001" target="_blank" rel="noopener noreferrer">Air Jordan 9 G</a></span>
            </div>
            <div className="serviceTechStack">
                <span><a href="https://www.nike.com/id/t/air-jordan-1-mid-se-shoes-JFn5S2/FQ1926-161" target="_blank" rel="noopener noreferrer">Air Jordan 1 Mid SE</a></span>
                <span><a href="https://www.nike.com/id/t/air-jordan-4-retro-white-gold-shoes-VrTVTm/AQ9129-170" target="_blank" rel="noopener noreferrer">Air Jordan 4 Retro 'White & Gold'</a></span>
                <span><a href="https://www.nike.com/id/t/jordan-day1-eo-older-shoes-cPx7rj/FQ1306-006" target="_blank" rel="noopener noreferrer">Jordan DAY1 EO</a></span>
                <span><a href="https://www.nike.com/id/t/air-jordan-1-low-se-craft-shoes-8SsDw6/FQ3055-100" target="_blank" rel="noopener noreferrer">Air Jordan 1 Low SE Craft</a></span>
            </div>
        </div>
    </section>
  )
}

export default Jasa