import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faFingerprint, faAddressCard, faIdCardAlt, faFileAlt} from '@fortawesome/free-solid-svg-icons';

const Requisitos = ({codfilial}) => {

  const [ isdataFoto, setdataFoto ] = useState('');

  useEffect(() => {
    if (codfilial === '96a3be3cf272e017046d1b2674a52bd3') {
      setdataFoto('03 fotos tamaño PASAPORTE (a color, fondo blanco, material mate)');
    }else{
      setdataFoto('Foto tamaño carné.');
    }
  }, [ codfilial ])

  return ( 
    <div className="grid">
      <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
        <div className="programa__requisitos programa__descripcion-card">
          <div className='programa__requisitos-content-titulo'>
            <h4 className=' programa__descripcion-card-titulo'>Requisitos de mátricula</h4>
          </div>
          <div className='programa__requisitos-cards'>
            <div className='grid'>
              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>
                <div className='programa__requisitos-card'>
                  <div className='programa__requisitos-card-content-icon'>
                    <FontAwesomeIcon icon={faFingerprint} className='programa__requisitos-card-icon'/>
                  </div>
                  <div className='programa__requisitos-card-content-descripcion'>
                    <p className='programa__requisitos-card-descripcion'>DNI - copia.</p>
                  </div>
                </div>
              </div>
              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>
                <div className='programa__requisitos-card'>
                  <div className='programa__requisitos-card-content-icon'>
                    <FontAwesomeIcon icon={faIdCardAlt} className='programa__requisitos-card-icon'/>
                  </div>
                  <div className='programa__requisitos-card-content-descripcion'>
                    <p className='programa__requisitos-card-descripcion'>Partida de nacimiento original.</p>
                  </div>
                </div>
              </div>  
            </div>
            
            <div className='grid'>
              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                <div className='programa__requisitos-card' style={{width: '100%'}}>
                  <div className='programa__requisitos-card-content-icon'>
                    <FontAwesomeIcon icon={faAddressCard} className='programa__requisitos-card-icon'/>
                  </div>
                  <div className='programa__requisitos-card-content-descripcion'>
                    <p className='programa__requisitos-card-descripcion'>{ isdataFoto} </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='grid'>
              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                <div className='programa__requisitos-card' style={{width: '100%'}}>
                  <div className='programa__requisitos-card-content-icon'>
                    <FontAwesomeIcon icon={faAward} className='programa__requisitos-card-icon'/>
                  </div>
                  <div className='programa__requisitos-card-content-descripcion'>
                    <p className='programa__requisitos-card-descripcion'>Certificados de estudios de nivel secundaria originales.</p>
                  </div>
                </div>
              </div>
            </div>
            {
              (codfilial !== 'a2ef406e2c2351e0b9e80029c909242d')&&
              <div className='grid'>
                <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                  <div className='programa__requisitos-card' style={{width: '100%'}}>
                    <div className='programa__requisitos-card-content-icon'>
                      <FontAwesomeIcon icon={faFileAlt} className='programa__requisitos-card-icon'/>
                    </div>
                    <div className='programa__requisitos-card-content-descripcion'>
                      <p className='programa__requisitos-card-descripcion'>{`Ficha de socio Alaspe (solo para socios).`}</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Requisitos;
 