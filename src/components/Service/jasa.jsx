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
                <span>Aurel</span>
                <span>Bagas</span>
                <span>Barriq</span>
                <span>Fadilah</span>
            </div>
            <div className="serviceTechStack">
                <span>Gustin</span>
                <span>Lekha</span>
                <span>Selsa</span>
                <span>Naufal F.</span>
            </div>
        </div>
    </section>
  )
}

export default Jasa