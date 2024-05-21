import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Esqueleton from './../Esqueleton/Esqueleton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle} from '@fortawesome/free-solid-svg-icons';

const BannerPrograma = ({codfilial,filial,keyp}) => {
  const url_base = process.env.REACT_APP_BASEURL;
  const [dataPrograma, cargarDataPrograma] = useState([]);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const getPrograma= async () => {
      try {
        const resp = await axios.get(`${url_base}api/webpro/prodetail`,
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
          setisloading(false);
          cargarDataPrograma(resp.data);

        }
      } catch (error) {
        console.log(`${error}`);
      }
    };
    getPrograma();

    return() => {
      controller.abort();
    }
    
  }, [codfilial,keyp,url_base]);

  return ( 
    <>
      {
        (isloading)?
          <Esqueleton type={1} color='dark' heigth={437}/>
        :
        dataPrograma &&
          (
          <div className="container__xl">
            <div className="grid">
              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                <section className='programa__banner'>
                  <div className="programa__banner-content-img">
                    <img src={`${url_base}package/web_iesap/img/programas/portada/${dataPrograma.picture}`} alt="" className='programa__banner-img' />
                  </div>
                  <div className='programa__banner-descripcion'>
                    <h4 className='programa__banner-programa'>{dataPrograma.namep_small}</h4>
                    <p className='programa__banner-detalle'><FontAwesomeIcon icon={faCircle} style={{'fontSize': '11px'}}/> {dataPrograma.des}</p>
                  </div>  
                </section>
              </div>
            </div>
          </div>
        )
      }
    </>

   );
}
 
export default BannerPrograma;