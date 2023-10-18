import { IconChevronDown } from '@tabler/icons-react'
import './Separador.css'


const Separador = () => {
    return (
        <div className="separador">
            <p>Bienvenido a mi Portfolio de fotos</p>
            <p>recorre mis álbumes</p>
            <p>y descarga las fotos que le guste</p>

            <IconChevronDown color='white' className='flechaAbajo'/>

        </div>
    )
}

export default Separador