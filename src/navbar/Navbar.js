import React from 'react'
import {NavLink} from "react-router-dom";
import styleNavbar from './navbar.module.css'

 export const Navbar = ()=>{
    return(
        <nav className={styleNavbar.container}>
            <div className={styleNavbar.positin}>
                <div>
                    <NavLink to='/dublicate' className={styleNavbar.text}>Dublicate</NavLink>
                </div>
                <div>
                    <NavLink to='/uniqueValues' className={styleNavbar.text}>Unique values</NavLink>
                </div>
                <div>
                    <NavLink to='/form' className={styleNavbar.text}>Register</NavLink>
                </div>
                <div>
                    <NavLink to='/deep' className={styleNavbar.text}>Empty Deep</NavLink>
                </div>

            </div>
        </nav>
    )
}

