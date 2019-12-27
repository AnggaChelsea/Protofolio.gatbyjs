import React from 'react';
import { link } from "gatsby";
import "./nav.css";

const Nav = () => (
    <nav className="nav">
        <ul className="nav__list">
            <li>
                <li><link to="/" className="nav__link" activeStyle={{textDecaration: "underline"}} >Home</link></li>
 activeStyle={{textDecaration: "underline"}}              <li><link to="/writing" className="nav__link" activeStyle={{textDecaration: "underline"}} 
activeStyle={{textDecaration: "underline"}} >Writing</link></li>
                <li><link to="/speaking" className="nav__link" activeStyle={{textDecaration: "underline"}} 
activeStyle={{textDecaration: "underline"}} >Speaking</link></li>
                <li><link to="/prodcasting" className="nav__link" activeStyle={{textDecaration: "underline"}} 
activeStyle={{textDecaration: "underline"}} >Prodcasting</link></li>
            </li>
        </ul>
    </nav>
)

export default Nav