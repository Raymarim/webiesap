import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const LugarTrabajo = ({codfilial,keyp}) => {

  const url_base = process.env.REACT_APP_BASEURL;
  const [ lugarTrabajo, setLugarTrabajo] = useState([]);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const controller = new AbortController();

    const getLugarTrabajoPrograma= async () => {
      try {
        const resp = await axios.get(`${url_base}api/webpro/prolut`,
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
          setLugarTrabajo(resp.data);
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };
    if (inView) {
      getLugarTrabajoPrograma();
    }

    return() => {
      controller.abort();
    }
  }, [codfilial,keyp,url_base, inView]);

  return ( 
    <div className="grid" ref={ref}>
      <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
        {
          (lugarTrabajo.length > 0) &&
            <div className="programa__lugartrabajo programa__descripcion-card">
              <div className='programa__lugartrabajo-content-titulo'>
                <h4 className=' programa__descripcion-card-titulo'>Entorno laboral</h4>
              </div>
              <div className='programa__lugartrabajo-content-descripcion'>
                <ul className='programa__lugartrabajo-descripcion-lista'>
                  {
                    lugarTrabajo.map((lugtrab,i)=>{
                      return <li key={lugtrab.keycle}className='programa__lugartrabajo-descripcion-lista-children'> <FontAwesomeIcon icon={faCheck}/> {lugtrab.namelt}</li>
                    })
                  }
                </ul>
              </div>
            </div>
        }
      </div>
    </div>
  );
}
 
export default LugarTrabajo;