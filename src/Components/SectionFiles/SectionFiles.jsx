import './SectionFiles.css'
import AnimalesData from '../Galerias/AnimalesData';
import PaisajesData from '../Galerias/PaisajesData';
import UrbanData from '../Galerias/UrbanData';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const SectionFiles = () => {
    const [arrayAnimales, setArrayAnimales] = useState([]);
    const [arrayPaisajes, setArrayPaisajes] = useState([]);
    const [arrayUrban, setArrayUrban] = useState([]);

    useEffect(()=>{
        const numero1 = Math.random()*AnimalesData.length;
        const numeroFinal1 = Math.floor(numero1) + 1;
        const numero2 = Math.random()*AnimalesData.length;
        const numeroFinal2 = Math.floor(numero2) + 1;
        const numero3 = Math.random()*AnimalesData.length;
        const numeroFinal3 = Math.floor(numero3) + 1;
        const arrayAnimalesPush = [numeroFinal1, numeroFinal2, numeroFinal3];
        setArrayAnimales(arrayAnimalesPush);


        const numero4 = Math.random()*PaisajesData.length;
        const numeroFinal4 = Math.floor(numero4) + 1;
        const numero5 = Math.random()*PaisajesData.length;
        const numeroFinal5 = Math.floor(numero5) + 1;
        const numero6 = Math.random()*PaisajesData.length;
        const numeroFinal6 = Math.floor(numero6) + 1;
        const arrayPaisajesPush = [numeroFinal4, numeroFinal5, numeroFinal6];
        setArrayPaisajes(arrayPaisajesPush);

        const numero7 = Math.random()*UrbanData.length;
        const numeroFinal7 = Math.floor(numero7) + 1;
        const numero8 = Math.random()*UrbanData.length;
        const numeroFinal8 = Math.floor(numero8) + 1;
        const numero9 = Math.random()*UrbanData.length;
        const numeroFinal9 = Math.floor(numero9) + 1;
        const arrayUrbanPush = [numeroFinal7, numeroFinal8, numeroFinal9];
        setArrayUrban(arrayUrbanPush);
    },[])

    return (
        <section className='sectionFiles'>
            <motion.div className='sectionFilesPaisajes'
                initial={{opacity:0}}
                animate={{opacity:0.5}}
                whileInView={{opacity:1}}
                onViewportLeave={{opacity:1}}
                transition={{ duration: 1, ease: 'easeIn', delay:.1}}
            >
                <NavLink to='/paisajes' className="fileContainer fileContainerPaisajes">
                    <img src={`/assets/Paisajes/${arrayPaisajes[0]}.webp`} alt="" className='img1'/>
                    <img src={`/assets/Paisajes/${arrayPaisajes[1]}.webp`} alt="" className='img2'/>
                    <img src={`/assets/Paisajes/${arrayPaisajes[2]}.webp`} alt="" className='img3'/>
                    <div className='nombreGaleria'>P<p className='letraV'>V</p>IS<p className='letraV'>V</p>JES</div>
                </NavLink>
            </motion.div>

            <motion.div className='sectionFilesAnimales'
                initial={{opacity:0}}
                animate={{opacity:0.5}}
                whileInView={{opacity:1}}
                transition={{ duration: 1, ease: 'easeIn', delay:.2}}
            >
                <NavLink to='/animales' className="fileContainer fileContainerAnimales">
                    <img src={`/assets/Animales/${arrayAnimales[0]}.webp`} alt="Animales1" className='img1'/>
                    <img src={`/assets/Animales/${arrayAnimales[1]}.webp`} alt="Animales2" className='img2'/>
                    <img src={`/assets/Animales/${arrayAnimales[2]}.webp`} alt="Animales1" className='img3'/>
                    <div className='nombreGaleria'><p className='letraV'>V</p>NIM<p className='letraV'>V</p>LES</div>
                </NavLink>
            </motion.div>

            <motion.div className='sectionFilesUrban'
                initial={{opacity:0}}
                animate={{opacity:0.5}}
                whileInView={{opacity:1}}
                transition={{ duration: 1, ease: 'easeIn', delay:.3}}
            >
                <NavLink to='/urban' className="fileContainer fileContainerUrban">
                    <img src={`/assets/Urban/${arrayUrban[0]}.webp`} alt="Urban1" className='img1'/>
                    <img src={`/assets/Urban/${arrayUrban[1]}.webp`} alt="Urban2" className='img2'/>
                    <img src={`/assets/Urban/${arrayUrban[2]}.webp`} alt="Urban3" className='img3'/>
                    <div className='nombreGaleria'>URB<p className='letraV'>V</p>N<p className='letraV'>V</p></div>
                </NavLink>
            </motion.div>
        </section>
    )
}

export default SectionFiles
