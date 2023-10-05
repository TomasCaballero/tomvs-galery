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
    return (
        <header className='header'>
            <h1 className='logo'>TOMVS</h1>
            <img src="src/assets/logo/camera-code.png" alt="" className='logoImg'/>
            <IconMenu2 width={22} height={22} className='menu' onClick={abrirMenu}/>
            <nav className={menu === false ? 'navbar' : 'navbar menuOpen'}>
                <ul>
                    <li><NavLink to='/' className={({isActive})=> isActive ? 'link active' : 'link'} onClick={abrirMenu}>Inicio</NavLink></li>
                    <li><NavLink to='/paisajes' className={({isActive})=> isActive ? 'link active' : 'link'} onClick={abrirMenu}>Paisajes</NavLink></li>
                    <li><NavLink to='/animales' className={({isActive})=> isActive ? 'link active' : 'link'} onClick={abrirMenu}>Animales</NavLink></li>
                    <li><NavLink to='/urban' className={({isActive})=> isActive ? 'link active' : 'link'} onClick={abrirMenu}>Urbana</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header