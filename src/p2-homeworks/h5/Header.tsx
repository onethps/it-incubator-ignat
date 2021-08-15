import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {AiOutlineClose, GoThreeBars} from "react-icons/all";

function Header() {

    const[sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div>
            <GoThreeBars onClick={showSidebar}/>

<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}/>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'>
                    <AiOutlineClose/>
                    <NavLink to='/pre-junior' className='menu-bars'> Pre-Junior</NavLink>
                    <NavLink to='/junior'> junior</NavLink>
                    <NavLink to='/junior+'> junior+</NavLink>
                </li>

            </ul>
        </div>
    )
}

export default Header
