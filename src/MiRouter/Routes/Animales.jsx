import { useState } from "react";
import AnimalesData from "../../Components/Galerias/AnimalesData"
import Transitions from "../../Components/Transitions/Transitions";
import { motion } from "framer-motion";

// eslint-disable-next-line react-refresh/only-export-components
const Animales = () => {
    const [urlImgSeleccionada, setUrlImgSeleccionada] = useState('');
    const [horientacion, setHorientacion] = useState('');
    const [imgADescargar, setImgADescargar] = useState('');

    const rutaGeneral = '/assets/Animales/'

    const seleccionarImagen = (e)=> {
        const url = e.target.src;
        const formato = e.target.name;
        const imgD = e.target.nonce;

        setUrlImgSeleccionada(url);
        setHorientacion(formato);
        setImgADescargar(imgD);
    }
    const cerrarImg = () =>{
        setUrlImgSeleccionada('');
    }
    const descargarImg = () => {
        if (urlImgSeleccionada) {
            const enlaceDescarga = document.createElement('a');
            enlaceDescarga.href = imgADescargar;
            enlaceDescarga.download = imgADescargar;

            // Simular un clic en el enlace para iniciar la descarga
            enlaceDescarga.click();
        }
    }
    return (
        <motion.main
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 1}}
        transition={{duration:2, ease: 'easeInOut', delay: 1}}>
        <h4><p className='letraV'>V</p>NIM<p className='letraV'>V</p>LES</h4>
        <div className="galery"

        >
            {
                AnimalesData.map((animal)=>{
                    return (
                        <motion.img src={rutaGeneral+animal.url} alt={animal.id} key={animal.id} onClick={seleccionarImagen} name={animal.formato} nonce={rutaGeneral+animal.url2}
                            initial={{opacity: 0.5}}
                            animate={{opacity: 0.5}}
                            whileInView={{opacity: 1}}
                            transition={{ duration: 1, ease: 'easeIn', delay:.1}}
                        />
                    )
                })
            }
        </div>
        {
                urlImgSeleccionada === '' ? <></> : (
                    <div className="card">
                    <div className="cardCont">
                        <img src={urlImgSeleccionada} alt="" className={`imgCard ${horientacion}`}/>
                        <button className="btnCarrar" onClick={cerrarImg}>Cerrar</button>
                        <button className="btnDescargar" onClick={descargarImg}>Descargar</button>
                    </div>
                </div>
                )
            }
    </motion.main>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default Transitions(Animales);
