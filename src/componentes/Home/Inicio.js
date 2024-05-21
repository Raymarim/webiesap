import React from 'react';
import Seo from '../Seo';
import SliderBanner from './SliderBanner';
import Mapa from './Mapa';
import Bienvenido from './Bienvenido';
import Estudiar from './Estudiar';
import Licenciamiento from './Licenciamiento';
import Sedes from './Sedes';
// import Testimonios from './Testimonios';
import ProgramasList from '../Programas/ProgramasList';
import Video from './Video';
// import Estadistica from './Estadistica';
import Años from './Años';
import Convenios from './Convenios';
import './../../css/sass/Home/_inicio.scss';
// import Grilla from './../Grilla';
// import Filial from './Filial';

const Inicio = ({subdominio, codfilial, filial, dataFilial, tabName}) => {

  const {url_vid} = dataFilial;

  return ( 
    <>
      <Seo 
        title={`Instituto de Educación Euperior Privado - Alas  Peruanas | Iesap - ${tabName}`} 
        description="Instituto de Educación Superior Privado Alas peruanas, cursos, academico filial Piura filial arequipa filial ica filial chiclayo"
        name="Instituto Alas Peruanas"
        type="article"
      />
      <SliderBanner codfilial={codfilial} subdominio={subdominio} filial={filial}/>
      <Mapa subdominio={subdominio} codfilial={codfilial} filial={filial} dataFilial={dataFilial}/>
      {
        (codfilial === "a2ef406e2c2351e0b9e80029c909242d") && 
        <Bienvenido subdominio={subdominio} codfilial={codfilial} filial={filial}/>
      }
      <Estudiar codfilial={codfilial}/>
      <Licenciamiento codfilial={codfilial}/>
      <ProgramasList subdominio={subdominio} codfilial={codfilial} filial={filial}/>
      <Video codfilial={codfilial} url_vid={url_vid}/>

      {
        (codfilial === "96a3be3cf272e017046d1b2674a52bd3")?
          <Sedes subdominio={subdominio} filial={filial}/>
        :
        ""
      }
      <Convenios codfilial={codfilial}/>
      {
        (codfilial === 'a2ef406e2c2351e0b9e80029c909242d') &&
        <Años />
      }
      {/* <Estadistica /> */}
    </>
  );
}
 
export default Inicio;