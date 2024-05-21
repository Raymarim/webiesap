import React from 'react';
import './../../css/sass/Agentes/_agenteTitulo.scss';

const Titulo = ({titulo}) => {
  return ( 
    <>
      <div className="web__container-title">
        <h2 className='web__title-global'>{titulo}</h2>
        {/* <div className="web__title-container-clip-path">
          <span className='web__title-clip-path-forma'></span>
        </div> */}

        <div className='web__title-line'></div>
      </div>
    </>
  );
}
 
export default Titulo;