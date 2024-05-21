import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../css/sass/Home/_mapa.scss';
import Esqueleton from '../Esqueleton/Esqueleton';
import { GiClick } from "react-icons/gi";
import { TbHandClick } from "react-icons/tb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMapMarkerAlt, faUniversity} from '@fortawesome/free-solid-svg-icons';

const Mapa = ({dataFilial, subdominio, codfilial, filial}) => {

  const [isloading, setIsloading] = useState(true);
  const [nombreFilial, setNombreFilial ] = useState('');

  const {namef , address, dis, per} = dataFilial;

  useEffect(() => {
    setTimeout(() => {
      if(dataFilial){
        setIsloading(false);
      }
    }, 2000);
  }, [dataFilial])
  

  useEffect(() => {
    if (codfilial === 'a2ef406e2c2351e0b9e80029c909242d') {
      setNombreFilial('Sede Principal');
    }else{
      setNombreFilial('Filial');
    }
  }, [codfilial])

  return ( 
    <div className='home__descripcion-filial'>
      <div className='container__lg'>
        {
          (isloading === true) ?
            <Esqueleton type={1} heigth={115} color={'ligth'} />
          : 
          <>
            <div className='grid'>
              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-3 grid-res-lg-3 grid-res-xl-3'>
                  <div className='home__descripcion-admision'>
                    <h3 className='home__descripcion-admision-title'><FontAwesomeIcon icon={faGraduationCap} /> Admisión
                       <span className='home__descripcion-periodo'> {(per) ? per : ''}
                      </span>
                    </h3>
                  <p className='home__descripcion-admision-p'>Matrículas abiertas</p>
                  <a href="https://erp.iesap.edu.pe/pre-inscripcion" target="_black" className='home__descripcion-admision-preinscripcion'>
                    <span className='home__descripcion-admision-preinscripcion-title'>Inscríbete <GiClick/></span>
                  </a>
                </div>
              </div>

              {
                (nombreFilial) &&
                <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>
                  <div className='home__descripcion-filial-content'>
                  <h1 className='home__descripcion-filial-titulo'><FontAwesomeIcon icon={faUniversity} className="home__descripcion-filial-icon"/> {`${nombreFilial} ${(namef)? namef : ''}`}</h1>
                  <p className='home__descripcion-filial-direccion'><FontAwesomeIcon icon={faMapMarkerAlt} /> {address}</p>
                  <p className='home__descripcion-filial-ubicacion'>{dis}</p>
                  </div>
                </div>
              }

              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-3 grid-res-lg-3 grid-res-xl-3'>
                <div className='home__descripcion-informes'>
                  <p className='home__descripcion-informes-p'>Puedes recibir información a tu correo electrónico.</p>
                  <Link to={`${subdominio}/${filial}/admision`} className='home__descripcion-informes-link'>
                    <span className='home__descripcion-informes-link-title'>Informes <TbHandClick/></span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </div>
   );
}

export default Mapa;