import React from 'react';
import styled from 'styled-components';

const Squeare = ({siseContent, siseSquare, siseLine}) => {
  return ( 
    <>
      <Esqueletonn siseContent={siseContent} className='esqueleton'>
        <div className='grid grid-gap-xs'>
          <div className='grid-res-xs-4 grid-res-sm-4 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>
            <div className='esqueleton__left'>
              <Square siseSquare={siseSquare} className="esqueleton__left-square"></Square>
            </div>
          </div>
          <div className='grid-res-xs-4 grid-res-sm-4 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>
            <div className='esqueleton__rigth'>
              <Line siseLine={siseLine} className="esqueleton__rigth-line">
              </Line>
              <Line siseLine={siseLine}  className="esqueleton__rigth-line">
              </Line>
              <Line siseLine={siseLine} className="esqueleton__rigth-line">
              </Line>
            </div>
          </div>
        </div>
      </Esqueletonn>
    </>
  );
}

const Esqueletonn = styled.div`
  width: 100%;
  height: 50px;
  ${props => props.siseContent === 'small' && `
    width: 100%;
    height: 50px;
  `}
  ${props => props.siseContent === 'medium' && `
    width: 100%;
    height: 50px;
  `}
  ${props => props.siseContent === 'large' && `
    width: 100%;
    height: 50px;
  `}
`;

const Square = styled.div`
  height: 40px;
  ${(props) => props.siseSquare === 'small' && `
    height: 40px;
  `}
  ${(props) => props.siseSquare === 'medium' && `
    height: 140px;
  `}
  ${(props) => props.siseSquare === 'large' && `
    height: 160px;
  `}
`;

const Line = styled.div`
  height: 10px;
  ${(props) => props.siseLine === 'small' && `
    height: 10px;
  `}
  ${(props) => props.siseLine === 'medium' && `
    height: 20px;
  `}
  ${(props) => props.siseLine === 'large' && `
    height: 30px;
  `}
`;

export default Squeare;