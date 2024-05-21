import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';

const AcercaDe = ({codfilial,keyp}) => {

  const url_base = process.env.REACT_APP_BASEURL;
  const [acercaPrograma, setAcercaPrograma] = useState('');
  // const [isdata, setIsdata ] =  useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const controller = new AbortController();

    const getAcercaPrograma= async () => {
      try {
        const resp = await axios.get(`${url_base}api/webpro/proace`,
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
          setAcercaPrograma(resp.data);
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };

    if (inView) {
      getAcercaPrograma();
    }

    return() => {
      controller.abort();
    }
    
  }, [codfilial,keyp,url_base, inView]);

  // const getAcercaPrograma = async () => {
  //   try {
  //     const resp = await axios.get(`${url_base}api/webpro/proace`,
  //     {
  //       params:{
  //         keyf: codfilial,
  //         keyp: keyp
  //       }
  //     });
  //     if(resp.status === 200){
  //       setAcercaPrograma(resp.data);
  //     }
  //   } catch (error) {
  //     console.log(`${error}`);
  //   }
  // };

  // useEffect(() => {
  //   if (inView) {
  //     // setIsdata(true)
  //     getAcercaPrograma();
  //   }
  //   // if(isdata){

  //   // }
  // }, [codfilial,keyp,url_base, inView]);
  
  // console.log(inView);

  return ( 
    <div className="grid" ref={ref}>
      <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
        <div className="programa__acercade programa__descripcion-card">
          <div className='programa__acercade-content-titulo'>
            <h4 className='programa__descripcion-card-titulo'>Acerca del programa de estudios</h4>
          </div>
          <div className='programa__acercade-content-descripcion'>
            <div className='programa__acercade-descripcion'>{acercaPrograma.des}</div>
          </div>
          {
            
          }
        </div>
      </div>
    </div>
   );
}
 
export default AcercaDe;