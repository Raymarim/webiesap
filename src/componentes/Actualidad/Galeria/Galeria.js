import React from 'react';
import AgenteBannerBlack from '../../Agentes/AgenteBannerBlack';
import Albun from './Albun/Albun';
import Seo from '../../Seo';
import './../../../css/sass/Actualidad/Galeria/_galeria.scss';

const Galeria = ({subdominio, codfilial, filial, url_base, tabName}) => {

  const data = {
    url_Img : './../assets/img/galeria/8ad7fc65655cd21624dc773efe26b35e.jpg',
    title_Img : 'Galería Iesap',
    title : 'Galería'
  }

  return(
    <>
      <Seo 
        title={`Galería | Iesap - ${tabName}`} 
        description="Instituto de educación superior privado Alas peruanas, cursos, academico filial piura filial arequipa filial ica filial chiclayo"
        name="Instituto alas peruanas"
        type="article"
      />

      <AgenteBannerBlack databanner={data} />
      <Albun subdominio={subdominio} codfilial={codfilial} filial={filial} url_base={url_base} />
    </>
  )
}

export default Galeria