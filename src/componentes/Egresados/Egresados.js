import React from 'react';
import AgenteBanner from '../Agentes/AgenteBanner';
import ListEgresados from './ListEgresados';
import './../../css/sass/Egresados/_egresados.scss';
import Seo from '../Seo';

const Egresados = ({filial, tabName}) => {

  const databanner = {
    url_Img : './../assets/img/egresados/311476896_5745758008825218_1492683326058595052.jpg',
    title_Img : 'Egresados con éxito',
    title : 'Egresados con éxito'
  }

  return ( 
    <>
      <Seo 
        title={`Egresados | Iesap - ${tabName}`} 
        description="Instituto de educación superior privado Alas peruanas, cursos, academico filial piura filial arequipa filial ica filial chiclayo"
        name="Instituto alas peruanas"
        type="article"
      />
      {
        (databanner) &&
        <AgenteBanner databanner={databanner}/>
      }
      <ListEgresados/>
    </>
   );
}
 
export default Egresados;