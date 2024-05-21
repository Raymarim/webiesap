import React from 'react';
import './../../css/sass/error/error404.scss';
import { FcExpired, FcUp } from "react-icons/fc";

const Error404 = () => {
  return ( 
    <section className='error404_page'>
      <div className='container'>
        <div className="grid">
          <div className='grid-res-xs-12 grid-res-sm-12 grid-res-lg-12 grid-res-md-12 grid-res-xl-12'>
            <div className='error404_page-home'>
              {/* <picture>
                <source media="(max-width: 767.98px)" srcSet="./../assets/img/programas/040a401bd6ccf99692d8a37c751a555152a75004.jpg" sizes="" />
                <img src="./../assets/img/home/estadistica.jpg" alt="" className='error404_page-home-picture' width={800}/>
              </picture> */}
              <span className='error404_page-home-content-icon'><FcExpired className='error404_page-home-icon'/></span>
              <h3 className='error404_page-home-title'>Página no encontrada</h3>
              <p>Para buscar una página puedes ir al menu que se encuentra en la parte de arriba. <FcUp/> </p>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Error404;