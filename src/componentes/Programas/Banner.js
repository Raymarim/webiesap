import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return ( 
    <section className='programas__banner'>
      <div className="container_xl">
        <div className="grid">
          <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
            <div className='programas__banner-content-title'>
              <h4 className='programas__banner-title'><FontAwesomeIcon icon={faGraduationCap}/> Programas de estudio</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Banner;