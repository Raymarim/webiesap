import React from "react";
import AgenteBanner from "./../../Agentes/AgenteBanner";
import Seo from "../../Seo";
import Trabajos from "./Trabajos";

const BolsaDeTrabajo = ({ subdominio, codfilial, filial, tabName, url_base }) =>{

  const data = {
    url_Img : './../assets/img/actualidad/bolsaDeTrabajo/thirdman-161df6ba.jpg',
    title_Img : 'Bolsa Laboral | Iesap',
    title : 'Bolsa Laboral'
  }

  return(
    <>
      <Seo
        title={`Bolsa Laboral | Iesap - ${tabName}`} 
        description="Instituto de educación superior privado Alas peruanas, cursos, academico filial piura filial arequipa filial ica filial chiclayo"
        name="Instituto alas peruanas"
        type="article"
      />

      <AgenteBanner databanner={data} />
      <Trabajos subdominio={subdominio} filial={filial} codfilial={codfilial} url_base={url_base} />

    </>
  )
}

export default BolsaDeTrabajo;