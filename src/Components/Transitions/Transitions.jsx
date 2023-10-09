import { motion } from "framer-motion"
import './Transitions.css'

const Transitions = (OriginComponent) => {
    // let cargando = true;

    // setTimeout(()=>{
    // cargando =false;
    // setTimeout(()=>{
    // cargando = true;
    // },1000)
    // },3000)
    // eslint-disable-next-line react/display-name
    return () => (
        <>
            <OriginComponent />
            <motion.div
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: .5, ease: 'easeInOut' }}
            ><p className="cargando">C<span className='letraV'>V</span>RG<span className='letraV'>V</span>NDO...</p></motion.div>
            <motion.div
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: .5, ease: 'easeInOut' }}
            />
            {/* {
                cargando &&
                ( <motion.div
                    className="slide-in"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 1, zIndex: 0 }}
                    transition={{ duration: .5, ease: 'easeInOut' }}
                ><p className="cargando">C<p className='letraV'>V</p>RG<p className='letraV'>V</p>NDO...</p></motion.div>) 
            } */}

        </>
    )
}

export default Transitions


{/*<motion.div
                className="slide-out"
                initial={{scaleY:1}}
                animate={{scaleY:0}}
                exit={{scaleY: 0}}
                transition={{duration: .5, ease: 'easeInOut'}}
            />*/}
{/* <motion.div
                className="slide-in"
                initial={{scaleY:0}}
                animate={{scaleY: 0}}
                exit={{scaleY: 1}}
                transition={{duration: 1, ease: 'easeInOut'}}
            > <p>Cargando</p></motion.div>
            <motion.div
                className="slide-out"
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                exit={{scaleY: 0}}
                transition={{duration: 1, ease: 'easeInOut'}}
            /> */}



// import { motion } from "framer-motion";
// import { useState } from "react";
// import './Transitions.css'

// const Transitions = (OriginComponent) => {
//     const [isVisible, setIsVisible] = useState(true);

//     const handleExitComplete = () => {
//         setIsVisible(false);
//     };

//     // eslint-disable-next-line react/display-name
//     return () => (
//         <>
//             {isVisible && (
//                 <motion.div
//                     className="slide-in"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 0 }}
//                     exit={{ opacity: 1 }}
//                     transition={{ duration: 0.5, ease: 'easeInOut' }}
//                     onExitComplete={handleExitComplete}
//                 >
//                     <p className="cargando">C<p className='letraV'>V</p>RG<p className='letraV'>V</p>NDO...</p>
//                 </motion.div>
//             )}

//             <OriginComponent />
//         </>
//     );
// };

// export default Transitions;
