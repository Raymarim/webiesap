import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const UnidadDidactica = ({keyp, keymod, keys,sem}) => {
  const url_base = process.env.REACT_APP_BASEURL;
  const [programaUnidad, setProgramaUnidad] = useState([]);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const controller = new AbortController();

    const getUnidadPrograma= async () => {
      try {
        const resp = await axios.get(`${url_base}api/webpro/proudi`,
        {
          params:{
            keyp: keyp,
            keym: keymod,
            keys: keys
          }
        },
        {
          signal: controller.signal
        });
        if(resp.status === 200){
          setProgramaUnidad(resp.data)
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };
    if (inView) {
      getUnidadPrograma();
    }

    return() => {
      controller.abort();
    }
  }, [keyp, keymod, keys, url_base, inView]);

  // console.log(programaUnidad)
  return ( 
    <>
      {
        (programaUnidad) && 
        <>
          <div className='grid-res-xs-6 grid-res-sm-6 grid-res-md-6 grid-res-lg-6 grid-res-xl-6' ref={ref}>
            <div className='programa__mallacurricular-unidad-content-table'>
              <table className='programa__mallacurricular-unidad-table'>
                <tbody>
                  <tr className='programa__mallacurricular-unidad-table-title'>
                    <td colSpan={2}><span className='programa__mallacurricular-unidad-semestre'>{sem}</span></td>
                  </tr>
                  <tr className='programa__mallacurricular-unidad-table-title'>
                    <td colSpan={2}>Unidad didáctica</td>
                  </tr>
                  
                  {
                    programaUnidad.map((uni, i) => {
                      let tipo_compe = uni.tpc,
                          com_style= '';
                      if(Number(tipo_compe) === 1){
                        com_style = '#01DF01';
                      }else if(Number(tipo_compe) === 2){
                        com_style = '#FFBF00';
                      }else if(Number(tipo_compe) === 3){
                        com_style = '#0000FF';
                      }
                      return <tr key={uni.keyu} className='programa__mallacurricular-unidad-table-data'>
                        <td><Competencia style={{backgroundColor : com_style}}></Competencia></td><td><p style={{marginBottom: '2px'}}>{uni.nameu}</p><p><Creditos>{uni.cred}</Creditos></p></td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </>
      }
    </>
  );
}
 
const Competencia = styled.span`
  padding: 0.25rem 0.1563rem;
`;

const Creditos = styled.span`
  background-color: var(--color_primary);
  padding: 0.125rem 0.625rem;
  color: var(--color_ligth);
  border-radius: 0.9375rem;
  font-size: 0.8125rem;

  @media (max-width: 28.625rem){
    font-size: 0.625rem;
  }
`;

export default UnidadDidactica;