import React from "react"
import { useParams } from "react-router-dom"
import NavbarDetalleTrabajo from "../Detalle/NavbarDetalleTrabajo";
import AgenteBanner from "../../../Agentes/AgenteBanner";
import './../../../../css/sass/Actualidad/BolsaDeTrabajo/FormularioPostulante/PageFormPostulante.scss';
import FormPostulante from "./FormPostulante";
import Seo from "../../../Seo";
import { BsPencilSquare } from "react-icons/bs";

export default function PageFormPostulante({ subdominio, filial, tabName, url_base }){

  const data = {
    url_Img : './../../../assets/img/actualidad/bolsaDeTrabajo/thirdman-161df6ba.jpg',
    title_Img : 'Bolsa Laboral | Iesap',
    title : 'Bolsa Laboral'
  }

  const { keyTr } = useParams();

  return(
    <>
      <Seo
        title={`Regístrate | Bolsa Laboral | Iesap - ${tabName}`} 
        description="Instituto de educación superior privado Alas peruanas, cursos, academico filial piura filial arequipa filial ica filial chiclayo"
        name="Instituto alas peruanas"
        type="article"
      />

      <AgenteBanner databanner={data} />

      <section className="trabajoFormPostulantePage__content">
        <div className="container">
          <div className="grid grid-gap-xs">
            <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12">

            <NavbarDetalleTrabajo subdominio={subdominio} filial={filial} />

            </div>
          </div>

          <div className="grid grid-gap-xs">
            <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12">

              <div className="formPostulante_content">
                <div className="formPostulante_content_title">
                  <BsPencilSquare className="formPostulante_title_icon"/>
                  <h3 className="formPostulante_title"> Ingrese sus datos</h3>
                </div>
                <FormPostulante keyTr={keyTr} url_base={url_base} subdominio={subdominio} filial={filial} />
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}