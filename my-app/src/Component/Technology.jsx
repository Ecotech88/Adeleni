import github from '../assets/github.png'
import react from '../assets/physics.png'
import python from '../assets/python.png'
import Nextjs from '../assets/Next js.png'
import figma from '../assets/figm.png'
import mongodb from '../assets/mongodb.png'

import { motion } from "framer-motion"

const iconVariants= (duration) => ({
    initial: { y: -10},
    animate: [10, -10],
    transition: {
        duration: duration,
        ease: "linear",
        repeatType: "reverse",
    }
})

const Technology = () => {
  return ( 
    <div className='border-b border-black pb-24'>
        <motion.h1
         whileInview={{ opacity: 1, y: 0}}
         initial={{ opacity: 0, y: -100}}
         transition={{ duration: 1.5 }}
        className='text-center my-20 text-4xl'>Technologies</motion.h1>

        <motion.div
        whileInview={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 ">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className='w-10' src={react} alt="" />
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className='w-10' src={Nextjs} alt="" />
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className='w-10' src={mongodb} alt="" />
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className='w-10' src={figma} alt="" />
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className='w-10' src={python} alt="" />
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className='w-10' src={github} alt="" />
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className='w-10' src={github} alt="" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technology