import React from 'react';
import { Link } from 'react-router-dom';
import './../../css/sass/Home/_bienvenido.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity} from '@fortawesome/free-solid-svg-icons';

const Bienvenido = ({subdominio,codfilial, filial}) => {

  const url_base = process.env.REACT_APP_BASEURL;

  return ( 
    <div>
      <section className='home__bienvenido'>
        <div className="container">
          <div className='grid'>
            <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12">
              <div className="home__bienvenido-content-titulo">
                <h1 className='home__bienvenido-titulo'>Bienvenido a <span className='home__bienvenido-iesap'> IESAP</span><span className='home__bienvenido-sede'> Sede Principal - PIURA
                </span>
                </h1>
                <h4 className='home__bienvenido-subtitulo'>"Instituto de Educación Superior Privado Alas Peruanas
                "</h4>
              </div>
              <div className="home__bienvenido-map">
                <div className='grid'>
                  <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-4 grid-res-lg-4 grid-res-xl-4 home__bienvenido-map_content'>

                    <div className="home__bienvenido-map-filiales">
                      <Link to={`${subdominio}/piura/`} target="_blank">
                        <div className='home__bienvenido-map-link'>
                          <p className='home__bienvenido-map-link-titulo'><FontAwesomeIcon icon={faUniversity}/> Sede Principal Piura</p>
                        </div>
                      </Link>
                      <Link to={`${subdominio}/arequipa/`} target="_blank">
                        <div className='home__bienvenido-map-link'>
                          <p className='home__bienvenido-map-link-titulo'><FontAwesomeIcon icon={faUniversity}/> Filial Arequipa</p>
                        </div>
                      </Link>
                      <Link to={`${subdominio}/chiclayo/`} target="_blank">
                        <div className='home__bienvenido-map-link'>
                          <p className='home__bienvenido-map-link-titulo'><FontAwesomeIcon icon={faUniversity}/> Filial Chiclayo</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-8 grid-res-lg-8 grid-res-xl-8'>
                    <div className="home__bienvenido-map-content-img">
                      <div className='home__bienvenido-map-div-img'>
                        <picture>
                          <img src={`${url_base}package/web_iesap/img/home/6b7d9863c0154cb62762c1b2f927536909b5e485.png`} alt="Mapa Filiales Iesap" title="Mapa Filiales - IESAP" className='home__bienvenido-map-img' />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   );
}
 
export default Bienvenido;