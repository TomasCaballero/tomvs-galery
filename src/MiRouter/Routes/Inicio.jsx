import Banner from "../../Components/Banner/Banner"
import SectionFiles from "../../Components/SectionFiles/SectionFiles"
import Separador from "../../Components/Separador/Separador"
import Transitions from "../../Components/Transitions/Transitions"

// eslint-disable-next-line react-refresh/only-export-components
const Inicio = () => {
    return (
        <main className="mainInicio">
            <Banner/>
            <Separador/>
            <SectionFiles/>
        </main>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default Transitions(Inicio);