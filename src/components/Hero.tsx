import { HERO_CONTENT } from "../constants/index"
import Profile  from "../assets/bgimg.jpeg";
import { motion } from "framer-motion";

const container = (delay:number) =>({
   hidden: {x: -100, opacity: 0},
   visible: {
    x: 0,
    opacity: 1,
    transition: {duration:0.5, delay: delay}
   }
})
const Hero = () => {
  return (
  <div className="flex justify-around border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap md:pl-12 lg:pr-4">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <motion.h1  variants={container(0)}
            initial="hidden"
            animate="visible"
             className="pb-14 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Akilesh Prabhu S</motion.h1>
            <motion.span  
                variants={container(.25)}
                initial="hidden"
                animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent">Software Developer</motion.span>
            <motion.p  variants={container(.5)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {HERO_CONTENT}
            </motion.p>
        </div>
      </div>
        <div className="w-full lg:w-1/2 lg:p-10 lg:pl-24 md:pl-24">
        <div className="flex">
          <motion.img
           initial={{x: 100, opacity:0}} 
           animate={{x: 0, opacity:1 }}
           transition={{duration:1, delay: .8 }}
           className="img" src={Profile} alt="Profile-Pic">
           </motion.img>
        </div>
        </div>
      </div>
  </div> )
}

export default Hero;