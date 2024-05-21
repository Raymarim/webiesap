import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, NavLink } from 'react-router-dom';
import moment from 'moment/moment';
import AgenteBannerBlack from '../../../Agentes/AgenteBannerBlack';
import './../../../../css/sass/Actualidad/Noticias/DetalleNoticia/_detallenoticia.scss';
import Esqueleton from '../../../Esqueleton/Esqueleton';
import DetalleNoticiaLista from './DetalleNoticiaLista';
import { BsCalendar3 } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import Seo from '../../../Seo';
import DetalleNoticiaImagen from './DetalleNoticiaImagen';

const DetalleNoticia = ({subdominio, codfilial, filial, tabName}) => {

  let {keyn} = useParams();
  const url_base = process.env.REACT_APP_BASEURL;
  const [detalleNoticia, setDetalleNoticia] = useState([]);
  const [dataNoticia, setDataNoticia] = useState({});
  const [isloading, setisloading] = useState(true);

  const data = {
    url_Img : './../../../assets/img/actualidad/noticias/d1a9421474d722351b3b18090646cfb0.jpg',
    title_Img : 'Noticias Iesap',
    title : 'Noticias'
  }

  useEffect(() => {
    const getDataNoticia = async () => {
      try {
        const resp = await axios.get(`${url_base}api/act/webnot/not_data`,
        {
          params:{
            keyn: keyn
          }
        });
        if(resp.status === 200){
          setDataNoticia(resp.data);
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };
    getDataNoticia();
  }, [url_base, keyn]);

  useEffect(() => {
    const getDetalleNoticia= async () => {
      try {
        const resp = await axios.get(`${url_base}api/act/webnot/det_not`,
        {
          params:{
            keyf: codfilial,
            keyn: keyn
          }
        });
        if(resp.status === 200){
          setDetalleNoticia(resp.data);
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };
    getDetalleNoticia();

  }, [codfilial, url_base, keyn]);

  useEffect(() => {
    setTimeout(() => {
      if((dataNoticia) && (detalleNoticia)){
        setisloading(false);
      }
    }, 200);

  }, [dataNoticia, detalleNoticia, filial])

  return ( 
    <>
      <Seo 
        title={`Noticias | ${dataNoticia.namen} | Iesap - ${tabName}`} 
        description="Instituto de educación superior privado Alas peruanas, cursos, academico filial piura filial arequipa filial ica filial chiclayo"
        name="Instituto alas peruanas"
        type="article"
      />
      <div className='detalle__noticia'>
        <AgenteBannerBlack databanner={data}/>
        {
          (isloading === true) ?
            <Esqueleton type={1} heigth={550} color="dark"/>
          :
          <div className="container">
            <div className="grid">
              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-9 grid-res-lg-9 grid-res-xl-9'>
                <div className='grid'>
                  <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                    <div className='detalle__noticia-nav'>
                      <ul className='detalle__noticia-nav-list'>
                        <NavLink to={`${subdominio}/${filial}/`} className="detalle__noticia-nav-list-link">
                          <li className='detalle__noticia-nav-list-tems'><IoHomeOutline/> Inicio</li>
                        </NavLink>
                        <NavLink to={`${subdominio}/${filial}/noticias`} className="detalle__noticia-nav-list-link">
                          <li className='detalle__noticia-nav-list-tems'>Noticias</li>
                        </NavLink>
                      </ul>
                    </div>
                  </div>
                </div>    
                <div className='detalle__noticia-content'>
      
                  <div className='grid'>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                    <div className='detalle__noticia-portada-titulo-content'>
                      <h2 className='detalle__noticia-portada-titulo'> {dataNoticia.namen}</h2>
                    </div>
                    </div>
                  </div>
      
                  <div className='grid'>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                      <div className='detalle__noticia-content-date'>
                        <span className='detalle__noticia-content-date-publicado'><BsCalendar3 className='detalle__noticia-content-date-publicado-icon'/> Publicado </span>
                        <span className='detalle__noticia-content-datetime'>{` el : `} {moment(`${dataNoticia.datetimen}`).format(`Do MMMM YYYY, h:mm:ss a`)}</span>
                      </div>
                    </div>
                  </div>
      
                  <div className='grid'>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                      <div  className='detalle__noticia-portada'>
                        <div className='detalle__noticia-portada-content'>
                          <img src={`${url_base}package/web_iesap/img/actualidad/noticias/${dataNoticia.picture}`} alt="" className='detalle__noticia-portada-content-img'/>
                        </div>
                        {/* <h3 className='detalle__noticia-portada-titulo'><BiCheck style={{fontSize: '32px'}}/> {dataNoticia.namen}</h3> */}
                        
                      </div>
                    </div>
                  </div>
      
                  <div className='grid'>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                      <article className='detalle__noticia-descripcion'>
                      {
                          detalleNoticia.map((det,i) =>{
                            // console.log(det)
                            let keytype = det.keytype;
                            return (
                              <div key={i}>
                                {
                                  (() => {
                                    if(keytype === 'MQ=='){
                                      // ?Parrafo
                                      return (
                                        <p className='detalle__noticia-parr'>{det.desp}</p>
                                      )
                                    }else if (keytype === 'Mg==') {
                                      // ?imagen
                                      return(
                                        <DetalleNoticiaImagen url_base={url_base} picture={det.desp}/>
                                      )
                                    }else if(keytype === 'NQ=='){
                                      // ?subtitulo
                                      return(
                                        <h3 className='detalle__noticia-subitutlo'>{det.desp}</h3>
                                      )
                                    }else if(keytype === 'Nw=='){
                                      // ?lista
                                      return(
                                        <DetalleNoticiaLista coddetalle={det.keynd}/>
                                      )
                                    }else if(keytype === 'Ng=='){
                                      // ?bloque
                                      return(
                                        <p className='detalle__noticia-bloque'>{det.desp}</p>
                                      )
                                    }
                                    else if(keytype === 'OA=='){
                                      // ?enlace
                                      return(
                                        <div className='detalle__noticia-link-content'>
                                          <span>Link: </span>
                                          <a href={`${det.desp}`} target="_blanck" className='detalle__noticia-link'>{det.desp}</a>
                                        </div>
                                      )
                                    }
                                  })()
                                }
                              </div>
                            )
                          })
                        }
                      </article>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
}
 
export default DetalleNoticia;