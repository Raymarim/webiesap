import React from 'react';
import './../../css/sass/Esqueleton/_esqueleton.scss'
import Loading from './Loading';
import Squeare from './Square';
import Spinner from './Spinner';

const Esqueleton = ({type, heigth, color, siseContent, siseSquare, siseLine}) => {

  return ( 
    <>
      {
        (() =>{
          if (type === Number(1)) {
            return(
              <Loading heigth={heigth} color={color}/>
            )
          }else if(type === Number(2)){
            return(
              <Squeare siseContent={siseContent} siseSquare={siseSquare} siseLine={siseLine} />
            )
          }else if (type === Number(3)) {
            return(
              <Loading color='dark' className="lds-dual-ring">
              </Loading>
            )
          }
          else if (type === Number(4)) {
            return(
              <Spinner />
            )
          }
        })()
      }
    </>
   );
}

export default Esqueleton;