import React from 'react'; 
import redes from '../imagenes/imagen5.jpg'

function Pie(){ 
    return(
        <div className='piepag'>
            <p className='piepagina'> Siguenos
                <p> <img src={redes} className="pieDepagina" /></p></p>
            <p className='piepagina'> AV Quito - Parque central
                <p className='piepagina'> @2024 GAD Municipal. Poltíca de privacidad / Términos de Uso </p></p>
            <p className='piepagina'> Contactanos 
                <p className='piepagina'> (02) - 3746046 </p>
            </p>   
        </div>
    );
}
export default Pie;