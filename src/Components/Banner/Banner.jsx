import { useState } from 'react'
import './Banner.css'
import { easeInOut, motion} from 'framer-motion'
const Banner = () => {
    const [posicionScroll, setPosicionScroll] = useState(0);


    window.addEventListener('scroll', ()=>{
        // let textoBanner = document.getElementById('h1Banner');
        let valorDelScroll = window.scrollY;
        setPosicionScroll(valorDelScroll)
        // textoBanner.classList.toggle('moverTexto',window.scrollY > 20);
    })



    return (
        <div className='banner'>
            <motion.h1
                id='h1Banner'
                className='textoBanner'
                initial={{ opacity: 0.8, translateY: +190}}
                animate={{opacity: 1, translateY: 0}}
                whileInView={{opacity: 1, translateY: 0}}
                exit={{opacity: 1, translateY: 0}}
                transition={{duration: 3, delay: 1}}
                style={{y: posicionScroll/4, transition: easeInOut}}
            >
                TOMVS
            </motion.h1>
            <motion.div
            // style={{y: -posicionScroll/30}}
            className="imgConFondo"></motion.div>
            <div className='imgSinFondo'></div>
        </div>
    )
}

export default Banner