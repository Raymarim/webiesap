import React from 'react';
import Titulo from './../Agentes/Titulo';
import './../../css/sass/Home/_sedes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

const Sedes = ({subdominio}) => {

  const url_base = process.env.REACT_APP_BASEURL;

  return ( 
    <section className="home__sedes">
      <div className="home__sedes-content-titulo">
        <div className="container">
          <div className="grid">
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
              <Titulo titulo="Nuestras Filiales" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="home__sedes-content">
        <div className="container__lg">
          <div className="grid grid-gap-xs">
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>
              <a href={`${subdominio}/arequipa/`} target='_black'>
                <div className="home__sedes-content-sede">
                  <img src={`${url_base}package/web_iesap/img/home/sedes/a093b4cea719ca4399534a55d9f6bbbcf51b5abd.jpg`} className="home__sedes-content-sede-img" alt="Iesap filial Arequipa" />
                  <div className="home__sedes-content-sede-descripcion">
                    <h3 className='home__sedes-content-sede-descripcion-filial'><FontAwesomeIcon icon={faGraduationCap}/> Filial Arequipa</h3>
                    <p className='home__sedes-content-sede-descripcion-direccion'><FontAwesomeIcon icon={faMapMarkerAlt}/> Calle Rivero 530 - Cercado</p>
                  </div>
                </div>
              </a>
            </div>
            
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>
              <a href={`${subdominio}/chiclayo/`} target='_black'>
                <div className="home__sedes-content-sede">
                  <img src={`${url_base}package/web_iesap/img/home/sedes/b27dd7c876d43f13ce1d5ca085d5214032745a0a.jpg`} className="home__sedes-content-sede-img" alt="Iesap filial Chiclayo" />
                  <div className="home__sedes-content-sede-descripcion">
                    <h3 className='home__sedes-content-sede-descripcion-filial'><FontAwesomeIcon icon={faGraduationCap}/> Filial Chiclayo</h3>
                    <p className='home__sedes-content-sede-descripcion-direccion'><FontAwesomeIcon icon={faMapMarkerAlt}/> Calle Miguel Grau Nro 624 Urb Campodónico Chiclayo Peru.</p>
                  </div>
                </div>
              </a>
            </div>
          
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>
              <a href={`${subdominio}/piura/`} target='_black'>
                <div className="home__sedes-content-sede">
                  <img src={`${url_base}package/web_iesap/img/home/sedes/13beeeca00b9505ad7c1c12a06f42bbd3e7657c6.jpg`} className="home__sedes-content-sede-img" alt="Iesap filial Piura" />
                  <div className="home__sedes-content-sede-descripcion">
                    <h3 className='home__sedes-content-sede-descripcion-filial'><FontAwesomeIcon icon={faGraduationCap}/> Filial Piura</h3>
                    <p className='home__sedes-content-sede-descripcion-direccion'><FontAwesomeIcon icon={faMapMarkerAlt}/> Av. sullana #621.</p>
                  </div>
                </div>
              </a>
            </div>

            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>
              <a href={`${subdominio}/ica/`} target='_black'>
                <div className="home__sedes-content-sede">
                  <img src={`${url_base}package/web_iesap/img/home/sedes/a093b4cea719ca4399534a55d9f6bbbcf51b5abd.jpg`} className="home__sedes-content-sede-img" alt="Iesap filial Ica" />
                  <div className="home__sedes-content-sede-descripcion">
                    <h3 className='home__sedes-content-sede-descripcion-filial'><FontAwesomeIcon icon={faGraduationCap}/> Filial Ica</h3>
                    <p className='home__sedes-content-sede-descripcion-direccion'><FontAwesomeIcon icon={faMapMarkerAlt}/> Jerónimo de cabrera Nro 530 Urbanización Luren-Ica.</p>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
       
    </section>
   );
}
 
export default Sedes;