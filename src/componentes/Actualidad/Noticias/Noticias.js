import React from 'react';
import './../../../css/sass/Actualidad/Noticias/_noticias.scss';
import AgenteBannerBlack from '../../Agentes/AgenteBannerBlack';
import ListNoticias from './ListNoticias';
import Seo from '../../Seo';

const Noticias = ({subdominio, codfilial, filial, tabName}) => {

  const data = {
    url_Img : './../assets/img/actualidad/noticias/d1a9421474d722351b3b18090646cfb0.jpg',
    title_Img : 'Noticias Iesap',
    title : 'Noticias'
  }

  return ( 
    <>
      <Seo 
        title={`Noticias | Iesap - ${tabName}`} 
        description="Instituto de educación superior privado Alas peruanas, cursos, academico filial piura filial arequipa filial ica filial chiclayo"
        name="Instituto alas peruanas"
        type="article"
      />
      <AgenteBannerBlack databanner={data}/>
      <ListNoticias subdominio={subdominio} codfilial={codfilial} filial={filial} />
    </>
  );
}
 
export default Noticias;