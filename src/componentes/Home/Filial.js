import React from 'react';
import styled from 'styled-components';

const Filial = ({codfilial}) => {
  // console.log(codfilial)
  return ( 
    <Contenedor>
      <h2>Filial</h2>
    </Contenedor>
   );
}
 
const Contenedor = styled.div`
  width: 100%;
  height: 50px;
  background-color: bisque;
`;
export default Filial;