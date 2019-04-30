import React, { Component } from 'react';
import './Nosotros.css'

class Nosotros extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/dev/build/CatalogoCamisetas/img/camisa_1.png" alt="Imagen nostros" />

                </div>

                <div className="contenido">
                <h2>Nosotros</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nunc urna. Phasellus vehicula ullamcorper velit at dapibus. Duis laoreet, mauris eu hendrerit tristique, nulla lectus vehicula felis, id cursus elit ligula ut orci. Quisque dapibus urna in felis tincidunt rhoncus. Morbi felis justo, scelerisque ornare leo vitae, sollicitudin semper ipsum. Nulla in tincidunt elit. Vestibulum at cursus felis, in blandit augue. Quisque tincidunt enim odio, eu blandit est molestie ut. Integer pharetra, dolor in hendrerit posuere, magna velit auctor massa, sit amet elementum eros massa ac felis. Duis sollicitudin ex eget ipsum ultricies malesuada. Donec odio orci, dapibus interdum dolor vitae, semper molestie erat. Aenean euismod sapien at lorem pretium, at consequat massa accumsan. Sed nisl leo, porttitor interdum dignissim at, lacinia sed arcu. Phasellus facilisis arcu id aliquet consectetur.
                </p>

                </div>
            </div>

         );
    }
}
 
export default Nosotros;