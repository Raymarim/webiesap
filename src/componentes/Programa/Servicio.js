import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const Servicio = ({codfilial,keyp}) => {
  const url_base = process.env.REACT_APP_BASEURL;
  const [servicioPrograma, setServicioPrograma] = useState('');

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const controller = new AbortController();

    const getServiciosPrograma= async () => {
      try {
        const resp = await axios.get(`${url_base}api/webpro/proser`,
        {
          params:{
            keyf: codfilial,
            keyp: keyp
          }
        },
        {
          signal: controller.signal
        });
        if(resp.status === 200){
          setServicioPrograma(resp.data);
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };
    if (inView) {
      getServiciosPrograma();
    }

    return() => {
      controller.abort();
    }
  }, [codfilial,keyp,url_base, inView]);

  return ( 
    <div className="grid" ref={ref}>
      <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
        {
          (servicioPrograma.length)?
            <div className="programa__servicio programa__descripcion-card">
              <div className='programa__servicio-content-titulo'>
                <h4 className=' programa__descripcion-card-titulo'>Servicio al estudiante</h4>
              </div>
              <div className='programa__servicio-content-descripcion'>
                <ul className='programa__servicio-descripcion-lista'>
                  {
                    servicioPrograma.map((servicio)=> {
                      return <li key={servicio.keyse} className='programa__servicio-descripcion-children'><FontAwesomeIcon icon={faCheck}/> {servicio.names}</li>
                    })
                  }
                </ul>
              </div>
            </div>
          :
          <p></p>
        }
      </div>
    </div>
  );
}
 
export default Servicio;