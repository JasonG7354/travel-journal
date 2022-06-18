import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, FaPlaneDeparture} from '@fortawesome/free-solid-svg-icons/faPlaneDeparture';

export default function Header(){
    return (
        <nav className="navbar">
            <h1 className="navbar--title"><a href="#" className="plane--icon"><FontAwesomeIcon icon={faPlaneDeparture} /></a><span className="title--icon">My Travel Journal</span></h1>
        </nav>
    )
}