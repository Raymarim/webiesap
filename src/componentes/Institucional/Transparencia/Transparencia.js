import React from 'react';
import './../../../css/sass/Institucional/Transparencia/_transparencia.scss';
import AgenteBanner from '../../Agentes/AgenteBanner';
import Documentacion from './Documentacion';
import Seo from '../../Seo';

const Transparencia = ({subdominio, codfilial, filial, tabName}) => {

  const data = {
    url_Img : './../assets/img/institucional/transpatencia/p.jpg',
    title_Img : 'Transparencia Iesap',
    title : 'Transparencia'
  }

  return ( 
    <>
      <Seo 
        title={`Transparencia | Iesap - ${tabName}`} 
        description="Instituto de educación superior privado Alas peruanas, cursos, academico sede central lima filial piura filial arequipa filial ica filial chiclayo"
        name="Instituto alas peruanas"
        type="article"
      />

      <AgenteBanner databanner={data} />
      <Documentacion codfilial={codfilial} />
    </>
  );
}
 
export default Transparencia;