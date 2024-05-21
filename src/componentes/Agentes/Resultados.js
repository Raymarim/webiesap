import React from "react";
import './../../css/sass/Agentes/_agenteResultados.scss';
// import styled from "styled-components";

const Resultados = ({ descripcion }) => {
  return(
    <>
      <div className="grid grid-gap-xs">
        <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12">
          <div className="galery__albun-result">
            <img src="/assets/img/galeria/guard-not-protect-1456897.svg" alt="Sin resultados" />
            <h5 className="galery__albun-result-title">{descripcion}</h5>
          </div>
        </div>
      </div>
    </>
  )
}

// const DescripcionResult = styled.h5`

// `;

export default Resultados