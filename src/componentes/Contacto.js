import React, { Component } from 'react';
import './Contacto.css'

const Contacto = () => {
    return ( 

        <form>

            <legend>Formulario de contacto</legend>
            <div className="input-field">
                <label>Nombre:</label>
                <input type="text" placeholder="Tu nombre"></input>
            </div>
            <div className="input-field">
                <label>E-mail:</label>
                <input type="email" placeholder="Tu e-mail"></input>
            </div>
            <div className="input-field">
                <label>Mensaje:</label>
                <textarea></textarea>
            </div>
            <div className="input-field enviar">
                <input type="submit" value="Enviar" />
            </div>

        </form>
     );
}
 
export default Contacto;