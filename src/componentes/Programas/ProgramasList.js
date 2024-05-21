import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Esqueleton from '../Esqueleton/Esqueleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons';

const ProgramasList = ({subdominio, codfilial, filial}) => {

  const url_base = process.env.REACT_APP_BASEURL;
  const [dataProgramas, cargarDataProgramas] = useState([]);
  const [isloading, setisLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const getprogramas = async () =>{
      try {
        const resp = await axios.get(`${url_base}api/webpro/pro`,
        {
          params:{
            keyp: codfilial
          }
        },
        {
          signal: controller.signal
        });
        if(resp.status === 200){
          cargarDataProgramas(resp.data);
          setisLoading(false);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
    getprogramas();

    return() => {
      controller.abort();
    }
  }, [url_base, codfilial])

  return ( 
    <>
      {
        (dataProgramas) &&
        <section className='programas__list'>
          <div className='container'>
            <div className='grid-gap-xs grid-auto-sm'>
              {
                (isloading === true) ?
                  <Esqueleton type={1} heigth={250} color={'dark'}/>
                :
                  dataProgramas.map((programa) =>{
                    return <div key={programa.keyc}className="programas__list-card">
                      <Link to={`${subdominio}/${filial}/programa/${programa.keyc}/${programa.hosts}`}>
                        <div className="programas__list-card-content-img">
                          <img src={`${url_base}package/web_iesap/img/programas/small/${programa.picture}`} alt="" className='programas__list-card-img'/>
                        </div>
                        <div className='programas__list-card-content-descripcion'>
                          <p className='programas__list-card-content-icon'>
                            <FontAwesomeIcon icon={faGraduationCap} className='programas__list-card-icon'/>
                          </p>
                          <h4 className='programas__list-card-title'> 
                            {programa.nam_small}
                          </h4>
                        </div>
                      </Link>
                    </div>
                  })
              }
            </div>
          </div>
        </section>
      }
    </>
   );
}
 
export default ProgramasList;