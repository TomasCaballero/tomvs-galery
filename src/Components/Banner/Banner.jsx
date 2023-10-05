import { useEffect, useRef } from 'react'
import './Banner.css'
import { motion, useScroll, useTransform } from 'framer-motion'
const Banner = () => {
    const textRef = useRef(null);
    // console.log(textRef);
    // useEffect(()=>{
    //     console.log(textRef);
    // },[])
    // setTimeout(({useScroll, useTransform})=>{
    //     const {scrollProgress} = useScroll({
    //         target: textRef,
    //         offset: ["start start","end start"]
    //     });
    //     const backgroundY = useTransform(scrollProgress, [0,1], ["0%","100%"]);
    //     const textY = useTransform(scrollProgress, [0,1], ["0%","200%"]);
    // },100)



    return (
        <div className='banner'>
            <motion.h1
                ref={textRef}
                initial={{ opacity: 0.8, translateY: +190}}
                animate={{opacity: 1, translateY: 0}}
                exit={{opacity: 1, translateY: 0}}
                transition={{duration: 3, delay: 1}}s
                // style={{y: textY}}
            >
                TOMVS
            </motion.h1>
            <motion.div
            // style={{y: backgroundY}}
            className="imgConFondo"></motion.div>
            <div className='imgSinFondo'></div>
        </div>
    )
}

export default Banner