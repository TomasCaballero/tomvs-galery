import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom"
import Inicio from "./Routes/Inicio";
import Paisajes from "./Routes/Paisajes";
import Animales from "./Routes/Animales";
import Urban from "./Routes/Urban";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/paisajes" element={<Paisajes/>}/>
                <Route path="/animales" element={<Animales/>}/>
                <Route path="/urban" element={<Urban/>}/>
                <Route path="/*" element={<Inicio/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes