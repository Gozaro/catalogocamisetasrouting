import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Navegacion.css'


const Navegacion = () => {
    return ( 
        <span className="navegacion">
            <NavLink to={'/nosotros'} activeClassName="activo">Nosotros  &nbsp; |  &nbsp;</NavLink> 
            <NavLink to={'/productos'} activeClassName="activo"> Productos  &nbsp; |  &nbsp;</NavLink> 
            <NavLink to={'/contacto'} activeClassName="activo"> Contacto</NavLink>

        </span>
     );
}
 
export default Navegacion;