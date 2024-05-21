import React, { useState, useEffect } from "react";
import AgenteBanner from "../../../Agentes/AgenteBanner";
import Seo from "../../../Seo";
import './../../../../css/sass/Actualidad/BolsaDeTrabajo/Detalle/DetalleTrabajo.scss';
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsBookmark, BsCheck2Circle, BsClock } from "react-icons/bs";
import { FiMapPin } from 'react-icons/fi'
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import NavbarDetalleTrabajo from "./NavbarDetalleTrabajo";
import { useForm } from "react-hook-form";
import AgenteFormValidError from "../../../Agentes/AgenteFormValidError";
import AgenteFormResponseEnvio from "../../../Agentes/AgenteFormResponseEnvio";
import Esqueleton from "../../../Esqueleton/Esqueleton";
import axios from "axios";
import DetalleTrabajoLista from "./DetalleTrabajoLista";
import moment from "moment";

const DetalleTrabajo = ({ subdominio, codfilial, filial, tabName, url_base }) =>{

  const data = {
    url_Img : './../../../assets/img/actualidad/bolsaDeTrabajo/thirdman-161df6ba.jpg',
    title_Img : 'Bolsa Laboral | Iesap',
    title : 'Bolsa Laboral'
  }

  const [ dataEmplTile, setDataEmplTile ] = useState([]);
  const [ dataDetaEmpl, setDataDetaEmpl ] = useState([]);
  const [ isloading, setisloading ] = useState(true);

  const [ statusResponseSave, setStatusResponseSave] = useState(null);
  const [ msgResponseSave, setMsgResponseSave] = useState('');
  const [ isLoadingFormPost, setIsLoadingFormPost ] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const { keyt } = useParams();
  const [ inputKeyt, setInputKeyt] = useState(keyt);

  useEffect(() => {
    const getDataAlbum = async () => {
      try {
        const resp = await axios.get(`${url_base}api/webempleo/detEmp`,
        {
          params : {
            keyem: keyt
          }
        });
        if (resp.status === 200) {
          setTimeout(() => {
            setisloading(false);
            setDataDetaEmpl(resp.data);
            setDataEmplTile(resp.data[0])
          }, 2000)
        }
      } catch (error) {
        console.log(`${error}`)
      }
    }

    getDataAlbum();

  }, [ codfilial, url_base, keyt ])

  useEffect(() => {
    setInputKeyt(keyt);
  }, [keyt]);

  const onsubmit = (data) => {
    setIsLoadingFormPost(!isLoadingFormPost);
    const sendData = async() =>{
      try {
        const response = await fetch(`${url_base}api/webempleo/addposemp`, {
          method : 'POST',
          body : new URLSearchParams(
            {
              txtviewalumkeyem : data.txtviewalumkeyem,
              txtviewalumdni : data.txtviewalumdni,
            }
          )
        })
        if (response.status === 200) {
          const data = await response.json();
          const { status, msg } = data;
          if (status) {
            setIsLoadingFormPost(false);
            setStatusResponseSave(true);
            setMsgResponseSave(msg);
            setTimeout(()=>{
              navigate(`${subdominio}/${filial}/bolsa-laboral`);
            },7000)
          }else{
            setIsLoadingFormPost(false);
            setStatusResponseSave(false);
            setMsgResponseSave(msg);
          }
        }
      } catch (error) {
        setStatusResponseSave(false)
        setMsgResponseSave(error);
      }
    }
    sendData();
  }

  return(
    <>
      <Seo
        title={`Bolsa Laboral | ${dataEmplTile.cargo} | Iesap - ${tabName}`} 
        description="Instituto de educación superior privado Alas peruanas, cursos, academico filial piura filial arequipa filial ica filial chiclayo"
        name="Instituto alas peruanas"
        type="article"
      />

      <AgenteBanner databanner={data} />
      
      <section className="trabajoDetail__content">
        <div className="container">

          <div className="grid grid-gap-xs">
            <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12">

              {/* <div className="trabajoDetail__nav">
                <nav className="trabajoDetail__nav_list">
                  <Link to={`${subdominio}/${filial}/`} className="trabajoDetail__nav_list_item">
                    <IoHomeOutline className="trabajoDetail__nav_list_item_icon"/>
                    <span className="trabajoDetail__nav_list_item_text">Inicio</span>
                  </Link>
                  <BsChevronRight className="trabajoDetail__nav_list_icon_rigth"/>
                  <Link to={`${subdominio}/${filial}/bolsa-de-trabajo`} className="trabajoDetail__nav_list_item">
                    <span className="trabajoDetail__nav_list_item_text">Bolsa de Trabajo</span>
                  </Link>
                </nav>
              </div> */}

              <NavbarDetalleTrabajo subdominio={subdominio} filial={filial} />

            </div>
          </div>
          {
            (isloading)?
              <Esqueleton type={1} heigth={450} color="dark"/>
            :
            <>
              <div className="grid grid-gap-xs">
                <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12">
              
                  <div className="trabajoDetail__header">
                    <div className="trabajoDetail__header_left">
                      <h3 className="trabajoDetail__header_left_trab">{dataEmplTile.cargo}</h3>
                      <p className="trabajoDetail__header_left_entidad">{dataEmplTile.entidad}</p>
                    </div>
                    <div className="trabajoDetail__header_rigth">
                      <BsCheck2Circle className="trabajoDetail__header_rigth_icon_start"/>
                      <BsBookmark className="trabajoDetail__header_rigth_icon_bookmark"/>
                    </div>
                  </div>
              
                </div>
              </div>
              
              <div className="grid grid-gap-xs">
                <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-9 grid-res-lg-9 grid-res-xl-9">
              
                  <div className="trabajoDetail__description">
                    <div className="trabajoDetail__description_header">
                      <div className="trabajoDetail__description_header_time">
                        <BsClock className="trabajoDetail__description_header_time_icon"/>
                        <span className="trabajoDetail__description_header_time_text"> Publicado: {moment(`${dataEmplTile.fecReg}`).fromNow()}</span>
                      </div>
                      <div className="trabajoDetail__description_header_time">
                        <FiMapPin className="trabajoDetail__description_header_time_icon"/>
                        <span className="trabajoDetail__description_header_time_text"> {dataEmplTile.filial}, Perú</span>
                      </div>
                    </div>
              
                    <div className="trabajoDetail__description_body">
                      {
                        dataDetaEmpl.map((item,i) =>{
                          let keytype = parseInt(item.type);
                          return (
                            <div key={i}>
                              {
                                (() => {
                                  if(keytype === 1){
                                    // ?Parrafo
                                    return (
                                      <p className='trabajoDetail__description_body_des_lab'>{item.descr}</p>
                                    )
                                  }else if(keytype === 2){
                                    return(
                                      <div className="trabajoDetail__description_body_beneficios">
                                      <h3 className="trabajoDetail__description_body_beneficios_title">{item.descr}</h3>
                                        <DetalleTrabajoLista url_base={url_base} keydetEmp={item.keydet} />
                                      </div>
                                    )
                                  }else if(keytype === 3){
                                    return(
                                      <p className="trabajoDetail__description_body_text">{item.descr}</p>
                                    )
                                  }else if(keytype === 4){
                                    return(
                                      <h2 className="trabajoDetail__description_body_title">{item.descr}</h2>
                                    )
                                  }else if(keytype === 5){
                                    return(
                                      <h5 className="trabajoDetail__description_body_subtitle">{item.descr}</h5>
                                    )
                                  }
                                })()
                              }
                            </div>
                          )
                        })
                      }
                    </div>
              
                    <div className="trabajoDetail__description_footer">
                      <div className="trabajoDetail__description_footer_contat_content">
                        {/* <div className="trabajoDetail__description_footer_contact">
                          <BsClock className="trabajoDetail__description_footer_contact_icon"/>
                          <span className="trabajoDetail__description_footer_contact_tel">Full-time</span>
                        </div> */}
                        
                        <div className="trabajoDetail__description_footer_contact">
                          <HiOutlineOfficeBuilding className="trabajoDetail__description_footer_contact_icon"/>
                          <span className="trabajoDetail__description_footer_contact_tel">Presencial</span>
                        </div>
                      </div>
              
                    </div>
                  </div>
              
                </div>
              
                <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-3 grid-res-lg-3 grid-res-xl-3">
                <div className="trabajoDetail__description_postular">
                  {
                    (isLoadingFormPost === true)?
                      <Esqueleton type={1} heigth={150} color="dark"/>
                    :
                      <form onSubmit={handleSubmit(onsubmit)} className="trabajoDetail__formpostular">
              
                        <div className="trabajoDetail__formpostular_content">
                          <input type="hidden" className="trabajoDetail__formpostular_txt" value={inputKeyt}
                            {...register("txtviewalumkeyem",{
                              required : 'KeyEmp',
                            })} 
                          />
              
                          {errors.txtviewalumkeyem && 
                            <AgenteFormValidError msgValidacion={errors.txtviewalumkeyem.message} />
                          }
                        </div>
              
                        <div className="trabajoDetail__formpostular_content">
                          <input type="text" className="trabajoDetail__formpostular_txt"
                            {...register("txtviewalumdni",{
                              required : 'Debes ingresar tu dni',
                              pattern : {
                                value : /^[0-9]+$/,
                                message: 'Solo debes ingresar numeros',
                              },
                              minLength: {
                                value : 8,
                                message : 'El DNI debe tener minimo 8 caracteres'
                              },
                            })} 
              
                          />
              
                          {errors.txtviewalumdni && 
                            <AgenteFormValidError msgValidacion={errors.txtviewalumdni.message} />
                          }
                        </div>
              
                        <ul className="trabajoDetail__formpostular_guia">
                          <li className="trabajoDetail__formpostular_guia_item">
                            *Para poder postular primero debes estar registrado si no lo has hecho <Link to={`${subdominio}/${filial}/bolsa-laboral/registrarme`} className='trabajoDetail__formpostular_guia_item_lnk'>click aquí</Link>.
                            </li>
                          <li className="trabajoDetail__formpostular_guia_item">*Solo debes ingresar tu dni y pulsar click en boton postular.</li>
                        </ul>
                        <input type="submit" value="Postular" className="trabajoDetail__formpostular_btn"/>
              
                        {
                          statusResponseSave !== null && (
                            <AgenteFormResponseEnvio statusResponse={statusResponseSave} msgResponse={msgResponseSave} />
                          )
                        }
                        
                      </form>
                  }
                  </div>
                </div>
              </div>
            </>

          }

        </div>
      </section>
    </>
  )
}

export default DetalleTrabajo