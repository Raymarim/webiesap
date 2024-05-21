import React, {useState, useEffect} from "react";
import {NavLink, Link} from 'react-router-dom';
// import HeaderLogo from "./HeaderLogo";
import '../css/sass/_header.scss';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHandHoldingMedical, faChevronDown, faGraduationCap, faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Esqueleton from "./Esqueleton/Esqueleton";
import { HashLink as Hash } from "react-router-hash-link";
import { faBars } from "@fortawesome/free-solid-svg-icons"; 
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5"

const Header = ({dataFilial, subdominio, codfilial, filial, dataProgramas}) => {
  const url_base = process.env.REACT_APP_BASEURL;
  const { picture, picture_small } = dataFilial;
  const [isloading, setisloading] = useState(true);

  const [ isopen, setisopen] = useState(false);
  const [ opensubmenu, setopensubmenu ] = useState(false);
  const [ opensubmenuTransp, setopensubmenuTransp ] = useState(false);
  const [ opensubmenuProg, setopensubmenuProg ] = useState(false);
  const [ opensubmenuAct, setopensubmenuAct ] = useState(false);
  const [ opensubmenuFil, setopensubmenuFil ] = useState(false);
  const [ opensubmenuInt, setopensubmenuInt ] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (picture) {
        setisloading(false);
      }
    }, 200);
  }, [picture]);

  useEffect(() => {
    const onscrollmenu = () => {
      const menu = document.getElementById('header__section-menu');
      const alturaMenu = menu.offsetTop;//35
      let alturaVentana = Math.round(window.pageYOffset);

      const social_phone = document.getElementById('social_phone');
      const social_whatsapp = document.getElementById('social_whasatpp');
      const social_up = document.getElementById('social_up');
      const social_filial = document.getElementById('social_filial');
      const social_admision = document.getElementById('social__admision');
      // const social__conffeti = document.getElementById('social__conffeti');

      if(alturaVentana > alturaMenu){
        social_phone.style.opacity = 1;
        social_whatsapp.style.opacity = 1;
        social_up.style.opacity = 1;
        social_filial.style.top = `${72}px`;
        social_admision.style.opacity = 1;
        menu.classList.add('header__section-menu-static');
        // social__conffeti.style.top = `${73}px`;
        //element.style.opacity = 1;
      }else{
        social_phone.style.opacity = 0;
        social_whatsapp.style.opacity = 0;
        social_up.style.opacity = 0;
        social_filial.style.top = `${104}px`;
        social_admision.style.opacity = 0;
        menu.classList.remove('header__section-menu-static');
        // social__conffeti.style.top = `${105}px`;
      }
    }
    window.addEventListener('scroll', onscrollmenu);

    return () => {
      window.removeEventListener('scroll', onscrollmenu);
    }
  })

  // console.log(opensubmenuTransp)
  
  return ( 
    <section className="header__section">
      <div className="header__section-data">
        <div className="container__lg">
          <section className="grid">
            <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-5 grid-res-lg-5 grid-res-xl-5">
              <div className="header__section-data-redes-sociales">
                <div className="header__section-data-redes-content">
                  <span className="header__section-data-redes-title">
                    <FontAwesomeIcon icon={faPhone} className="header__section-data-redes-icon"/> {dataFilial.tel}
                  </span>
                </div>
                <a href={`https://api.whatsapp.com/send?phone=51${dataFilial.whua}&text=Escribenos%20para%20recibir%20informacion.`} target="_black">
                  <div className="header__section-data-redes-content">
                    <span className="header__section-data-redes-title"><FontAwesomeIcon icon={faWhatsapp} className="header__section-data-redes-icon"/> {dataFilial.whua}</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-2 grid-res-lg-2 grid-res-xl-2"> 
              <Link to={`${subdominio}/${filial}/`}>
                <div className="header__section-data-home">
                  <span className="header__section-data-home-content"><FontAwesomeIcon icon={faHome} className="header__section-data-home-icon"/> </span>
                </div>
              </Link>
            </div>
            <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-5 grid-res-lg-5 grid-res-xl-5">
              <div className="header__section-data-anexos">
                <a href="https://sincro.iesap.edu.pe/mesa-de-partes" target="_black">
                  <div className="header__section-data-mesadepartes">
                    <FontAwesomeIcon icon={faHandHoldingMedical} className="header__section-data-icon"/> 
                    <span> Mesa de partes</span>
                  </div>
                </a>
                <a href="https://erp.iesap.edu.pe/pre-inscripcion" target="_black">
                  <div className="header__section-data-mesadepartes">
                    <FontAwesomeIcon icon={faPlus} className="header__section-data-icon"/> 
                    <span> Preinscripción</span>
                  </div>
                </a>
                <a href="https://mail.google.com/a/iesap.edu.pe" target="_black">
                  <div className="header__section-data-mesadepartes">
                    <FontAwesomeIcon icon={faEnvelope} className="header__section-data-icon"/> 
                    <span>Ir a Gmail</span>
                  </div>
                </a>   
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="header__section-menu" id="header__section-menu">
        <div className="container_header">
          <section className="grid">
            <div className="grid-res-xs-9 grid-res-sm-9 grid-res-md-8 grid-res-lg-3 grid-res-xl-3">
              <div className="header__section-menu-logo-content">
                <Link to={`${subdominio}/${filial}/`} style={{width: '100%'}}>
                  {
                    (isloading === true)?
                      <Esqueleton type={2} siseContent={'small'} siseSquare={'small'} siseLine={'small'}/>
                    :
                      <picture>
                        <source srcSet={`${url_base}package/web_iesap/img/logo/small/${picture_small}`} media="(max-width: 375px)"/>
                        <img src={`${url_base}package/web_iesap/img/logo/${picture}`} alt="Logo iesap" title="Logo iesap" className="header__section-menu-logo"/>
                      </picture>
                  }
                </Link>
                <div className="header__section-hamburger">
                  <div onClick={() => setisopen(!isopen)} className="hamburger-ico">
                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '25px'}}/>
                  </div>
                  <Hamburger className="hamburger-menu" isopen={isopen}>
                    <div className="hamburger-menu-icon" onClick={() => setisopen(!isopen)}>
                      <IoIosCloseCircleOutline style={{ fontSize: '28px', color: 'red'}} />
                    </div>
                    <ul className="hamburger-menu-lista">
                      <Link to={`${subdominio}/${filial}/`}>
                        <li className="hamburger-menu-item">
                          Inicio
                        </li>
                      </Link>
                      <ItemMenu 
                        className="hamburger-menu-item"
                        onClick={() => setopensubmenu(!opensubmenu)}
                        opensubmenu={opensubmenu}
                        >
                        <span>Nosotros</span>
                        <IoChevronDownSharp />

                        <SubMenu opensubmenu={opensubmenu} className="hamburger-submenu">
                          <Hash smooth to={`${subdominio}/${filial}/nosotros#introduccion`}>
                            <li className="hamburger-submenu-item">
                              Introducción
                            </li>
                          </Hash>
                          <Hash smooth to={`${subdominio}/${filial}/nosotros#nuestraHistoria`}>
                            <li className="hamburger-submenu-item">
                              Nuestra Historia
                            </li>
                          </Hash>
                          <Hash smooth to={`${subdominio}/${filial}/nosotros#misionVision`}>
                            <li className="hamburger-submenu-item">
                              Visión y Misión
                            </li>
                          </Hash>
                          <Hash smooth to={`${subdominio}/${filial}/nosotros#directivos`}>
                            <li className="hamburger-submenu-item">
                              Directivos
                            </li>
                          </Hash>
                          <Hash smooth to={`${subdominio}/${filial}/nosotros#organigrama`}>
                            <li className="hamburger-submenu-item">
                              Organigrama
                            </li>
                          </Hash>
                        </SubMenu>
                      </ItemMenu>

                      <ItemMenu 
                        className="hamburger-menu-item"
                        onClick={() => setopensubmenuTransp(!opensubmenuTransp)}
                        opensubmenuTransp={opensubmenuTransp}
                        >
                        <span>Institucional</span>
                        <IoChevronDownSharp />

                        <SubMenu opensubmenuTransp={opensubmenuTransp} className="hamburger-submenu">
                          <Link to={`${subdominio}/${filial}/transparencia`}>
                            <li className="hamburger-submenu-item">
                              Transparencia
                            </li>
                          </Link>
                        </SubMenu>
                      </ItemMenu>

                      <Link to={`${subdominio}/${filial}/admision`}>
                        <li className="hamburger-menu-item">
                          Admisión
                        </li>
                      </Link>

                      <Link to={`${subdominio}/${filial}/egresados`}>
                        <li className="hamburger-menu-item">
                          Egresados
                        </li>
                      </Link>

                      <ItemMenu 
                        className="hamburger-menu-item"
                        onClick={() => setopensubmenuProg(!opensubmenuProg)}
                        opensubmenuProg={opensubmenuProg}
                        >
                        <span>Programas de estudio</span>
                        <IoChevronDownSharp />

                        <SubMenu opensubmenuProg={opensubmenuProg} className="hamburger-submenu">
                          {
                            dataProgramas.map((prog) => {
                              return <Link to={`${subdominio}/${filial}/programa/${prog.keyp}/${prog.hosts}`} key={prog.keyp} >
                              <li className="hamburger-submenu-item">
                                {prog.namesmall}
                              </li>
                            </Link>
                            })
                    
                          }
                        </SubMenu>
                      </ItemMenu>

                      <ItemMenu 
                        className="hamburger-menu-item"
                        onClick={() => setopensubmenuAct(!opensubmenuAct)}
                        opensubmenuAct={opensubmenuAct}
                        >
                        <span>Actualidad</span>
                        <IoChevronDownSharp />

                        <SubMenu opensubmenuAct={opensubmenuAct} className="hamburger-submenu">
                          <Link to={`${subdominio}/${filial}/noticias`}>
                            <li className="hamburger-submenu-item">
                              Noticias
                            </li>
                          </Link>
                        </SubMenu>
                      </ItemMenu>

                      <ItemMenu 
                        className="hamburger-menu-item"
                        onClick={() => setopensubmenuFil(!opensubmenuFil)}
                        opensubmenuFil={opensubmenuFil}
                        >
                        <span>IESAP y filiales</span>
                        <IoChevronDownSharp />

                        <SubMenu opensubmenuFil={opensubmenuFil} className="hamburger-submenu">
                          <Link to={`${subdominio}/lima/`} target="_black">
                            <li className="hamburger-submenu-item">
                              Sede Central Lima
                            </li>
                          </Link>
                          <Link to={`${subdominio}/arequipa/`} target="_black">
                            <li className="hamburger-submenu-item">
                              Filial Arequipa
                            </li>
                          </Link>
                          <Link to={`${subdominio}/chiclayo/`} target="_black">
                            <li className="hamburger-submenu-item">
                              Filial Chiclayo
                            </li>
                          </Link>
                          <Link to={`${subdominio}/piura/`} target="_black">
                            <li className="hamburger-submenu-item">
                              Filial Piura
                            </li>
                          </Link>
                          <Link to={`${subdominio}/ica/`} target="_black">
                            <li className="hamburger-submenu-item">
                              Filial Ica
                            </li>
                          </Link>
                        </SubMenu>
                      </ItemMenu>
                      
                      <ItemMenu 
                        className="hamburger-menu-item"
                        onClick={() => setopensubmenuInt(!opensubmenuInt)}
                        opensubmenuInt={opensubmenuInt}
                        >
                        <span>Intranet</span>
                        <IoChevronDownSharp />

                        <SubMenu opensubmenuInt={opensubmenuInt} className="hamburger-submenu">
                          <a href="https://erp.iesap.edu.pe/iniciar-sesion" target="_blank" rel="noopener noreferrer" >
                            <li className="hamburger-submenu-item">
                              Plataforma Educativa
                            </li>
                          </a>
                          <a href="https://mail.google.com/a/iesap.edu.pe" target="_blank" rel="noopener noreferrer">
                            <li className="hamburger-submenu-item">
                              E_MAIL
                            </li>
                          </a>
                          <a href="https://erp.iesap.edu.pe/mesa-de-partes" target="_blank" rel="noopener noreferrer">
                            <li className="hamburger-submenu-item">
                              Mesa de Partes
                            </li>
                          </a>
                          <Link to={`${subdominio}/${filial}/bolsa-laboral`}>
                            <li className="hamburger-submenu-item">
                              Bolsa Laboral
                            </li>
                          </Link>
                          <a href="https://forms.gle/K8iY4GUdFbfmMYKMA" target="_blank" rel="noopener noreferrer">
                            <li className="hamburger-submenu-item">
                              Encuesta Seguimiento de Egresados
                            </li>
                          </a>
                        </SubMenu>
                      </ItemMenu>

                    </ul>
                  </Hamburger>
                </div>
              </div>
              
            </div>
            <div className="header__section-menu grid-res-xs-3 grid-res-sm-3 grid-res-md-4 grid-res-lg-9 grid-res-xl-9">

              <nav className="header__section-menu-nav">

                {/* <input type="checkbox" name="" className="header__section-menu-hambur-checkbox" />
                <div className="header__section-menu-hambur-lines">
                  <span className="line header__section-menu-hambur-line1"></span>
                  <span className="line header__section-menu-hambur-line2"></span>
                  <span className="line header__section-menu-hambur-line3"></span>
                </div> */}
                
                

                <Menu className="header__section-menu-ul-parent">
                  <li className="header__section-menu-li">
                    <NavLink to={`${subdominio}/${filial}/`} className="header__section-menu-li-a">
                      Inicio
                    </NavLink>
                  </li>

                  <li className="header__section-menu-li">
                    <NavLink to={`${subdominio}/${filial}/nosotros`}className="header__section-menu-li-a">Nosotros
                      <span className="header__section-menu-li-span-icon">
                        <FontAwesomeIcon icon={faChevronDown} className="header__section-menu-li-icon" />
                      </span>
                    </NavLink>
                    <div className="header__section-submenu">
                      <ul className="header__section-submenu-lista-standar">
                        <Hash smooth to={`${subdominio}/${filial}/nosotros#introduccion`}>
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">Introducción</p>
                            </div>
                          </li>
                        </Hash>
                        <Hash smooth to={`${subdominio}/${filial}/nosotros#nuestraHistoria`}>
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">Nuestra Historia</p>
                            </div>
                          </li>
                        </Hash>
                        <Hash smooth to={`${subdominio}/${filial}/nosotros#misionVision`}>
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">Visión y Misión</p>
                            </div>
                          </li>
                        </Hash>
                        <Hash smooth to={`${subdominio}/${filial}/nosotros#directivos`}>
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">Directivos</p>
                            </div>
                          </li>
                        </Hash>
                        <Hash smooth to={`${subdominio}/${filial}/nosotros#organigrama`}>
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">Organigrama</p>
                            </div>
                          </li>
                        </Hash>
                      </ul>
                    </div>
                  </li>
                  <li className="header__section-menu-li">
                    <Link to={`#`}className="header__section-menu-li-a">Institucional
                      <span className="header__section-menu-li-span-icon">
                        <FontAwesomeIcon icon={faChevronDown} className="header__section-menu-li-icon" />
                      </span>
                    </Link>
                    <div className="header__section-submenu">
                      <ul className="header__section-submenu-lista-standar">
                        {/* <Link to={`${subdominio}/${filial}/licenciamiento`}>
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">Licenciamiento institucional</p>
                            </div>
                          </li>
                        </Link> */}
                        <Link to={`${subdominio}/${filial}/transparencia`}>
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">Transparencia</p>
                            </div>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </li>

                  <li className="header__section-menu-li">
                    <NavLink to={`${subdominio}/${filial}/admision`}className="header__section-menu-li-a">Admisión
                    </NavLink>
                  </li>
                  
                  <li className="header__section-menu-li">
                    <NavLink to={`${subdominio}/${filial}/egresados`}className="header__section-menu-li-a">Egresados
                    </NavLink>
                  </li>

                  <li className="header__section-menu-li">
                    <NavLink to={`${subdominio}/${filial}/programas`} className="header__section-menu-li-a">Programas de estudio
                      <span className="header__section-menu-li-span-icon">
                        <FontAwesomeIcon icon={faChevronDown} className="header__section-menu-li-icon" />
                      </span>
                    </NavLink>
                    {
                      (dataProgramas) &&
                      <>
                        <div className="header__section-submenu">
                          <ul className="header__section-submenu-ul">
                            {
                              dataProgramas.map((programa) => {
                                const keyencode = btoa(programa.keypn);
                                return <LinkStyle key={programa.keyp} to={`${subdominio}/${filial}/programa/${programa.keyp}/${programa.hosts}`} keypro={keyencode} keyfi={codfilial} className="header__section-submenu-a">
                              <li className="header__section-submenu-li">
                                <div className="header__section-submenu-li-content-icon">
                                  <FontAwesomeIcon icon={faGraduationCap} className="header__section-submenu-li-icon"/>
                                </div>
                                <div className="header__section-submenu-li-carrera">
                                  <p className="header__section-submenu-li-carrera-nombre">{programa.namesmall}</p>
                                  <span className="header__section-submenu-li-carrera-time">{programa.dur}</span>
                                </div>
                              </li>
                            </LinkStyle>
                              })
                            }
                          </ul>
                        </div>
                        {/* <div className="header__section-submenu-resp">
                          <ul className="header__section-submenu-ul-resp">
                            {
                              ProgramasHead.map((programa) => {
                                return <Link key={programa.keyp} to={`${subdominio}/${filial}/programa/${programa.keyp}/${programa.hosts}`} className="header__section-submenu-a-resp">
                                  <li className="header__section-submenu-li-resp">
                                    <p className="header__section-submenu-li-carrera-resp">{programa.namesmall}</p>
                                  </li>
                                </Link>
                              })
                            }
                          </ul>
                        </div> */}
                      </>
                    }
                  </li>

                  {/* <li className="header__section-menu-li">
                    <Link to={`#`} className="header__section-menu-li-a">Cursos
                      <span className="header__section-menu-li-span-icon">
                        <FontAwesomeIcon icon={faChevronDown} className="header__section-menu-li-icon" />
                      </span>
                    </Link>
                    <div className="header__section-submenu-megamenu header__section-submenu">
                      <ul className="header__section-submenu-megamenu-parent-list-two">
                        <li className="header__section-submenu-megamenu-parent-list-two-children header__section-submenu-megamenu-parent-list-two-children-active"><span className="header__section-submenu-megamenu-parent-list-two-children-name"><FontAwesomeIcon icon={faList} className="header__section-submenu-megamenu-parent-list-two-children-name-icon"/> Formación continua</span>
                          <ul className="header__section-submenu-megamenu-parent-children-rigth">
                            <a href="#" target="_black">
                              <li><span className="header__section-submenu-megamenu-parent-children-rigth-title"> <FontAwesomeIcon icon={faCheck}/> Fisioterapia y rehabilitación</span><span className="badge badge-roj">Nuevo</span></li>
                            </a>
                            <a href="#" target="_black">
                              <li><span className="header__section-submenu-megamenu-parent-children-rigth-title"> <FontAwesomeIcon icon={faCheck}/> Aduanas y comercio exterior</span><span className="badge badge-ver">Nuevo</span></li>
                            </a>
                          </ul>
                        </li>
                        <li className="header__section-submenu-megamenu-parent-list-two-children"><span className="header__section-submenu-megamenu-parent-list-two-children-name"><FontAwesomeIcon icon={faList} className="header__section-submenu-megamenu-parent-list-two-children-name-icon"/> Cursos de especialización</span>
                          <ul className="header__section-submenu-megamenu-parent-children-rigth">
                            <Link to="#">
                              <li><span className="header__section-submenu-megamenu-parent-children-rigth-title"> <FontAwesomeIcon icon={faCheck}/> Excel financiero</span><span className="badge badge-ver">Nuevo</span>
                              </li>
                            </Link>
                            <Link to="#">
                              <li><span className="header__section-submenu-megamenu-parent-children-rigth-title"> <FontAwesomeIcon icon={faCheck}/> Documentación exterior</span></li>
                            </Link>
                          </ul>
                        </li>
                        <li className="header__section-submenu-megamenu-parent-list-two-children"><span className="header__section-submenu-megamenu-parent-list-two-children-name"><FontAwesomeIcon icon={faList} className="header__section-submenu-megamenu-parent-list-two-children-name-icon"/>  Diplomados</span>
                          <ul className="header__section-submenu-megamenu-parent-children-rigth">
                            <Link to="#">
                              <li><span className="header__section-submenu-megamenu-parent-children-rigth-title"> <FontAwesomeIcon icon={faCheck}/> Contabilidad financiera</span><span className="badge badge-mor">Nuevo</span></li>
                            </Link>
                            <Link to="#">
                              <li><span className="header__section-submenu-megamenu-parent-children-rigth-title"> <FontAwesomeIcon icon={faCheck}/> Administración de empresas</span></li>
                            </Link>
                            <Link to="#">
                              <li><span className="header__section-submenu-megamenu-parent-children-rigth-title"> <FontAwesomeIcon icon={faCheck}/> Administración</span></li>
                            </Link>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>   */}
                  <li className="header__section-menu-li">
                    <Link to={`#`}className="header__section-menu-li-a">Actualidad
                      <span className="header__section-menu-li-span-icon">
                        <FontAwesomeIcon icon={faChevronDown} className="header__section-menu-li-icon" />
                      </span>
                    </Link>
                    <div className="header__section-submenu">
                      <ul className="header__section-submenu-lista-standar">
                        <Link to={`${subdominio}/${filial}/noticias`}>
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">Noticias</p>
                            </div>
                          </li>
                        </Link>

                        <Link to={`${subdominio}/${filial}/galeria`}>
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">Galeria</p>
                            </div>
                          </li>
                        </Link>
                        {/* <Link to={`${subdominio}/${filial}/eventos`}>
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">Eventos</p>
                            </div>
                          </li>
                        </Link> */}
                      </ul>
                    </div>
                  </li>

                  <li className="header__section-menu-li">
                    <Link to={`#`}className="header__section-menu-li-a">Intranet
                      <span className="header__section-menu-li-span-icon">
                        <FontAwesomeIcon icon={faChevronDown} className="header__section-menu-li-icon" />
                      </span>
                    </Link>
                    <div className="header__section-submenu">
                      <ul className="header__section-submenu-lista-standar">
                        <a href="https://erp.iesap.edu.pe/iniciar-sesion" target="_blank" rel="noopener noreferrer">
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">Plataforma Educativa</p>
                            </div>
                          </li>
                        </a>
                        <a href="https://mail.google.com/a/iesap.edu.pe" target="_blank" rel="noopener noreferrer">
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">E_MAIL</p>
                            </div>
                          </li>
                        </a>
                        <a href="https://erp.iesap.edu.pe/mesa-de-partes" target="_blank" rel="noopener noreferrer">
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">Mesa de Partes</p>
                            </div>
                          </li>
                        </a>
                        <Link to={`${subdominio}/${filial}/bolsa-laboral`}>
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">Bolsa Laboral</p>
                            </div>
                          </li>
                        </Link>
                        <a href="https://forms.gle/K8iY4GUdFbfmMYKMA" target="_blank" rel="noopener noreferrer">
                          <li className="header__section-submenu-lista-standar-item">
                            <div className="header__section-submenu-lista-standar-item-content">
                              <p className="header__section-submenu-lista-standar-item-name">Encuesta Seguimiento de Egresados</p>
                            </div>
                          </li>
                        </a>
                      </ul>
                    </div>
                  </li>

                  {/* <li className="header__section-menu-li">
                    <NavLink to={`${subdominio}/${filial}/intranet`}className="header__section-menu-li-a">Intranet
                    </NavLink>
                  </li> */}

                </Menu>
              </nav>
            </div>
          </section>
        </div>
      </div>
    </section>
   );
}

