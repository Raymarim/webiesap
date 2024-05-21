import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../css/sass/Home/_estudiar.scss';
import './../Grilla';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const Estudiar = ({codfilial}) => {
  const url_base = process.env.REACT_APP_BASEURL;
  const[ dataestudiar, cargardataestudiar] = useState([]);

  const { ref, inView } = useInView({
    threshold: 0,
  });


  useEffect(()=>{
    const obtenerdata = async () => {
      try {
        const resp = await axios.get(`${url_base}api/webhome/reconocimiento`,{
          params:{
            keyfl : codfilial
          }
        });
        if(resp.status === 200){
          cargardataestudiar(resp.data);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
    if (inView) {
      obtenerdata();
    }
  }, [codfilial, url_base, inView]);

  return ( 
    <section className="home__estudiar" ref={ref}>
      <div className="home__estudiar-titulo">
        <div className="container">
          <div className="grid">
            <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12">
              <h2 className='home__estudiar-titulo-principal'>¿ Por qué estudiar en el Instituto de Educación Superior Privado Alas Peruanas (<span className='iesap_span'>IESAP</span>) ?</h2>
              <p className='home__estuadiar-titulo-descripcion'>El Instituto Alas Peruanas cuenta con la mejor plana docente idóneos para formar futuros profesionales.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home__estudiar-cards">
        <div className="container__lg">
          <div className="grid-gap-xs grid-auto-xs">
            {
              (dataestudiar)&&
                <>
                  {dataestudiar.map((recon,i)=>{
                  return <article key={i} className="home__estudiar-card">
                    <img src={`${url_base}package/web_iesap/img/home/reconocimiento/${recon.por}`} alt="" />
                    <div className="home__estudiar-card-content-info">
                      <h3 className='home__estudiar-card-content-info-titulo'><FontAwesomeIcon icon={faCheck}/> {recon.rec}</h3>
                      <p className='home__estudiar-card-content-info-descripcion'>{recon.descr}</p>
                    </div>
                  </article>
                  })}
                </>
            }
          
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Estudiar;