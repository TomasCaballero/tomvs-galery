import { motion } from "framer-motion"
import './Transitions.css'

const Transitions = (OriginComponent) => {
  // eslint-disable-next-line react/display-name
    return () =>  (
        <>
            <OriginComponent/>
            <motion.div
                className="slide-in"
                initial={{opacity: 0}}
                animate={{opacity: 0}}
                exit={{opacity: 1}}
                transition={{duration: .5, ease: 'easeInOut'}}
            > <p className="cargando">C<p className='letraV'>V</p>RG<p className='letraV'>V</p>NDO...</p></motion.div>
            {/* <motion.div
                className="slide-in"
                initial={{scaleY: 0}}
                animate={{scaleY: 0}}
                exit={{scaleY: 1}}
                transition={{duration: 1, ease: 'easeInOut'}}
            > <p>Cargando</p></motion.div> */}
            {/* <motion.div
                className="slide-out"
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                exit={{scaleY: 0}}
                transition={{duration: 1, ease: 'easeInOut'}}
            /> */}
        </>
    )
}

export default Transitions