const Menu = styled.ul`
  a.active{
    border-bottom: 2px solid var(--color_primary);
    /*  transition: border-bottom .1s ease-in; */
  }
`;
 
const Hamburger = styled.div`
  width: 255px;
  height: 100vh;
  padding: 35px 0;
  background-color: var(--color_ligth);
  position: fixed;
  top: 0;
  right: 0;
  transform: ${props => props.isopen ? 'translateX(0px)' : 'translateX(250px)'};
  z-index: 999999999999999986;
  transition: transform .5s ease-in;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ItemMenu = styled.li`
  //height: ${props => (props.opensubmenu) ? 'none' : '45px'};
  ${({ opensubmenu, opensubmenuTransp, opensubmenuProg, opensubmenuAct, opensubmenuFil, opensubmenuInt })=> {
    if (opensubmenu || opensubmenuTransp || opensubmenuProg || opensubmenuAct || opensubmenuFil || opensubmenuInt) {
      return`
      height: none;
      `
    }else{
      return`
      height: 45px;
      `
    }
  }}
  cursor: pointer;
  & > svg{
    /* transform: ${props => props.opensubmenuTransp ? 'rotate(180deg)' : 'rotate(0deg)'}; */
    ${({ opensubmenu, opensubmenuTransp, opensubmenuProg, opensubmenuAct, opensubmenuFil, opensubmenuInt })=> {
      if (opensubmenu || opensubmenuTransp || opensubmenuProg || opensubmenuAct || opensubmenuFil || opensubmenuInt) {
        return`
        transform: rotate(180deg);
        `
      }else{
        return`
        transform: rotate(0deg);
        `
      }
    }}
    transition: transform .3s ease-in;
    /* margin-left: 45px; */
  }
