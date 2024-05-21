import React, { useState, useEffect } from "react";
import './../../../css/sass/Actualidad/BolsaDeTrabajo/Trabajo.scss';
import { FiMapPin } from 'react-icons/fi'
import { HiOutlineStar } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import Esqueleton from "../../Esqueleton/Esqueleton";
import { GrClear } from "react-icons/gr";
import moment from 'moment/moment';

const Trabajos = ({ subdominio, codfilial, filial, url_base }) => {

  const [activeTab, setActiveTab ] = useState(0);
  const [ dataEmepleos, setDataEmepleos ] = useState([]);
  const [ isloading, setIsLoading ] = useState(true);

  const onclickiActiveTab = (index) =>{
    setActiveTab(index)
  }

  useEffect(() => {
    const getDataAlbum = async () => {
      try {
        const resp = await axios.get(`${url_base}api/webempleo/lisEmp`,
        {
          params : {
            keyf: codfilial
          }
        });
        if (resp.status === 200) {
          setTimeout(() => {
            setDataEmepleos(resp.data);
            setIsLoading(false);
          }, 2000)
        }
      } catch (error) {
        console.log(`${error}`)
      }
    }

    getDataAlbum();

  }, [ codfilial, url_base ])


  return(
    <>
      <section className="trabajo__content">
        <div className="container">
          <div className="grid grid-gap-xs">
            <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12">

              <ul className="trabajo__content_tabs">
                <li 
                className={`trabajo__content_tabs_items ${activeTab === 0 ? 'active' : ''}`} 
                onClick={() => onclickiActiveTab(0)}>Bolsa Laboral</li>

                <li 
                className={`trabajo__content_tabs_items ${activeTab === 1 ? 'active' : ''}`} 
                onClick={() => onclickiActiveTab(1)}>Motores de busqueda de Bolsa Laboral</li>

              </ul>

              <ul className="trabajo__content_tab">
                <li className={`trabajo__content_tab_childrem ${activeTab === 0 ? 'active' : ''}`} >
                  
                  {
                    (dataEmepleos)?
                      <>
                        {
                          (isloading)?
                          <Esqueleton type={1} heigth={450} color="dark"/>
                          :
                          <>
                          <div className="trabajo_content_list">
                          {
                            dataEmepleos.map((item) => {
                              return <Link key={item.keyem} to={`${subdominio}/${filial}/bolsa-laboral/${item.keyem}/${item.sluge}`}>
                              <div className="trabajo_content_list_card">
                              
                                <div className="trabajo_content_list_card_left">
                                  <div className="trabajo_content_list_card_left_header">
                                    <h3 className="trabajo_content_list_card_left_header_title">{item.cargo}</h3>
                                    <div className="trabajo_content_list_card_left_header_description">
                                      <span className="trabajo_content_list_card_left_header_description_entidad">{item.entidad.toUpperCase()} -</span>
                                      <span className="trabajo_content_list_card_left_header_description_publicacion"> Publicado {moment(`${item.fechaReg}`).fromNow()} </span>   
                                    </div>
                                  </div>
                              
                                  <div className="trabajo_content_list_card_left_body">
                                    <p className="trabajo_content_list_card_left_body_description">{`${item.descDet.substring(0 , 125)}...`}</p>
                                  </div>
                              
                                  <div className="trabajo_content_list_card_left_footer">
                                    <span className="trabajo_content_list_card_left_footer_lnk">Leer más</span>
                                    <IoIosArrowRoundForward className="trabajo_content_list_card_left_footer_lnk_icon"/>
                                  </div>
                                </div>
                              
                                <div className="trabajo_content_list_card_rigth">
                                  <div className="trabajo_content_list_card_rigth_adress">
                                    <FiMapPin className="trabajo_content_list_card_rigth_adress_icon"/>
                                    <span className="trabajo_content_list_card_rigth_adress_text">{item.filial}</span>
                                  </div>
                                  <button className="trabajo_content_list_card_rigth_btn"><HiOutlineStar /> Destacado</button>
                                </div>
                              
                              </div>
                            </Link >
                            })
                          }
                          </div>
                          </>
                        }
                      </>
                    :
                      <div className="trabajo__content_tab_count_reg">
                        <GrClear className="trabajo__content_tab_count_reg_icon"/>
                        <p>No se encontraron registros!!.</p>
                      </div>
                  }

                </li>
                <li className={`trabajo__content_tab_childrem ${activeTab === 1 ? 'active' : ''}`}>
                  
                  <div className="trabajo__content_lnks">
                    <a href="https://www.gob.pe/minedu" target="_black" rel="noreferrer">
                      <div className="trabajo__content_lnks_content_img">
                        <img src="./../assets/img/actualidad/bolsaDeTrabajo/entidades/minedu.png" alt="" className="trabajo__content_lnks_img"/>
                      </div>
                    </a>
                    <a href="https://pe.computrabajo.com/" target="_black" rel="noreferrer">
                      <div className="trabajo__content_lnks_content_img">
                        <img src="./../assets/img/actualidad/bolsaDeTrabajo/entidades/logo-computrabajo.jpg" alt="" className="trabajo__content_lnks_img"/>
                      </div>
                    </a>
                    <a href="https://www.perutrabajos.com/" target="_black" rel="noreferrer">
                      <div className="trabajo__content_lnks_content_img">
                        <img src="./../assets/img/actualidad/bolsaDeTrabajo/entidades/logo-trabajos-peru.png" alt="" className="trabajo__content_lnks_img"/>
                      </div>
                    </a>
                  </div>

                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Trabajos;