import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
<NavLink to='/pre-junior' >  Pre-Junior</NavLink>
<NavLink to='/junior' >   junior</NavLink>
<NavLink to='/junior+' >   junior+</NavLink>

        </div>
    )
}

export default Header