`;

const SubMenu = styled.ul`
  ${({ opensubmenu, opensubmenuTransp, opensubmenuProg, opensubmenuAct, opensubmenuFil, opensubmenuInt})=> {
    if (opensubmenu || opensubmenuTransp || opensubmenuProg || opensubmenuAct || opensubmenuFil || opensubmenuInt) {
      return`
        visibility: visible;
        opacity : 1;
      `
    }else{
      return`
        visibility: hidden;
        opacity : 0;
      `
    }
  }}
  width: 100%;
  height: auto;
  padding: 10px 15px 5px;
  /* visibility: ${props => props.opensubmenu ? 'visible' : 'hidden'};
  opacity: ${props => props.opensubmenu ? 1 : 0}; */
  transition: opacity .3s ease-in;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LinkStyle = styled(Link)`
  & > .header__section-submenu-li{
    
    ${({ keypro, keyfi }) => {
      const keyprog = Number(atob(keypro));
      let data = [];
      // if (keyfi === '96a3be3cf272e017046d1b2674a52bd3') {
      //   data = [
      //     { codpro: 2, color: '#FF5D0B', hover: '#ff5c0b14' },
      //     { codpro: 3, color: '#38761D', hover: '#38761d0b' },
      //     { codpro: 4, color: '#cc4125', hover: '#cc41250a' },
      //     { codpro: 8, color: '#cc0000', hover: '#cc000013' }
      //   ];
      // }else 

      if(keyfi === '96a3be3cf272e017046d1b2674a52bd3' || keyfi === 'a2ef406e2c2351e0b9e80029c909242d' || keyfi === 'e45ee7ce7e88149af8dd32b27f9512ce' || keyfi === '7d0665438e81d8eceb98c1e31fca80c1' || keyfi === '751d31dd6b56b26b29dac2c0e1839e34'){
        data = [
          { codpro: 1, color: '#e4812c', hover: '#e4822c0f' },
          { codpro: 2, color: '#ff5500', hover: '#ff55000c' },
          { codpro: 3, color: '#7109b6', hover: '#7109b609' },
          { codpro: 4, color: '#0cb24c', hover: '#0cb24c0d' },
          { codpro: 5, color: '#0198dd', hover: '#0197dd0f' },
          { codpro: 6, color: '#9cb801', hover: '#9db8010c' },
          { codpro: 7, color: '#fb252d', hover: '#fb252c09' },
          { codpro: 8, color: '#941f63', hover: '#941f630c' },
          { codpro: 9, color: '#0326a4', hover: '#0326a40c' },
        ];
      }
      // console.log(codfilial);
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (keyprog === element.codpro) {
          return`
            &::before{
              border-left: 0.25rem solid ${element.color};
            }
            .header__section-submenu-li-icon{
              color: ${element.color};
            }
            &:hover{
              background: ${element.hover};
              .header__section-submenu-li-carrera-nombre{
                color: ${element.color};
              }
            }
          `
        }
      }
    }}
  }
  
`;

export default Header;