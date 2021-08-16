import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {AiOutlineClose, GoThreeBars} from "react-icons/all";
import s from "./Header.module.css"
import Routes from "./Routes";


function Header() {

    const [bar, setBar] = useState(true)

    const barHandler = () => {
        setBar(!bar)
    }

    return (
        <div>
            <div className={bar ? s.nav : s.navActive}>
                <NavLink to='/pre-junior' activeClassName={s.active} >Pre-Junior</NavLink>
                <NavLink to='/junior'  activeClassName={s.active} >Junior</NavLink>
                <NavLink to='/juniorplus' activeClassName={s.active} >Junior+</NavLink>
                <div className={s.bar} onClick={barHandler}>
                    {bar ? <GoThreeBars/> : <AiOutlineClose/>}
                </div>
            </div>


        </div>

    )
}

export default Header
