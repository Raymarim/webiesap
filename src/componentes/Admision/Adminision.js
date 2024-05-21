import React from 'react';
import Portada from './Portada';
// import Formulario from './Formulario';
import './../../css/sass/Admision/_admision.scss';
import Seo from '../Seo';

const Admision = ({keyfe, filial, dataProgramas, whua, tabName}) => {

  return ( 
    <>
      <Seo 
        title={`Admision | Iesap - ${tabName}`} 
        description="Instituto de educación superior privado Alas peruanas, cursos, academico filial piura filial arequipa filial ica filial chiclayo"
        name="Instituto alas peruanas"
        type="article"
      />
      <Portada dataProgramas={dataProgramas} keyfe={keyfe} whua={whua}/>
      {/* <Formulario dataProgramas={dataProgramas} keyfe={keyfe} whua={whua} /> */}
    </>
   );
}
 
export default Admision;