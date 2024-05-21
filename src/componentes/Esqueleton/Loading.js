import React from 'react';
import styled from 'styled-components';

const Loading = ({heigth, color}) => {
  // console.log(color)
  return ( 
    <>
      <Loadingg color={color} style={{height : `${heigth}px`} } className="lds-dual-ring">
      </Loadingg>
    </>
  );
}

const Loadingg = styled.div`
  width: 100%;
  background-color: rgba(18, 18, 18, 0.019);
  ${(props) => props.color === 'dark' && `
    background: rgba(240, 234, 234, 0.179);
  `}
  ${(props) => props.color === 'ligth' && `
    background-color: rgba(18, 18, 18, 0.019);
  `}

  &::after{
    border-color: #fff transparent #fff transparent;

    ${(props) => props.color === 'dark' && `
      border-color: #000 transparent #000 transparent;
    `}
    ${(props) => props.color === 'ligth' && `
      border-color: #fff transparent #fff transparent;
    `}
  }
`;

export default Loading;