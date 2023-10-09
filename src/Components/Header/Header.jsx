import { NavLink } from 'react-router-dom'
import { IconMenu2 } from '@tabler/icons-react';
import './Header.css'
import { useState } from 'react';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const abrirMenu = () => {
        if(menu === false){
            setMenu(true);
        }else{
            setMenu(false);
        }
    }
    window.addEventListener('scroll', ()=>{
        let header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 40);
    })
    return (
        <header className='header'>
            <NavLink to='/' className='linkLogo'><h1 className='logo'>TOMVS</h1>
            <img src="/assets/logo/camera-code.png" alt="" className='logoImg'/></NavLink>
            <IconMenu2 width={22} height={22} className='menu' onClick={abrirMenu}/>
            <nav className={menu === false ? 'navbar' : 'navbar menuOpen'}>
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'link active' : 'link'} onClick={abrirMenu}>
                            INICIO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/paisajes' className={({ isActive }) => isActive ? 'link active' : 'link'} onClick={abrirMenu}>
                            P<span className='letraV'>V</span>IS<span className='letraV'>V</span>JES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/animales' className={({ isActive }) => isActive ? 'link active' : 'link'} onClick={abrirMenu}>
                            <span className='letraV'>V</span>NIM<span className='letraV'>V</span>LES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/urban' className={({ isActive }) => isActive ? 'link active' : 'link'} onClick={abrirMenu}>
                            URB<span className='letraV'>V</span>N<span className='letraV'>V</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header