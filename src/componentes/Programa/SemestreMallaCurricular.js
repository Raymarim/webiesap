import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UnidadDidactica from './UnidadDidactica';
import { useInView } from 'react-intersection-observer';

const SemestreMallaCurricular = ({keyp, keymod, modd, indexm}) => {
  // console.log(keyp, keymod)
  const url_base = process.env.REACT_APP_BASEURL;
  const [programaSemestre, setProgramaSemestre] = useState([]);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const controller = new AbortController();

    const getSemestrePrograma= async () => {
      try {
        const resp = await axios.get(`${url_base}api/webpro/prosem`,
        {
          params:{
            keyp: keyp,
            keym: keymod
          }
        },
        {
          signal: controller.signal
        });
        if(resp.status === 200){
          setProgramaSemestre(resp.data)
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };
    if (inView) {
      getSemestrePrograma();
      
    }

    return() => {
      controller.abort();
    }
  }, [keyp, keymod, url_base, inView]);

  // console.log(programaSemestre[0].names)
  return ( 
    <div ref={ref}>
      {
        (programaSemestre) &&
          <div className='item' id={`content-${indexm}`} >
            <h3 className='programa__mallacurricular-title-modulo'>{modd}</h3>
            <div className="grid grid-gap-xs">
              {
                programaSemestre.map((semestre) => {
                  let keys = semestre.keysem,
                  sem = semestre.names;
                  return <UnidadDidactica key={keys} keyp={keyp} keymod={keymod} keys={keys} sem={sem}/>
                })
              }
            </div>
          </div>
      }
    </div>
  );
}
 
export default SemestreMallaCurricular;