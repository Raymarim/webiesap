import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ModuloMallaCurricular from './ModuloMallaCurricular';
import SemestreMallaCurricular from './SemestreMallaCurricular';
import { useInView } from 'react-intersection-observer';

const MallaCurricular = ({keyp}) => {
  const url_base = process.env.REACT_APP_BASEURL;
  const [programaModulos, setPogramaModulos] = useState([]);
  const [codmodulo, setCodModulo] = useState([]);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const controller = new AbortController();

    const getModulosPrograma= async () => {
      try {
        const resp = await axios.get(`${url_base}api/webpro/promod`,
        {
          params:{
            keyp: keyp
          }
        },
        {
          signal: controller.signal
        });
        if(resp.status === 200){
          setPogramaModulos(resp.data);
          setCodModulo(resp.data)
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };
    if (inView) {
      getModulosPrograma();
      
    }

    return() => {
      controller.abort();
    }
  }, [keyp,url_base, inView]);

  return ( 
    <div className="grid" ref={ref}>
      <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
        {
          (programaModulos.length) && (codmodulo.length) &&
            <div className="programa__mallacurricular programa__descripcion-card">
              <div className='programa__mallacurricular-content-titulo'>
                <h4 className=' programa__descripcion-card-titulo'>Plan de estudios</h4>
              </div>
              <div className='programa__mallacurricular-content-descripcion'>
                <div className='programa__mallacurricular-card programa__mallacurricular-tabs'>
                  {
                    programaModulos.map((mod, i) => {
                      let keym = mod.keym, 
                          modulo = mod.modn,
                          index = i+1;
                      return <ModuloMallaCurricular key={keym} keym={keym} modulo={modulo} index={index}/>
                      
                    })
                  }

                  <div className="glider"></div>

                  <section className='programa__mallacurricular-card-content'>
                    {
                      codmodulo.map((itemmod, i) => {
                        let keymod = itemmod.keym,
                          modd = itemmod.modd,
                          indexm = i + 1;

                        return <SemestreMallaCurricular key={i} keyp={keyp} keymod={keymod} modd={modd} indexm={indexm}/>
                      })
                    }
                  </section>
                  <section className='programa__mallacurricular-competencias'>
                    <div className='programa__mallacurricular-competencias-content'>
                      <span className='programa__mallacurricular-competencias-content-icon'></span>
                      <span className='programa__mallacurricular-competencias-content-descripcion'>Competencias Específicas. </span>
                    </div>
                    <div className='programa__mallacurricular-competencias-content'>
                      <span className='programa__mallacurricular-competencias-content-icon'></span>
                      <span className='programa__mallacurricular-competencias-content-descripcion'>Competencias para la Empleabilidad.</span>
                    </div>
                    <div className='programa__mallacurricular-competencias-content'>
                      <span className='programa__mallacurricular-competencias-content-icon'></span>
                      <span className='programa__mallacurricular-competencias-content-descripcion'>Experiencias Formativas en Situaciones Reales de Trabajo.</span>
                    </div>
                  </section>
                </div>
              </div>
            </div>
        }
      </div>
    </div>
  );
}
 
export default MallaCurricular;