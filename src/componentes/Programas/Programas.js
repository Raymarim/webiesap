import React from 'react';
import Banner from './Banner';
import ProgramasList from './ProgramasList';
import Seo from '../Seo';
import './../../css/sass/programas/_programas.scss';

const Programas = ({subdominio,codfilial,filial, tabName}) => {
  
  return ( 
    <>
      <Seo 
        title={`Programas de estudio | Iesap - ${tabName}`} 
        description="Instituto de educación superior privado Alas peruanas, cursos, academico filial piura filial arequipa filial ica filial chiclayo"
        name="Instituto alas peruanas"
        type="article"
      />
      <Banner/>
      <ProgramasList subdominio={subdominio} codfilial={codfilial} filial={filial}/>
    </>
   );
}
 
export default Programas;