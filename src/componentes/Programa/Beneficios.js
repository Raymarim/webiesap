import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Certificaciones from './Certificaciones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const Beneficios = ({codfilial,keyp}) => {

  const url_base = process.env.REACT_APP_BASEURL;
  const [beneficiosPrograma, setBeneficiosPrograma] = useState('');

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const controller = new AbortController();

    const getBeneficiosPrograma= async () => {
      try {
        const resp = await axios.get(`${url_base}api/webpro/proben`,
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
          setBeneficiosPrograma(resp.data);
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };
    if (inView) {
      getBeneficiosPrograma();
    }

    return() => {
      controller.abort();
    }
  }, [codfilial,keyp,url_base, inView]);

  return ( 
    <div className="grid" ref={ref}>
      <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
        {
          (beneficiosPrograma.length)?
            <div className='programa__beneficios programa__descripcion-card'>
              <div className='programa__beneficios-content-titulo'>
                <h4 className=' programa__descripcion-card-titulo'>Beneficios</h4>
              </div>
              <div className='programa__beneficios-descripcion'>
                <ul className='programa__beneficios-lista'>
                  {
                    beneficiosPrograma.map((beneficio,i) => {
                      let cod_beneficio = beneficio.keyb,
                          estado = Number(beneficio.estc);
                      return <li key={beneficio.keyb}className='programa__beneficios-lista-children'><FontAwesomeIcon icon={faCheck}/> {beneficio.nameb}
                        {
                          (estado === 1)?
                            <Certificaciones codfilial={codfilial} keyp={keyp} cod_beneficio={cod_beneficio} />
                          :
                            <p></p> 
                        }
                      </li>
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
 
export default Beneficios;