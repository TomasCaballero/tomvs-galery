import Banner from "../../Components/Banner/Banner"
import SectionFiles from "../../Components/SectionFiles/SectionFiles"
import Separador from "../../Components/Separador/Separador"
import Transitions from "../../Components/Transitions/Transitions"
import { motion } from "framer-motion"

// eslint-disable-next-line react-refresh/only-export-components
const Inicio = () => {
    return (
        <motion.main className="mainInicio"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 1}}
        transition={{duration:2, ease: 'easeInOut', delay: 1}}
        >
            <Banner/>
            <Separador/>
            <SectionFiles/>
        </motion.main>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default Transitions(Inicio);