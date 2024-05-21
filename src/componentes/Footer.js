import React, {useState, useEffect} from 'react';
import axios from "axios";
import Iconsvg from './Iconsvg';
import { Link } from 'react-router-dom';
// import { location } from './../helpers/Location';
import Esqueleton from './Esqueleton/Esqueleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FaHandPointRight } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

const Footer = ({subdominio, codfilial, filial, redesSociales}) => {

  const url_base = process.env.REACT_APP_BASEURL;
  const [dataProgramas, fcargarProgramas] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [ enlacesInteres, setEnlacesInteres] = useState([]);
  const [ isenlaces, setisEnlaces ] = useState(true);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() =>{
    const controller = new AbortController();

    const obtenerProgramas= async () =>{
      try {
        const resp = await axios.get(`${url_base}api/webhome/prog_web`,{
          params:{
            keyfl: codfilial
          }
        },
        {
          signal: controller.signal
        });
        if(resp.status === 200){
          fcargarProgramas(resp.data);
          setisloading(false);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
    if (inView) {
      obtenerProgramas();
    }

    return() => {
      controller.abort();
    }
    
  }, [url_base, codfilial, inView]);

  useEffect(() => {
    const controller = new AbortController();

    const getEnlacesInteres = async() => {
      try {
        const resp = await axios.get(`${url_base}api/webhome/ent_int`);
          setTimeout(() => {
            
            if(resp.status === 200){
              setEnlacesInteres(resp.data);
              setisEnlaces(false);
            }
          }, 1000);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
      
    }
    getEnlacesInteres();

    return() => {
      controller.abort();
    }

  }, [url_base]);

  // useEffect(() =>{
  //   const datalocation = location();

  //   if (datalocation[4]) {
  //     setLogoLigth(
  //       './../../../assets/img/logoiesap_ligth.png'
  //     )
  //   }else{
  //     setLogoLigth(
  //       './../assets/img/logoiesap_ligth.png'
  //     )
  //   }
  // }, [codfilial, filial])

  return ( 
    <>
      <section className='entidades__interes'>
        <div className="container">
          {
            (isenlaces)?
              <Esqueleton type={1} heigth={420} color={'dark'} />
            :
            <>
              <div className='grid'>
                <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                  <div className='entidades__importantes-content-title'>
                    <h3 className='entidades__importantes_title'>Enlaces de entidades de tu interés</h3>
                  </div>
                </div>
              </div>
              <div className='grid grid-gap-xs'>
                {
                  enlacesInteres.map((enlace) =>{
                    return <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-4 grid-res-lg-4 grid-res-xl-4' key={enlace.keyen}>
                      <div className='entidad__content'>
                        <a href={`${enlace.rel}`} className='entidad__content-lnk' target="_black" rel="noopener noreferrer">
                          <img src={`${url_base}package/web_iesap/img/entidades_interesantes/${enlace.picture}`} alt="" className='entidad__picture'/>
                        </a>
                      </div>
                    </div>
                  })
                }
              </div>
            </>
          }
        </div>
      </section>

      <section className='footer__iesap' ref={ref}>
        <div className="container__xll">
          <div className="grid grid-gap-xs">
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>
              {
                (dataProgramas) &&
                <div className='footer__iesap-programas'>
                  <h3 className='footer__iesap-programas-titulo'>Programas de estudio</h3>
                  <div className='footer__iesap-programas-lista'>
                    <ul className='footer__iesap-programas-ul'>
                      {
                        (isloading === true)?
                          <Esqueleton type={1} heigth={150}/>
                        :
                          dataProgramas.map((programa,i)=>{
                            return <li key={i}className='footer__iesap-programas-li'>
                              <Link to={`${subdominio}/${filial}/programa/${programa.keyp}/${programa.hosts}`} className="footer__iesap-programas-link">
                                <FontAwesomeIcon icon={faGraduationCap}/> {`${programa.pro}`}
                              </Link>
                            </li>
                          })    
                      }
                    </ul>
                  </div>
                </div>
              }
            </div>
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>
              <div className='footer__iesap-filiales'>
              <h3 className='footer__iesap-filiales-titulo'>Sede Principal y filiales</h3>
                <div className='footer__iesap-filiales-lista'>
                  <ul className='footer__iesap-filiales-ul'>
                    <li className='footer__iesap-filiales-li'>
                      <Link to={`${subdominio}/piura/`} className="footer__iesap-filiales-link" target="_black">
                        <FontAwesomeIcon icon={faMapMarkerAlt}/> Sede Principal Piura
                      </Link>
                    </li>
                    <li className='footer__iesap-filiales-li'>
                      <Link to={`${subdominio}/arequipa/`} className="footer__iesap-filiales-link" target="_black">
                        <FontAwesomeIcon icon={faMapMarkerAlt}/> Filial Arequipa
                      </Link>
                    </li>
                    <li className='footer__iesap-filiales-li'>
                      <Link to={`${subdominio}/chiclayo/`} className="footer__iesap-filiales-link" target="_black">
                        <FontAwesomeIcon icon={faMapMarkerAlt}/> Filial Chiclayo
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-gap-xs">
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>
              <div className='footer__iesap-redes-content'>
                <div className='footer__iesap-redes-siguenos'>
                  <span>Síguenos:</span>  
                </div>
                <div className="footer__iesap-redes">
                  <div className="footer__iesap-redes-icons">
                    <a href={`${redesSociales.fbk}`} className='footer__iesap-redes-enlace icon--facebook'>
                      <FontAwesomeIcon icon={faFacebook} className='footer__iesap-redes-icon'/>
                    </a>
                  </div>
                  <div className="footer__iesap-redes-icons">
                    <a href={`${redesSociales.ist}`} className='footer__iesap-redes-enlace icon--instagran'>
                      <FontAwesomeIcon icon={faInstagram} className='footer__iesap-redes-icon'/>
                    </a>
                  </div>
                  <div className="footer__iesap-redes-icons">
                    <a href="http://" className='footer__iesap-redes-enlace icon--youtube'>
                      <FontAwesomeIcon icon={faYoutube} className='footer__iesap-redes-icon'/>
                    </a>
                  </div>
                  <div className="footer__iesap-redes-icons">
                    <a href={`${redesSociales.tik}`} className='footer__iesap-redes-enlace icon--tiktok'>
                      <FontAwesomeIcon icon={faTiktok} className='footer__iesap-redes-icon'/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>
              <Link to={`${subdominio}/${filial}/`} >
                <div className="footer__iesap-content-logo">
                  <div className="footer__iesap-logo">
                    <img src={`${url_base}package/web_iesap/img/assets/a8a71e20cc6ee060c58fc8c2090ab93c018c003f.png`} className='footer__iesap-logo-img' alt="Logo IESAP " title="Logo IESAP" />
                  </div>
                </div>  
              </Link>
            </div>
          </div>
          
        </div>
        <Iconsvg />
      </section>
      <section className='footer__iesap-copyright'>
        <div className='container__xll'>
          <div className="grid">
              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                <p className='footer__iesap-copyright-titulo'>
                Copyright © 2004 - 2023 IESAP. TODOS LOS DERECHOS RESERVADOS.
                </p>
              </div>
          </div>
        </div>
      </section>

      <section className='footer__iesap-dev'>
        <div className='container__xll'>
          <div className="grid">
              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                <p className='footer__iesap-dev-titulo'>
                Creada, diseñada y desarrollada por     <FaHandPointRight/><a href="https://alexdev.pe/" className='footer__iesap-dev-lnk' target="_black" rel='noreferrer'>Alexanderdev.</a></p>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default Footer;