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
        className="LoaderText">Welcome!</motion.span>
        <motion.span 
        initial ={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay:1.0},
            transitionEnd: {
                display:"none"
            },
        }}
        className="LoaderText">Happy Shopping</motion.span>
        <motion.span 
        initial ={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay:1.5},
            transitionEnd: {
                display:"none"
            },
        }}
        className="LoaderText">at</motion.span>
        <motion.span 
        initial ={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay:2.0},
            transitionEnd: {
                display:"none"
            },
        }}
        className="LoaderText"><i>shoeshoeshoe</i></motion.span>
    </div>
</motion.section>
}

export default LoaderHome