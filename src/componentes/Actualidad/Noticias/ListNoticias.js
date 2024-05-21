import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FiMapPin} from 'react-icons/fi'
import { HiOutlineStar } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import moment from 'moment/moment';
import Esqueleton from './../../Esqueleton/Esqueleton';
import Pagination from 'rc-pagination';

const ListNoticias = ({subdominio, codfilial, filial}) => {
  const url_base = process.env.REACT_APP_BASEURL;
  const [listnoticias, setListNoticias] = useState([]);
  const [isloading, setisloading] = useState(true);

  const [totalPages, setTotalPages] = useState(0);
  const [paginaActual, setPageActual] = useState(1);
  const [paginaMin, setPaginaMin] = useState(0);
  // const [paginaMax, setPaginaMax] = useState(5);
  const paginaMax = 5;

  const onChangePagActual = page => {
    // console.log(page)
    // alert(page)
    setPageActual(page);
    setisloading(true);
    if(page){
      setisloading(false);
      (page === 1 )? setPaginaMin(0) : setPaginaMin(paginaActual * paginaMax);
    }
    getListNoticias(paginaMin, paginaMax);
  };

  useEffect(() => {
    getListNoticias(paginaMin, paginaMax);
  }, [codfilial, paginaMin, paginaMax]);

  const getListNoticias = async (paginaMin, paginaMax) => {
    try {
      const resp = await axios.get(`${url_base}api/act/webnot/list_not`,
      {
        params:{
          keyf: codfilial,
          lmin: paginaMin,
          lmax: paginaMax
        }
      });
      if(resp.status === 200){
        setListNoticias(resp.data);
        setisloading(false);
      }
    } catch (error) {
      console.log(`${error}`);
    }
  };

  useEffect(() => {
    const getTotalNoticias = async () => {
      try {
        const resp = await axios.get(`${url_base}api/act/webnot/tot_not`,
        {
          params:{
            keyf: codfilial
          }
        });
        if(resp.status === 200){
          setTimeout(() => {
            setTotalPages(resp.data);
          }, 200)
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };
    getTotalNoticias();
  }, [url_base, codfilial, totalPages])

  return ( 
    <>
      {
        (listnoticias) && 
        <>
          <section className='list__noticias'>
            <div className="container">
              <div className="grid">
                <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                  <div className='list__noticias-flex'>
                    {
                      (isloading)?
                        <Esqueleton type={1} heigth={450} color="dark"/>
                      :
                      listnoticias.map((noticia) =>{
                        return <Link key={noticia.keynot} to={`${subdominio}/${filial}/noticia/${noticia.keynot}/${noticia.slugnot}`}>
                          <article className='list__noticias-card'>
                            <div className='grid'>
                              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-5 grid-res-lg-5 grid-res-xl-5'>
                                <div className='list__noticias-card-content-picture'>
                                  <img src={`${url_base}package/web_iesap/img/actualidad/noticias/${noticia.picturen}`} alt="" className='list__noticias-card-picture'/>
                                </div>
                              </div>
                              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-7 grid-res-lg-7 grid-res-xl-7'>
                                <div className='list__noticias-card-descripcion'>
                                  <div className='list__noticias-card-descripcion-content-location'>
                                    <span>  
                                    { 
                                      // moment(`${date}`).fromNow()
                                      // moment().format('Do MMMM YYYY, h:mm:ss a')
                                    }
                                    </span>
                                    <span className='list__noticias-card-descripcion-location'>
                                      <FiMapPin className='list__noticias-card-descripcion-location-icon'/> {noticia.filname}
                                    </span>
                                  </div>
                                  <h3 className='list__noticias-card-descripcion-title'>{noticia.namenot}</h3>
                                  <div className='list__noticias-card-descripcion-fecha'>
                                    <strong>Publicado </strong>
                                    <span>  
                                      { 
                                        moment(`${noticia.datetimen}`).fromNow()
                                        // moment().format('Do MMMM YYYY, h:mm:ss a')
                                      }
                                    </span>
                                  </div>
                                  <p className='list__noticias-card-descripcion-desc'>{`${noticia.desp.substring(0 , 125)}...`}</p>
                                  <div className='list__noticias-card-descripcion-content-tipo'>
                                    <span className='list__noticias-card-descripcion-vermas'>Leer mas <IoIosArrowRoundForward style={{fontSize: '22px'}}/> </span>
                                    <span className='list__noticias-card-descripcion-tipo'><HiOutlineStar style={{fontSize: '17px'}}/> {noticia.type}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                        </Link>
                      })
                    }
                    
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='container'>
            <div className="grid">
                <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                  <div className='noticias__paginacion'>
                    <Pagination
                      onChange={onChangePagActual}
                      current={paginaActual}
                      total={totalPages}
                      pageSize={paginaMax}
                      showTitle={false}
                    />
                  </div>
                </div>
              </div>
          </section>
        </>
      }
      
    </>
  );
}
 
export default ListNoticias;