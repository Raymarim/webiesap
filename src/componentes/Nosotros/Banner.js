import React from 'react';
// import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity} from '@fortawesome/free-solid-svg-icons';
// import { faCircle} from '@fortawesome/free-regular-svg-icons';

const Banner = ({codfilial}) => {
  return ( 
    <section className='nosotros__banner'>
      <div className="container_xl">
        <div className="grid">
          <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>

            <div className='nosotros__banner-content-img'>
              <img src="./assets/img/nosotros/308057994_5688772404523779_1492527901438878682_n.jpg" alt="" className='nosotros__banner-img'/>
            </div>

            <div className="nosotros__banner-content">
              <h3 className='nosotros__banner-content-titulo'><FontAwesomeIcon icon={faUniversity} style={{fontSize: '30px'}}/> Nosotros</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}




export default Banner;