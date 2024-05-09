import React from 'react'
import {motion} from "framer-motion"
import "./LoaderHome.css"

const LoaderHome = () => {
  return <motion.section 
  initial ={{y:0,opacity:1}}
  animate={{
    y:-1000,
    transition:{
        duration: 1,
        delay: 2.3
    }
  }}
  exit={{y:window.inner}}
  className='LoaderHome'>
    <div className="containerLoaderHome">
        <motion.span 
        initial ={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay:0.5},
            transitionEnd: {
                display:"none"
            },
        }}
        className="LoaderText">Assalamualaikum</motion.span>
        <motion.span 
        initial ={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay:0.8},
            transitionEnd: {
                display:"none"
            },
        }}
        className="LoaderText">Wetshup</motion.span>
        <motion.span 
        initial ={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay:1.1},
            transitionEnd: {
                display:"none"
            },
        }}
        className="LoaderText">Halo</motion.span>
        <motion.span 
        initial ={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay:1.4},
            transitionEnd: {
                display:"none"
            },
        }}
        className="LoaderText">مرحبًا</motion.span>
        <motion.span 
        initial ={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay:1.7},
            transitionEnd: {
                display:"none"
            },
        }}
        className="LoaderText">안녕하세요</motion.span>
        <motion.span 
        initial ={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay:2.0},
        }}
        className="LoaderText">Urraaaaaaahhhhh</motion.span>
    </div>
  </motion.section>
}

export default LoaderHome