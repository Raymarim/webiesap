import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons'; 

const Certificaciones = ({codfilial,keyp,cod_beneficio}) => {
  const url_base = process.env.REACT_APP_BASEURL;
  const [ certificacionesPrograma, setCertificacionesPrograma] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const getCertificacionesPrograma= async () => {
      try {
        const resp = await axios.get(`${url_base}api/webpro/probencer`,
        {
          params:{
            keyf: codfilial,
            keyp: keyp,
            keyb: cod_beneficio
          }
        },
        {
          signal: controller.signal
        });
        if(resp.status === 200){
          setCertificacionesPrograma(resp.data);
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };
    getCertificacionesPrograma();

    return() => {
      controller.abort();
    }
  }, [codfilial,keyp,url_base,cod_beneficio]);

  return ( 
    <>
      {
        (certificacionesPrograma.length)?
          <ul className='programa__beneficios-lista-certificaciones'>
            {
              certificacionesPrograma.map((certifi) =>{
                return <li key={certifi.keyc}className='programa__beneficios-lista-certificaciones-children'><FontAwesomeIcon icon={faAward} style={{color: '#5E26D6'}}/> {certifi.namec}</li>
              })
            }
          </ul>
        :
        <p></p>
      }
    </>
    
  );
}
 
export default Certificaciones;