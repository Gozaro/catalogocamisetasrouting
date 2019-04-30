import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Productos = (props) => {
    
    const {imagen, nombre, precio, id} = props.informacion;

    return(
       


        <li>

            <img src={`/dev/build/CatalogoCamisetas/img/${imagen}.png`} alt={nombre} />
            <p>{nombre}</p> 
            <p><span>{precio}€</span></p>
            <p><Link to={`/producto/${id}`}>Más información</Link></p>

        </li>
    )

}

export default Productos;