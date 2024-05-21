import React from 'react';
import Formulario from './Formulario';

const Portada = ({dataProgramas, keyfe, whua}) => {
  return ( 
    <>
      <section className='admision__form'>
        <div className="container">
          <div className="grid grid-gap-xs">
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-6 grid-res-xl-6'>
              <div className='admision__form-descripcion-container'>
                <h3 className='admision__form-descripcion-informes'>Informes</h3>
                <h2 className='admision__form-descripcion-programas'>Programas de estudio en 03 años</h2>
                <div className='admision__form-descripcion-content-exito'>
                  <p className='admision__form-descripcion-exito'>¡EL ÉXITO NO SE ESPERA, SE CONSIGUE...!</p>
                </div>
                {/* <p className='admision__form-descripcion-lid'>El mundo necesita líderes como tú</p> */}
              </div>
            </div>

            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-6 grid-res-xl-6'>

              <Formulario dataProgramas={dataProgramas} keyfe={keyfe} whua={whua}/>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default Portada;