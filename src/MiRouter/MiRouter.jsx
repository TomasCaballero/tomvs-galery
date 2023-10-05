import { BrowserRouter } from "react-router-dom"
import Header from "../Components/Header/Header"
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop"
import Footer from "../Components/Footer/Footer"
import AnimatedRoutes from "./AnimatedRoutes"

const MiRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Header/>
            <AnimatedRoutes/>
            <Footer/>
        </BrowserRouter>
    )
}

export default MiRouter